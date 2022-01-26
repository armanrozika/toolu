import React from "react";

function InfoPenting() {
  return (
    <div className="p-5">
      <div className="w-full mb-10">
        <textarea
          className="w-full border-2 border-slate-400 rounded-lg p-3"
          rows="3"
        />
        <button className="text-sm bg-teal-400 text-white px-4 py-1 rounded-full">
          + Tambah
        </button>
      </div>
      <ul>
        <li className="list-disc text-slate-500 text-sm mb-5">
          Mohon semua anggota untuk menambahkan nomor TPS nya masing masing
        </li>
        <li className="list-disc text-slate-500 text-sm mb-5">
          TPS 9 di kabupaten maumere tengah itu dobel, anggota yang ngisi mohon
          bisa dicek lagi biar nggak bingung, thanks
        </li>
      </ul>
    </div>
  );
}

export default InfoPenting;
