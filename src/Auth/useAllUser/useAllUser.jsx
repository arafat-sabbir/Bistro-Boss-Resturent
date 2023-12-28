import React from 'react';
import useAxiosSecure from '../../assets/Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users,refetch } = useQuery({
      queryKey: ["todos"],
      queryFn: async () => {
        const getUser = await axiosSecure.get("/users", {headers: 
            {authorization:`Bearer ${localStorage.getItem("access-token")}`}
        },);
        return getUser.data;
      },
    });
    return [users,refetch];
};

export default useAllUser;