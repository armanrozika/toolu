import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, PeopleIcon, AnalyticsIcon } from "../assets/icon";
import "./SideBar.css";

function SideBar() {
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
          className="hover:text-teal-400 flex items-center mb-10 text-sm font-bold text-gray-400 px-4 py-3 w-full"
          to="/team"
        >
          <PeopleIcon />
          <p className="ml-5">Team</p>
        </NavLink>
        <NavLink
          className="hover:text-teal-400 flex items-center text-sm font-bold text-gray-400 px-4 py-3 w-full"
          to="/result"
        >
          <AnalyticsIcon />
          <p className="ml-5">Result details</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
