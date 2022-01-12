import React, { useState } from "react";
import { useQuery } from "react-query";
import { auth, sendPasswordResetEmail } from "../firebase";

import { MailIcon } from "../assets/icon";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [emailNotif, setEmailNotif] = useState("");

  const fetchReset = () => {
    return sendPasswordResetEmail(auth, email);
  };

  const { isLoading, isFetching, refetch, isError, error, isSuccess } =
    useQuery("reset-password", fetchReset, {
      enabled: false,
      retry: false,
      onSuccess: () => {
        setEmailNotif(email);
        setEmail("");
      },
    });

  const sendReset = (e) => {
    e.preventDefault();
    refetch();
  };
  return (
    <div>
      <h1 className="pt-2 text-teal-400 text-3xl md:text-4xl font-bold mt-5 ml-5 mb-10">
        Tool<span className="text-orange-200">u</span>
      </h1>
      <div className="w-5/6 md:w-96 my-0 mx-auto text-center">
        <h2 className="text-xl text-gray-600 font-bold mb-2">Reset Password</h2>
        <p className="mb-3 text-slate-500">
          Silakan submit email anda. Link untuk reset password akan dikirimkan
          ke email anda.
        </p>
        {isError && <p className="text-red-400 mb-2">{error.code}</p>}
        {isSuccess && (
          <p className="text-green-500 mb-3">
            Link reset password telah dikirimkan ke email{" "}
            <span className="text-slate-500">{emailNotif}</span>
          </p>
        )}

        <form onSubmit={sendReset} className="w-full  mx-auto text-center">
          <div className="relative w-full bg-slate-100 px-6 py-3 rounded-full overflow-hidden mb-5 pl-9">
            <div className="absolute left-5">{MailIcon()}</div>
            <input
              className="w-full bg-transparent focus:outline-none ml-5 pr-8"
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button className="w-1/2 bg-teal-400 text-white mt-2 px-10 py-3 font-bold rounded-full text-sm hover:bg-teal-500">
            {isLoading || isFetching ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
