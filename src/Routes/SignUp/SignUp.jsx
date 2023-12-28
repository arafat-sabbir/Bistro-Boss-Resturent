import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpimg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../../assets/Hooks/UseMenu/useAuth";
import useAxiosPublic from "../../assets/Hooks/useAxiosPublic/useAxiosPublic";
import GoogleLogin from "../../Auth/SocialLogin/GoogleLogin/GoogleLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const [disabledSignIn, setDisabledSign] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { createUser, updateUserInfo } = useAuth();
  const onSubmit = (data) => {
    const toastid = toast.loading("Sign Up Processing")
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        updateUserInfo(data.name, data.photoUrl)
          .then((res) => {
            const userdata = {
              email: data.email,
              name: data.name,
            };
            axiosPublic.post("/users", userdata).then((res) => {
              if (res.data.insertedId) {
                toast.success("Sign Up SuccessFully",{id:toastid})
                reset();
                navigate(location.state ? location.state : "/");
              }
            });
          })
          .catch((error) => console.log(error));
        console.log(data);
      })
      .catch((error) => {
        if(error.code ==="auth/email-already-in-use"){
          toast.error("Email Already Registered",{id:toastid})
        }
      });
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptch = (e) => {
    const userCaptchaValue = e.target.value;
    if (validateCaptcha(userCaptchaValue) == true) {
      setDisabledSign(false);
    } else {
      setDisabledSign(true);
      toast.error("Captcha Does Not Match Try Again");
    }
  };
  return (
    <div id="signIn">
      <div className="flex h-screen gap-10 container mx-auto  justify-center items-center">
        <div className="w-1/2">
          <img src={signUpimg} alt="" />
        </div>
        <div className="w-1/2">
          <div className="card  w-3/4  mx-auto ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  {...register("name")}
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
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 mt-4">Please Type An Email</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="photoUrl"
                  name="photoUrl"
                  className="input input-bordered"
                  {...register("photoUrl", { required: true })}
                />
                {errors.photoUrl && (
                  <p className="text-red-500 mt-4">Please give An PhotoUrl</p>
                )}
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
                  })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <div>
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500" role="alert">
                      Password Should Atleast 6 Character
                    </p>
                  )}
                  {errors.password?.type === "required" && (
                    <p className="text-red-500" role="alert">
                      Password Is required
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500" role="alert">
                      Password Should Contain atleast one Uppercase And One
                      Special Character
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span>
                    <LoadCanvasTemplate />
                  </span>
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
            <div className="divider"></div>
            <div className="mx-auto">
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
