import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../UseMenu/useAuth';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const useIsAdmin = () => {
    const {user,loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:isadmin,isPending:adminloading} = useQuery({
        queryKey:[user?.email,"admin"],
        enabled:!loading,
        queryFn:async()=>{
            const res =await axiosSecure.get(`/user/admin/${user?.email}`)
            console.log(res.data);
            return res.data.isadmin;
        }
    })
    return {isadmin,adminloading}
};

export default useIsAdmin;