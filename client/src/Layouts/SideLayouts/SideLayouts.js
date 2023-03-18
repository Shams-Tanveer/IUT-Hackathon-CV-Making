import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import NavBar from "../../Shared/Navbar/Navbar";

const SideLayouts = () => {

  const activelink =
    "text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 Text-gradient text-white rounded-3xl h-1/2  ";
  const normallink = "text-xl my-3 font-semibold text-neutral";
 




  const sidebarItems= (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activelink : normallink)}
          to="/"
        >
          Home
        </NavLink>

      </li>
      <li>

        
      <NavLink
          className={({ isActive }) => (isActive ? activelink : normallink)}
          to="/popular"
        >
          Popular
        </NavLink>
      </li>

      <li>

        
<NavLink
    className={({ isActive }) => (isActive ? activelink : normallink)}
    to="/community"
  >
    Community
  </NavLink>
</li>

<li>

        
<NavLink
    className={({ isActive }) => (isActive ? activelink : normallink)}
    to="/custom"
  >
    Custom
  </NavLink>
</li>



    
    </>
  );





  return (
    <div>
     
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mt-0 ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content  bg-red-400 ">
            {sidebarItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideLayouts;
