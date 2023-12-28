import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../assets/Hooks/useAxiosSecure/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitile/SectionTitle";
import { FaTrash, FaUsers } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  //   const [users,refetch] = useAllUser*
  const {
    data: users = [],
    refetch,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const getUsers = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return getUsers.data;
    },
  });
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("User Deleted Successfully", { id: swal });
            refetch();
          }
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Make The User Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        const swal = toast.loading("Making User Admin");
        axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            toast.success(`${user.name} is a Admin Now`, { id: swal });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="my-10">
      <div className="max-w-7xl mr-40 mx-auto  my-10">
        <SectionTitle
          Title={"Manage All Users?"}
          subTitle={"My Cart"}
        ></SectionTitle>
        <div className="flex justify-between bg-gray-50 p-10 my-10 rounded-xl">
          <h3 className="text-3xl font-semibold">
            Total Users {users?.length}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-main rounded-3xl text-white text-[15px] ">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users ? (
                isLoading ? (
                  <p>loading</p>
                ) : (
                  isError ||
                  users?.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="">
                          <h3>{user.name}</h3>
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>
                        {user?.role === "Admin" ? (
                          <button onClick={()=>toast.error("User Already A Admin")} className="btn bg-main hover:bg-main text-white">
                            <RiAdminLine />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn bg-main hover:bg-main text-white"
                          >
                            <FaUsers />
                          </button>
                        )}
                      </td>
                      <th>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="btn bg-red-500 text-white hover:bg-red-500"
                        >
                          <FaTrash />
                        </button>
                      </th>
                    </tr>
                  ))
                )
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
