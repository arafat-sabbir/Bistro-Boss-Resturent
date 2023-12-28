import toast from "react-hot-toast";
import SectionTitle from "../../../Shared/SectionTitile/SectionTitle";
import UseMenu from "../../../assets/Hooks/UseMenu/UseMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../assets/Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItem = () => {
    const axiosSecure = useAxiosSecure()
  const {menu,refetch} = UseMenu();
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
          const swal = toast.loading("Deleting User");
          axiosSecure.delete(`/menu/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              toast.success("User Deleted Successfully", { id: swal });
              refetch();
            }
          });
        }
      });
  };
  const hanldeUpdate = () => {};
  console.log(menu);
  return (
    <div className="my-10 mx-auto flex flex-col justify-center items-center">
      <SectionTitle
        Title={"Manage All Item"}
        subTitle={"Hurry Up!"}
      ></SectionTitle>
      <div className="w-1/2 mx-auto my-10">
        <h3 className="text-2xl font-semibold text-center">
          Total Item Available {menu?.length}
        </h3>

        <div className="overflow-x-auto my-10">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-main rounded-3xl text-white text-[15px] ">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="h-16 w-16">
                      <img src={item?.image} alt="" />
                    </div>
                  </td>
                  <td className="font-semibold">{item?.name}</td>
                  <td>${item?.price}</td>
                  <td>
                    <button
                      onClick={() => hanldeUpdate(item)}
                      className="btn bg-main hover:bg-main text-white"
                    >
                      <FaEdit />
                    </button>
                  </td>
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
    </div>
  );
};

export default ManageItem;
