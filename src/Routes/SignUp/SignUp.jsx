import { Link } from "react-router-dom";
import signUpimg from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const SignUp = () => {
    const [disabledSignIn,setDisabledSign] = useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleCaptch = (e)=>{
        const userCaptchaValue = e.target.value;
        if (validateCaptcha(userCaptchaValue)==true) {
            setDisabledSign(false)
        }
   
        else {
            setDisabledSign(true)
            toast.error('Captcha Does Not Match');
        }
    }
    return (
        <div id="signIn">
        <div className="flex h-screen gap-10 container mx-auto  justify-center items-center">
          <div className="w-1/2">
            <img src={signUpimg} alt="" />
          </div>
          <div className="w-1/2">
            <div className="card  w-3/4  mx-auto ">
              <form  className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span><LoadCanvasTemplate /></span>
                  </label>
                  <input
                    type="captcha"
                    name="captcha"
                    placeholder="Type the text above"
                    className="input input-bordered"
                    onBlur={handleCaptch}
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#D1A054B3] hover:bg-[#D1A054B3] text-white"
                    type="submit"
                    value="Sign UP"
                    disabled={disabledSignIn}
                  />
                </div>
                <p className="font-medium my-4 text-center">
                  Already Have an Account.?{" "}
                  <Link className="text-[#ffb84e] font-black" to={"/signIn"}>
                    SignIn{" "}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;