import React from "react";
import logo from "../assets/logo.webp";
import {Link}from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="flex m-3 space-x-8 items-center px-3 py-3">
        <img className="w-[50px] mr-6" src={logo} alt=""></img>
        <Link className="text-blue-500 text-2xl font-bold"  to="/">Movies</Link>
        <Link className="text-blue-500 text-2xl font-bold" to="/watchlist">WatchList</Link>
      </div>
    </>
  );
}

export default Navbar;
