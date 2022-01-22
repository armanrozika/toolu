import React from "react";
import { Link, Outlet } from "react-router-dom";
import { signOut, auth } from "../firebase";
import SideBar from "../SideBar/SideBar";

function Dashboard() {
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div className="h-screen">
      <SideBar />
      <div className="bg-slate-50 pl-64 pr-96">
        <div className="h-screen overflow-y-scroll">
          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="fixed right-0 top-0 bg-white w-96 h-screen p-5">
        <p>chat</p>
      </div>

      {/* <button onClick={handleSignout}>Signout</button>
      <Link to="/setting">setting</Link>
      <Link to="/akun">akun</Link> */}
    </div>
  );
}

export default Dashboard;
