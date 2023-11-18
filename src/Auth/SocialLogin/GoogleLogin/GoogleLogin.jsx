import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../assets/Hooks/UseMenu/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../assets/Hooks/useAxiosPublic/useAxiosPublic";

const GoogleLogin = () => {
    const {googleSignIn} = useAuth()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    console.log(location.state);
    const navigate = useNavigate()
    const handleGoogleLogin =()=>{
        googleSignIn()
        .then(res=> {
            const userInfo = {
                email:res.user.email,
                name:res.user.displayName
            }
            console.log(res.user.email,res.user.displayName);
            axiosPublic.post(`/users?email=${res.user.email}`,userInfo)
            .then(res=> console.log(res.data))
            navigate(location.state?location.state:'/')
            toast.success("SuccessFull Sign In")
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn border-2 border-main hover:border-main rounded-full text-green-700"><FaGoogle/></button>
        </div>
    );
};

export default GoogleLogin;