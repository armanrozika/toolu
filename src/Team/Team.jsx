import React from "react";

function Team() {
  return (
    <div className="h-full">
      <h2 className="font-bold text-xl text-teal-400">Team</h2>
      <form>
        <input
          className="mt-6 px-5 py-2 rounded-full w-96 border-teal-400 bg-white border"
          type="text"
          placeholder="Cari"
        />
      </form>
      <div className="bg-white rounded-lg shadow-lg shadow-gray-100 px-8 pb-8 pt-4 mt-5 overflow-y-scroll h-5/6">
        <div className="grid grid-cols-4 gap-8 border-gray-100 border-b pb-4 pt-4 items-center">
          <p className="text-sm font-bold text-slate-500">
            Akhmad Bukharil Mukasifin
          </p>
          <p className="text-sm text-slate-600">Kecamatan Praya</p>
          <p className="text-sm text-slate-600">Kelurahan Panjisari</p>
          <p className="text-sm text-slate-600">TPS 10</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
