import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "react-query";

import iconGoogle from "../assets/googleicon.png";
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  authProvider,
  signInWithPopup,
} from "../firebase";
import voting from "../assets/voting-light.svg";
import { MailIcon, LockIcon } from "../assets/icon";
import Register from "./Register";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [errField, setErrField] = useState({
    status: false,
    text: "",
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);

  const loginUser = () => signInWithEmailAndPassword(auth, email, password);

  const loginGoogle = () => signInWithPopup(auth, authProvider);

  const { isLoading, isFetching, refetch } = useQuery("login", loginUser, {
    enabled: false,
    retry: false,
    onError: (error) => {
      if (error.code === "auth/user-not-found") {
        setErrField({ status: true, text: "Email tidak ditemukan" });
      }
      if (error.code === "auth/wrong-password") {
        setErrField({ status: true, text: "Password salah" });
      }
    },
    onSuccess: () => navigate("/"),
  });
  const { refetch: refetch2 } = useQuery("login-google", loginGoogle, {
    enabled: false,
    retry: false,
    onError: (error) => {
      // what could be the error here?
    },
    onSuccess: () => navigate("/"),
  });

  const handleLogin = (e) => {
    e.preventDefault();
    refetch();
  };
  const handleGoogleLogin = () => {
    refetch2();
  };

  const setFalseRegister = () => {
    setIsRegister(false);
  };

  return (
    <div>
      <div className="h-screen w-screen bg-teal-400 flex relative">
        <h1 className="z-50 absolute bottom-2 right-3 md:z-0 md:top-7 md:left-9 pt-2 text-teal-400 md:text-white text-3xl md:text-4xl font-bold">
          Tool<span className="text-orange-200">u</span>
        </h1>
        <div className="w-1/2 z-10 box-border relative hidden md:block">
          <img
            className=" w-4/5 absolute top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 "
            src={voting}
            alt="ilustrasi-pemilihan"
          />
        </div>
        {isRegister ? (
          <Register setFalseRegister={setFalseRegister} />
        ) : (
          <div className="w-full md:w-2/3 bg-white rounded-0 md:rounded-l-3xl relative">
            <p className="text-gray-600 float-right mr-8 mt-5">
              Belum punya akun?{" "}
              <span
                className="text-teal-500 cursor-pointer"
                onClick={() => setIsRegister(true)}
              >
                Register
              </span>
            </p>
            <div className="w-4/5 md:w-96 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
              {errField.status && (
                <p className="mb-2 text-red-400">{errField.text}</p>
              )}
              <h2 className="text-3xl text-gray-600 font-bold mb-5">Sign In</h2>
              <form className="w-full" onSubmit={handleLogin}>
                <div className="relative w-full bg-slate-100 px-6 py-3 rounded-full overflow-hidden mb-5 pl-9">
                  <div className="absolute left-5">{MailIcon()}</div>
                  <input
                    className="w-full bg-transparent focus:outline-none ml-5 pr-8"
                    type="text"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative w-full bg-slate-100 px-6 py-3 rounded-full overflow-hidden pl-9">
                  <div className="absolute left-5">{LockIcon()}</div>
                  <input
                    className="w-full ml-5 pr-8 bg-transparent focus:outline-none"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Link
                  to="/reset-password"
                  target="_blank"
                  className="block text-right mt-2 text-blue-500 text-sm cursor-pointer"
                >
                  Lupa password?
                </Link>
                <button className="w-1/2 bg-teal-400 text-white mt-5 px-10 py-3 font-bold rounded-full text-sm hover:bg-teal-500">
                  {isLoading || isFetching ? "LOGGING IN..." : "LOGIN"}
                </button>
              </form>
              <p className="mt-8 mb-2 text-gray-600">
                Atau sign in menggunakan akun Google
              </p>
              <div className="flex justify-center">
                <div
                  onClick={handleGoogleLogin}
                  className="mx-1 cursor-pointer"
                >
                  <img className="w-9" src={iconGoogle} alt="logo-google" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
