import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>menu</h1>
      <Link to="/setting">setting</Link>
      <Link to="/akun">akun</Link>
      <Outlet />
    </div>
  );
}

export default Dashboard;
