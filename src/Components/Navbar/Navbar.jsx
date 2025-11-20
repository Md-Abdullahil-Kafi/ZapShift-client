import React from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import { FaLocationArrow } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user, logOut}=useAuth();
  const handleLogOut = ()=>{
    logOut().then().catch(error => console.log(error))
  }
  const navLinks = (
    <>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/pricing"}>Pricing</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar mb-5 font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="text-xl">
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 px-1 *btn *btn-ghost transition-all duration-700">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
      {
        user ? <button onClick={handleLogOut} className="btn border-zinc-300 text-gray-500 bg-transparent hover:bg-base-300">LogOut</button> :
          <Link to='/login' className="btn border-zinc-300 text-gray-500 bg-transparent hover:bg-base-300">Sign In</Link>
      }
        <Link className="flex items-center" to='/rider' >
          <span className=" rounded-md bg-primary btn ">Be a Rider </span>
        <span className="bg-gray-700 text-white p-2 rounded-full">
          <FaLocationArrow size={28}></FaLocationArrow>
        </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
