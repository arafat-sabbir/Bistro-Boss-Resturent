import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../UseMenu/useAuth";
import useIsAdmin from "../userIsAdmin/useIsAdmin";

const useAdmin = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    const {isadmin,adminloading} = useIsAdmin()
    console.log(isadmin,adminloading);
    if(loading || adminloading){
        return <p className="loading-spinner h-screen w-screen justify-center items-center">Loading</p>
    }
    if(user && isadmin){
        return children;
    }

    return <Navigate to={'/signIn'} state={location.pathname}></Navigate>
};

export default useAdmin;