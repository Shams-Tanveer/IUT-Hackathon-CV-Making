import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../../Shared/Navbar/Navbar";

const SideLayouts = () => {
  const sidebarItems = (
    
    <>
      <h1>Welecome to Seller Dash Board</h1>
      <Link className="btn btn-primary" to="/dashboard/seller/addProducts">
        Add a Product
      </Link>
      <Link className="btn btn-primary mt-10" to="/dashboard/seller/myproducts">
        My Products
      </Link>
      <Link className="btn btn-primary mt-10" to="/dashboard/seller/mybuyers">
        My Buyers
      </Link>
    </>
  );

  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content  bg-red-400 ">
            {sidebarItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideLayouts;
