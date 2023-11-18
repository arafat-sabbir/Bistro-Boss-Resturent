import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../assets/Hooks/UseMenu/useAuth";
import signInimg from "../../assets/others/authentication2.png";
import "./SignIn.css";
import GoogleLogin from "../../Auth/SocialLogin/GoogleLogin/GoogleLogin";

const SignIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state);
  const { signIn } = useAuth();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((res) => 
      {
        console.log(res.user)
        navigate(location.state?location.state:'/')
    })
      .catch((error) => console.log(error));
  };
  return (
    <div id="signIn">
      <div className="flex h-screen gap-10 container mx-auto  justify-center items-center">
        <div className="w-1/2">
          <img src={signInimg} alt="" />
        </div>
        <div className="w-1/2">
          <div className="card  w-3/4  mx-auto ">
            <form onSubmit={handleSignIn} className="card-body">
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
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054B3] hover:bg-[#D1A054B3] text-white"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <p className="font-medium my-4 text-center">
                New To Bistro Boss.?{" "}
                <Link className="text-[#ffb84e] font-black" to={"/signUp"}>
                  SignUP{" "}
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

export default SignIn;
