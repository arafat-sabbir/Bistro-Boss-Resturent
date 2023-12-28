import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../assets/Hooks/UseMenu/useAuth";
import useAxiosSecure from "../../../assets/Hooks/useAxiosSecure/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: adminstat = [] } = useQuery({
    queryKey: ["adminStat"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    }
})
console.log(adminstat)

  return (
    <div className="max-w-6xl mx-auto">
      <h1>
        Welcome {user.displayName ? <span>{user.displayName}</span> : "Back"}
      </h1>
        <h3>admin stats = {adminstat.orders}</h3>
    </div>
  );
};

export default AdminHome;
