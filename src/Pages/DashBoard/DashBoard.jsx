import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaCartPlus,
  FaEnvelope,
  FaHome,
  FaList,
  FaMoneyBill,
  FaShoppingBag,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

const DashBoard = () => {
  const isadmin = true;
  return (
    <div className="flex">
      <div className="h-screen w-64 bg-[#D1A054] fixed">
        <ul className="menu p-4 space-y-2 uppercase">
          {isadmin ? (
            <>
            {/* admin sidebar */}
              <li>
                {" "}
                <NavLink to={"/dashboard/adminHome"}>
                  {" "}
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/dashboard/addItem"}>
                  {" "}
                  <FaUtensils /> Add Item
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/dashboard/manageItem"}>
                  {" "}
                  <FaList />
                  Manage Item
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/dashboard/manageBookings"}>
                  {" "}
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/dashboard/allUsers"}>
                  {" "}
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            // user navbar
            <>
              <li>
                {" "}
                <NavLink to={"/dashboard/userHome"}>
                  {" "}
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/dashboard/reservation"}>
                  {" "}
                  <FaCalendar /> ReserVation
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/dashboard/paymentHistory"}>
                  {" "}
                  <FaMoneyBill /> Payment History
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/dashboard/myCart"}>
                  {" "}
                  <FaCartPlus /> My Cart
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/dashboard/addReview"}>
                  {" "}
                  <FaCartPlus />
                  Add Review
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/dashboard/myBookings"}>
                  {" "}
                  <FaCartPlus /> My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* Shared info */}
          <div className="divider "></div>
          <li>
            {" "}
            <NavLink to={"/"}>
              {" "}
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/menu"}>
              {" "}
              <FaList />
              Menu
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/"}>
              {" "}
              <FaShoppingBag />
              Shop
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/"}>
              {" "}
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className=" flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
