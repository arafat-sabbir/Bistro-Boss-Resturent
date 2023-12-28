import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../assets/Hooks/UseMenu/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    console.log(user);
    if(loading){
        return <p className="h-screen justify-center items-center loading-spinner"></p>
    }
    if(user){
        return children
    }
    else{
        return <Navigate state={location?.pathname} to={"/signIn"}></Navigate>
    }
    
};

export default PrivateRoute;