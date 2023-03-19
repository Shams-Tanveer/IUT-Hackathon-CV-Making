import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import NavBar from "../../Shared/Navbar/Navbar";

const SideLayouts = () => {

  const activelink =
    "text-xl font-bold bg-gradient-to-r from-[#374151] to-[#374151] Text-gradient text-white rounded-2xl   ";
  const normallink = "text-xl my-3 font-semibold  text-error";
 




  const sidebarItems= (
    <>
   
      <li>

        
      <NavLink
          className={({ isActive }) => (isActive ? activelink : normallink)}
          to="/popular"
        >
         AI Generated CV
        </NavLink>
      </li>
      <li>

        
      <NavLink
          className={({ isActive }) => (isActive ? activelink : normallink)}
          to="/createdcv"
        >
         Created CV
        </NavLink>
      </li>

      <li>

        
<NavLink
    className={({ isActive }) => (isActive ? activelink : normallink)}
    to="/community"
  >
    AI Recommendation
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
          <ul className="menu p-4 w-60  bg-[#0c4a6e] ">
            {sidebarItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideLayouts;
