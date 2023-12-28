import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Shared/SectionTitile/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheakoutFrom from "./cheakoutFrom";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

  return (
    <div className="max-w-6xl mx-auto">
      <SectionTitle Title={"Pay Now"} subTitle={"Pay to Order"}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
            <CheakoutFrom></CheakoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
