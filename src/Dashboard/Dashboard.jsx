import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import InfoPenting from "../InfoPenting/InfoPenting";
import MobileMenu from "../SideBar/MobileMenu";

function Dashboard() {
  return (
    <div className="h-screen">
      <SideBar />
      <MobileMenu />
      <div className="bg-slate-50 pl-2 pr-2 md:pl-64 md:pr-96 h-screen">
        <div className="md:h-screen overflow-y-scroll">
          <div className="p-5 md:p-8 pb-20 bg-slate-50 h-full">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="fixed right-0 top-0 bg-white w-96 h-screen p-5 overflow-y-scroll hidden md:block">
        <h2 className="text-sm font-bold text-slate-500">Informasi Penting</h2>
        <InfoPenting />
      </div>
    </div>
  );
}

export default Dashboard;
