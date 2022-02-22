import React from "react";

import { CloseCircleIcon } from "../assets/icon";

function ModalTeam({ isShowed, closeModal, isHapus }) {
  return (
    <div
      className={`${
        isShowed ? "block" : "hidden"
      } fixed top-0 left-0 bg-slate-800/50 w-screen h-screen z-10`}
    >
      <div className="w-5/6 md:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl">
        <div
          onClick={closeModal}
          className="absolute -top-2 -right-2 cursor-pointer"
        >
          <CloseCircleIcon />
        </div>
        {isHapus ? (
          <>
            <p className="mb-5 text-slate-600">Hapus team?</p>
            <button className="text-sm text-white px-5 py-2 bg-rose-500 rounded-lg mr-5">
              Hapus
            </button>
            <button
              onClick={closeModal}
              className="text-sm text-white px-5 py-2 bg-teal-500 rounded-lg"
            >
              Batal
            </button>
          </>
        ) : (
          <>
            <p className="text-slate-600">Nama Team:</p>
            <input
              type="text"
              className="border border-gray-300 w-full rounded-lg mt-2 p-2"
            />
            <button className="text-sm text-white px-5 py-2 bg-teal-500 rounded-lg mt-5">
              Buat Team
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalTeam;
