import React from "react";
import { NavLink } from "react-router-dom";
import { signOut, auth } from "../firebase";

import { HomeIcon, PeopleIcon, AnalyticsIcon } from "../assets/icon";
import dataArranging from "../assets/dataArranging.png";
import "./SideBar.css";

function SideBar() {
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div className="w-64 h-screen px-9 fixed left-0 top-0 bg-white">
      <h1 className="pt-2 text-teal-400 text-3xl md:text-3xl font-bold mt-2 mb-20">
        Tool<span className="text-orange-200">u</span>
      </h1>
      <div className="">
        <NavLink
          className="hover:text-teal-400 flex items-center mb-10 text-sm font-bold text-gray-400 px-4 py-3 w-full"
          to="/"
        >
          <HomeIcon />
          <p className="ml-5">Overview</p>
        </NavLink>
        <NavLink
          className="hover:text-teal-400 flex mb-10 items-center text-sm font-bold text-gray-400 px-4 py-3 w-full"
          to="/result"
        >
          <AnalyticsIcon />
          <p className="ml-5">Result details</p>
        </NavLink>
        <NavLink
          className="hover:text-teal-400 flex items-center  text-sm font-bold text-gray-400 px-4 py-3 w-full"
          to="/team"
        >
          <PeopleIcon />
          <p className="ml-5">Team</p>
        </NavLink>
      </div>
      <div className="w-full absolute -bottom-12 left-0 text-center">
        <button
          className="bg-teal-400 text-white px-8 py-2 text-xs font-bold rounded-full cursor-pointer hover:bg-teal-500"
          onClick={handleSignout}
        >
          LOGOUT
        </button>
        <img src={dataArranging} alt="" />
      </div>
    </div>
  );
}

export default SideBar;
