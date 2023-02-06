import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container ">
          <Link to={"/"} className="navbar-brand ">
            <i className="fa fa-address-book text-warning mx-2" />
            Contact-App
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
