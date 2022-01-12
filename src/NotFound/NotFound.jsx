import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-10 ">
      <h1 className="text-3xl text-slate-500 font-bold">Page Not Found</h1>
      <Link to="/" className="underline text-blue-400">
        Back to App
      </Link>
    </div>
  );
}

export default NotFound;
