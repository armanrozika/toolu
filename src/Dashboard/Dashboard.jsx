import React from "react";
import { Link, Outlet } from "react-router-dom";
import { signOut, auth } from "../firebase";
import SideBar from "../SideBar/SideBar";

function Dashboard() {
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div className="">
      <SideBar />
      <div className="flex">
        <Outlet />
        <div className="fixed right-0 top-0 bg-slate-100 w-96 h-screen">
          <p>chat</p>
        </div>
      </div>

      {/* <button onClick={handleSignout}>Signout</button>
      <Link to="/setting">setting</Link>
      <Link to="/akun">akun</Link> */}
    </div>
  );
}

export default Dashboard;
