import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  auth,
  updateProfile,
} from "../firebase";

import {
  MailIcon,
  LockIcon,
  AccountIcon,
  UnlockFillIcon,
} from "../assets/icon";

function Register({ setFalseRegister }) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    name: "",
    password: "",
    rePassword: "",
  });

  const [errField, setErrField] = useState({
    status: false,
    text: "Semua field harus diisi",
  });

  const registerUser = () => {
    return createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
  };
  const registerName = () => {
    const user = auth.currentUser;
    return updateProfile(user, { displayName: userDetails.name });
  };

  const { isFetching: isFetchingName, refetch: refetchName } = useQuery(
    "set-name",
    registerName,
    {
      enabled: false,
      retry: false,
      onSuccess: () => {
        navigate("/");
      },
    }
  );

  const { isLoading, isFetching, refetch } = useQuery(
    "register",
    registerUser,
    {
      enabled: false,
      retry: false,
      onError: (error) => {
        const ina = () => {
          if (error.code === "auth/invalid-email") {
            return "Email salah";
          }
          if (error.code === "auth/email-already-in-use") {
            return "Email sudah digunakan";
          }
        };
        setErrField({
          status: true,
          text: ina(),
        });
      },
      onSuccess: () => {
        refetchName();
      },
    }
  );

  const handleInput = (e, type) => {
    if (type === "email")
      setUserDetails({ ...userDetails, email: e.target.value });
    if (type === "name")
      setUserDetails({ ...userDetails, name: e.target.value });
    if (type === "password")
      setUserDetails({ ...userDetails, password: e.target.value });
    if (type === "repassword")
      setUserDetails({ ...userDetails, rePassword: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userDetails.email ||
      !userDetails.name ||
      !userDetails.password ||
      !userDetails.rePassword
    ) {
      setErrField({
        status: true,
        text: "Semua field harus diisi",
      });
      return;
    }
    if (userDetails.password !== userDetails.rePassword) {
      setErrField({
        status: true,
        text: "Password tidak sama",
      });
      return;
    }
    if (userDetails.password.length < 6) {
      setErrField({
        status: true,
        text: "Password minimal 6 karakter",
      });
      return;
    }
    refetch();
  };

  return (
    <div className="w-full md:w-2/3 bg-white rounded-0 md:rounded-l-3xl relative">
      <div className="w-4/5 md:w-96 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
        {errField.status && (
          <p className="mb-2 text-red-400">{errField.text}</p>
        )}
        <h2 className="text-3xl text-gray-600 font-bold mb-5">Register</h2>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="relative w-full bg-slate-100 px-6 py-3 rounded-full overflow-hidden mb-5 pl-9">
            <div className="absolute left-5">{MailIcon()}</div>
            <input
              onChange={(e) => handleInput(e, "email")}
              className="w-full bg-transparent focus:outline-none ml-5 pr-8"
              type="text"
              placeholder="Email"
              required
            />
          </div>
          <div className="relative w-full bg-slate-100 px-6 py-3 rounded-full overflow-hidden mb-5 pl-9">
            <div className="absolute left-5">{AccountIcon()}</div>
            <input
              onChange={(e) => handleInput(e, "name")}
              className="w-full bg-transparent focus:outline-none ml-5 pr-8"
              type="text"
              placeholder="Nama"
              required
            />
          </div>
          <div className="relative mb-5 w-full bg-slate-100 px-6 py-3 rounded-full overflow-hidden pl-9">
            <div className="absolute left-5">{LockIcon()}</div>
            <input
              onChange={(e) => handleInput(e, "password")}
              className="w-full ml-5 pr-8 bg-transparent focus:outline-none"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="relative w-full bg-slate-100 px-6 py-3 rounded-full overflow-hidden pl-9">
            <div className="absolute left-5">{UnlockFillIcon()}</div>
            <input
              onChange={(e) => handleInput(e, "repassword")}
              className="w-full ml-5 pr-8 bg-transparent focus:outline-none"
              type="password"
              placeholder="Ulangi password"
              required
            />
          </div>
          <p className="text-left text-sm mt-2 italic text-gray-500">
            (Password minimal 6 karakter)
          </p>

          <button className="w-1/2 bg-teal-400 text-white mt-5 px-10 py-3 font-bold rounded-full text-sm hover:bg-teal-500">
            {isLoading || isFetching || isFetchingName
              ? "Registering..."
              : "Register"}
          </button>
        </form>
        <p className="mt-2 md:mt-8 text-gray-600">
          Sudah punya akun?{" "}
          <span
            className="text-teal-500 cursor-pointer"
            onClick={setFalseRegister}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
