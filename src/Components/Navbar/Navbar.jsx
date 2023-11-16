import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
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
            <div  className="normal-case flex items-center gap-2 text-xl text-white">
              <img src={logo} alt="" className="w-8 h-8 mb-2" />
              <h3>Bistro Boss</h3>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitem}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/signIn"} className="btn">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
