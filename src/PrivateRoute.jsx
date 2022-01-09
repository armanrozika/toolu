import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth, onAuthStateChanged } from "./firebase";

function PrivateRoute() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  useEffect(() => {
    let mounted = true;
    onAuthStateChanged(auth, (u) => {
      if (u) {
        if (mounted) {
          setUser(u.uid);
          setLoading(false);
        }
      } else {
        if (mounted) {
          setLoading(false);
          setUser("");
        }
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <p className="italic">loading...</p>;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
