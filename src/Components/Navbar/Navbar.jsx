import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import useAuth from "../../assets/Hooks/UseMenu/useAuth";
import { BsCart2 } from "react-icons/bs";
import useCart from "../../assets/Hooks/UseCart/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart()
  const handleSignOut = () => {
    logOut()
    .then(res=> console.log(res))
    .catch(error=> console.log(error))
  };
  const navitem = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Now</NavLink>
      </li>
      <li>
        <NavLink to={"dashboard/myCart"}><BsCart2></BsCart2> My Cart <span className={user?"badge bg-main text-white border-none":''}>{user?cart?.length:""}</span>  </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black rounded-xl fixed bg-opacity-30 z-50 container mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52"
            >
              {navitem}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="normal-case flex items-center gap-2 text-xl text-white">
              <img src={logo} alt="" className="w-8 h-8 mb-2" />
              <h3>Bistro Boss</h3>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitem}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown  dropdown-bottom dropdown-end">
            <label tabIndex={0} className="">
              {user && (
                <img
                  className="w-12 mr-4 h-12  rounded-full border-2 border-main mb-4 mt-4"
                  src={user?.photoURL ? user.photoURL : ""}
                  alt=""
                />
              )}
            </label>
            {user && (
              <ul className="p-2 shadow menu dropdown-content  z-50 bg-base-100 rounded-box w-56">
                <img
                  className=" w-12 mx-auto  rounded-full mb-2 mt-2 border-2 border-main"
                  src={user?.photoURL ? user.photoURL : ""}
                  alt=""
                />
                <p className="font-semibold text-center mr-2 mb-2 text-main ">
                  {user.displayName}
                </p>
                <p className="font-semibold text-center mr-2 mb-2  text-main ">
                  {user.email}
                </p>
                <button
                  onClick={handleSignOut}
                  className="cursor-pointer w-11/12 mx-auto  rounded-2xl font-semibold overflow-hidden relative z-100 border border-main px-2 py-2 mb-2 text-main"
                >
                  Sign Out
                </button>
              </ul>
            )}
          </div>
          {user ? (
            ""
          ) : (
            <div>
              <Link to={"/signIn "} className="">
              <button className="smky-btn3 relative text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-main after:rounded-t-full after:w-full after:bottom-0 after:left-0 ">Sign In</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
