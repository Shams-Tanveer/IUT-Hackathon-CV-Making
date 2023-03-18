import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { themeChange } from "theme-change";
// import logo from "../../../assets/logo.png";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

import {BsBriefcase} from  'react-icons/bs';

const NavBar = () => {
  const themeValues = ["light", "dark"];

  const activelink =
    "text-xl font-bold bg-gradient-to-r from-[#374151] to-[#374151] Text-gradient text-white rounded-2xl  ";
  const normallink = "text-xl my-3 font-semibold  text-error";

  const { user, logout } = useContext(AuthContext);

  console.log(user);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navBarItems = (
    <>

      

     
      

      

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activelink : normallink)}
          to="/"
        >
          Home
        </NavLink>

       
        <NavLink
          className={({ isActive }) => (isActive ? activelink : normallink)}
          to="/templates"
        >
         Templates
        </NavLink>




        <NavLink
          className={({ isActive }) => (isActive ? activelink : normallink)}
          to="/aboutus"
        >
         About US
        </NavLink>
        {user?.uid ? (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? activelink : normallink)}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <button onClick={handleLogout}>Sign Out</button>
          </>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? activelink : normallink)}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>

      
    </>
  );

  useEffect(() => {
    themeChange(false);
  });

  return (
    <div className="navbar bg-neutral  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* navitems here */}
            {navBarItems}
          </ul>
        </div>
        <div className="text-white text-xl flex gap-3">
          <BsBriefcase />
              <span>
                Employ Me Now
              </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* nav items */}
          {navBarItems}
          {/* theme change here */}
        </ul>
      </div>

      <div className="navbar-end">
        {user?.uid && (
          <div>
            <div className="avatar">
              {" "}
              <div className="w-24 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>{" "}
            </div>
            <p className="text-acceent font-bold text-xl">{user.displayName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
