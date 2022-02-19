import React from "react";
import { NavLink } from "react-router-dom";
import { signOut, auth } from "../firebase";
import Select from "react-select";

import {
  HomeIcon,
  PeopleIcon,
  AnalyticsIcon,
  AccountCogIcon,
} from "../assets/icon";
import dataArranging from "../assets/dataArranging.png";
import "./SideBar.css";

function SideBar() {
  const optionsTeam = [
    { value: "id1", label: "TIM SUKSES MAJU" },
    { value: "id2", label: "CAGUB NTB 3" },
  ];
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div className="w-64 h-screen px-9 fixed left-0 top-0 bg-white hidden md:block">
      <h1 className="pt-2 text-teal-400 text-3xl md:text-3xl font-bold mt-2 mb-10">
        Tool<span className="text-orange-200">u</span>
      </h1>
      {/* <Select className="text-slate-600" options={optionsTeam} /> */}
      <div className="mt-10">
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
          className="hover:text-teal-400 flex items-center  text-sm font-bold text-gray-400 px-4 py-3 w-full mb-10"
          to="/team"
        >
          <PeopleIcon />
          <p className="ml-5">Team</p>
        </NavLink>
        <NavLink
          className="hover:text-teal-400 flex  items-center text-sm font-bold text-gray-400 px-4 py-3 w-full"
          to="/akun"
        >
          <AccountCogIcon />
          <p className="ml-5">Akun</p>
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
