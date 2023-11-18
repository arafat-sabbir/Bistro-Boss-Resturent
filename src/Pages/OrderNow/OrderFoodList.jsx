import Swal from "sweetalert2";
import useAuth from "../../assets/Hooks/UseMenu/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../assets/Hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../assets/Hooks/UseCart/useCart";

const OrderFoodList = ({ items }) => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleOrder = (item) => {
    const toastid = toast.loading("Ordering Food");
    const cartdata = {
      userEmail: user?.email,
      foodid: item._id,
      Name: item.name,
      image: item.image,
      price: item.price,
    };
    if (user) {
      axiosSecure.post("http://localhost:5000/carts", cartdata).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Food Ordered Successfully", { id: toastid });
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "Your'e Not Sign In?",
        text: "Sign In To Order Food!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Take Me to Sign In!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn", { state: location.pathname });
        }
      });
    }
  };

  return (
    <div className="grid grid-cols-4 gap-10 my-10">
      {items.map((item) => (
        <div key={item._id} className="card w-[370px] bg-base-100 border-2">
          <figure>
            <img src={item.image} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <h2 className="card-title">Price: ${item.price}</h2>
            <p>{item.recipe}</p>
            <div className="card-actions justify-center">
              <button
                onClick={() => handleOrder(item)}
                className="btn border-b-2  hover:border-b-yellow-500 border-b-yellow-500"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderFoodList;
