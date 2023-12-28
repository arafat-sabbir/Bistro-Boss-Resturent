import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const UseMenu = () => {
  const axiosPublic = useAxiosPublic();
  const { data: menu = [], isLoading: loading,refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });
  return {menu, loading,refetch};
};

export default UseMenu;
