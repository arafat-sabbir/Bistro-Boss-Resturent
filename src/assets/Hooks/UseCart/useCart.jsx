import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useAuth from "../UseMenu/useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const { data: cart,refetch = [] } = useQuery({
    queryKey: ["todos",user],
    queryFn: async () => {
      const getcart = await axiosSecure.get(`/carts?email=${user.email}`);
      return getcart.data;
    },
  });
  return [cart,refetch];
};

export default useCart;
