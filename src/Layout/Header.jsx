import React from "react";
import logo from "../assets/Logo.jpg";
import { NavLink, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const links = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/all-books">All Books</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/my-books">My Books</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/add-books">Add Books</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            {links}
          </ul>
        </div>
        <a href="/">
          <div className="flex items-center justify-between btn btn-ghost text-4xl font-bold">
            <div>
              <img className="rounded-full h-10" src={logo} alt="" />
            </div>
            <div className="hidden md:block">Book Heaven</div>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className=" bg-indigo-600 hover:bg-indigo-700 text-white font-bold 
                       py-2 px-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/register")}
          className=" bg-indigo-600 hover:bg-indigo-700 text-white font-bold 
                       py-2 px-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
