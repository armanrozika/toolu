import React from "react";
import { Link, Outlet } from "react-router-dom";
import { signOut, auth } from "../firebase";
import SideBar from "../SideBar/SideBar";

function Dashboard() {
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div className="flex">
      <SideBar />
      <div>
        <Outlet />
      </div>
      {/* <button onClick={handleSignout}>Signout</button>
      <Link to="/setting">setting</Link>
      <Link to="/akun">akun</Link> */}
    </div>
  );
}

export default Dashboard;
