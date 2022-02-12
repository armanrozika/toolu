import React from "react";

function Akun() {
  return (
    <div>
      <h2 className="font-bold text-xl text-teal-400">Akun</h2>
      <div className="mt-5">
        <input
          type="text"
          className="p-2 w-64 rounded-md border border-slate-300"
        />
        <button className="ml-3 py-2 px-5 rounded-md bg-teal-500 text-white">
          Change
        </button>
      </div>
      <button className="mt-9 text-sm bg-rose-500 text-white px-5 py-2 rounded-md">
        Hapus akun
      </button>
    </div>
  );
}

export default Akun;
