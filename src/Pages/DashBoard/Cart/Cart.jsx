import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitile/SectionTitle";
import useCart from "../../../assets/Hooks/UseCart/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../assets/Hooks/useAxiosSecure/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const price = cart?.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure()
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const swal = toast.loading('Deleting Food')
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        axiosSecure.delete(`/carts/${id}`)
        .then((res) => {
            if(res.data.deletedCount >0){
                toast.success('Food Deleted Successfully',{id:swal})
                refetch()
            }
        });
      }
    });
  };
  return (
    <div className="max-w-7xl mr-40 mx-auto  my-10">
      <SectionTitle
        Title={"WANNA ADD MORE?"}
        subTitle={"My Cart"}
      ></SectionTitle>
      <div className="flex justify-between bg-gray-50 p-10 my-10 rounded-xl">
        <h3 className="text-3xl font-semibold">Total Order {cart?.length}</h3>
        <h3 className="text-3xl font-semibold">Total Price ${price}</h3>
       {
        cart?.length >0? <Link to={'/dashboard/payment'}>
        <button className="bg-main btn hover:bg-main text-white">Pay</button>
        </Link>:<button disabled={true} className="bg-main btn hover:bg-main text-white">Pay</button>
       }
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-main rounded-3xl text-white text-[15px] ">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center">
                    <div className="avatar h-16 w-16 rounded-xl">
                      <img src={item.image} alt="" className="rounded-xl" />
                    </div>
                  </div>
                </td>
                <td>{item.Name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-red-500 text-white hover:bg-red-500"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
