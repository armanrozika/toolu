import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  AnalyticsIcon,
  PeopleIcon,
  AccountCogIcon,
  InfoIcon,
} from "../assets/icon";

function MobileMenu() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 p-4 bg-white w-full border-gray-300 border-t flex justify-between text-slate-600">
      <NavLink to="/">
        <HomeIcon />
      </NavLink>
      <NavLink to="/result">
        <AnalyticsIcon />
      </NavLink>
      <NavLink to="/team">
        <PeopleIcon />
      </NavLink>
      <NavLink className="md:hidden block" to="/info">
        <InfoIcon />
      </NavLink>
      <NavLink to="/akun">
        <AccountCogIcon />
      </NavLink>
    </div>
  );
}

export default MobileMenu;
