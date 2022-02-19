import React from "react";
import Select from "react-select";

function Team() {
  const optionsTeam = [
    { value: "id1", label: "TIM SUKSES MAJU" },
    { value: "id2", label: "CAGUB NTB 3" },
  ];
  return (
    <div className="h-full">
      <h2 className="font-bold text-xl text-teal-400 mb-4">Team</h2>
      {/* <Select
        className="block md:hidden text-slate-600 mb-3"
        options={optionsTeam}
      /> */}

      <button className="text-sm border-none bg-teal-500 text-white px-5 py-2 rounded-lg mr-4">
        Buat team baru
      </button>
      <button className="text-sm border-none bg-rose-500 text-white px-5 py-2 rounded-lg ">
        Hapus team ini
      </button>

      <form>
        <input
          className="mt-6 px-5 py-2 rounded-full w-56 md:w-96 border-teal-400 bg-white border"
          type="text"
          placeholder="Cari"
        />
      </form>
      <div className="bg-white rounded-lg shadow-lg shadow-gray-100 px-8 pb-8 pt-4 mt-5 overflow-y-scroll h-4/5">
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
