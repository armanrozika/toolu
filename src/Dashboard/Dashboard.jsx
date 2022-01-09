import React from "react";
import { Link, Outlet } from "react-router-dom";
import { signOut, auth } from "../firebase";

function Dashboard() {
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div>
      <h1>menu</h1>
      <button onClick={handleSignout}>Signout</button>
      <Link to="/setting">setting</Link>
      <Link to="/akun">akun</Link>

      <Outlet />
    </div>
  );
}

export default Dashboard;
