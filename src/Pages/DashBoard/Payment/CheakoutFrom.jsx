import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../assets/Hooks/useAxiosSecure/useAxiosSecure";
import { useEffect } from "react";
import useCart from "../../../assets/Hooks/UseCart/useCart";
import useAuth from "../../../assets/Hooks/UseMenu/useAuth";
import toast from "react-hot-toast";

const CheakoutFrom = () => {
  const stripe = useStripe();
  const {user} = useAuth()
  const [transactionId,setransactionId] = useState()
  const [error, setError] = useState("");
  const [clientSecret,setClientSecret]  = useState('')
  const elements = useElements();
  const [cart] = useCart();
  const price = cart?.reduce((total, item) => total + item.price, 0);
  console.log(price);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price })
    .then(res => {
      setClientSecret(res.data.clientSecret)
    })
  }, [price,axiosSecure]);

  const handleSubmit = async (e) => {
    const pid = toast.loading("Payment Loading")
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      console.log("payment method",paymentMethod);
      setError("");
    }

    const {error:ConfirmError,paymentIntent} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
          name:user?.displayName || "anonymous",
          email:user?.email || "anonymous",
        }
      }
    })
    if(ConfirmError){
      // setError(cardConfirmError)
      console.log(ConfirmError);
    }else{
      console.log("payment intent",paymentIntent);
    }
    if(paymentIntent.status ==="succeeded"){
      toast.success("payment successful",{id:pid})
      setransactionId(paymentIntent.id)
    }

  };
  return (
    <form className="max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn bg-main hover:bg-main mx-auto my-4"
        type="submit"
        disabled={!stripe ||!clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {
        transactionId && <p>your transactionId is {transactionId}</p>
      }
    </form>
  );
};

export default CheakoutFrom;
