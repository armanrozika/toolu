import React from "react";
import Select from "react-select";

function Modal({ isShowed }) {
  const optionsKab = [
    { value: "lombokTengah", label: "Lombok Tengah" },
    { value: "lombokBarat", label: "Lombok Barat" },
  ];
  const optionsKec = [
    { value: "praya", label: "Praya" },
    { value: "batujai", label: "Batujai" },
  ];
  const optionsKel = [
    { value: "prapen", label: "Prapen" },
    { value: "panjisari", label: "Panjisari" },
  ];
  const optionsTps = [
    { value: "tps1", label: "TPS 1" },
    { value: "tps2", label: "TPS 2" },
  ];
  return (
    <div
      className={`${
        isShowed ? "block" : "hidden"
      } fixed top-0 left-0 bg-slate-800/50 w-screen h-screen z-10`}
    >
      <div className="w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl">
        <Select
          className="mb-3 text-slate-600"
          options={optionsKab}
          placeholder="Kabupaten"
        />
        <Select
          className=" mb-3 text-slate-600"
          options={optionsKec}
          placeholder="Kecamatan"
        />
        <Select
          className="mb-3 text-slate-600"
          options={optionsKel}
          placeholder="Kelurahan"
        />
        <Select
          className="mb-3 text-slate-600"
          options={optionsTps}
          placeholder="TPS"
        />
        <input
          className="p-2 w-64 rounded-md border border-slate-300 mb-3"
          type="text"
          placeholder="Jumlah suara"
        />
        <button className="text-sm block rounded-md bg-teal-500 text-white  py-2 px-5">
          Tambah
        </button>
      </div>
    </div>
  );
}

export default Modal;
