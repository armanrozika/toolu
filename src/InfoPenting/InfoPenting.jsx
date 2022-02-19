import React from "react";
import { TrashFillIcon } from "../assets/icon";

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
        <div className="flex mb-5 justify-between items-center">
          <li className="list-disc text-slate-500 text-sm w-5/6">
            Mohon semua anggota untuk menambahkan nomor TPS nya masing masing
          </li>
          <TrashFillIcon className="cursor-pointer" />
        </div>
        <div className="flex mb-5 justify-between items-center">
          <li className="list-disc text-slate-500 text-sm w-5/6">
            TPS 9 di kabupaten maumere tengah itu dobel, anggota yang ngisi
            mohon bisa dicek lagi biar nggak bingung, thanks
          </li>
          <TrashFillIcon className="cursor-pointer" />
        </div>
      </ul>
    </div>
  );
}

export default InfoPenting;
