import React, { useState } from "react";
import Select from "react-select";
import Modal from "./Modal";

function Result() {
  const [isShowed, setIsShowed] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
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

  const handleTambah = () => {
    setIsEdit(false);
    setIsShowed(true);
  };

  const handleEdit = () => {
    setIsEdit(true);

    setIsShowed(true);
  };

  const closeModal = () => {
    setIsShowed(false);
  };

  return (
    <div>
      <Modal isShowed={isShowed} closeModal={closeModal} isEdit={isEdit} />
      <h2 className="font-bold text-xl text-teal-400">Result</h2>
      <div className="mt-3">
        <button
          onClick={handleTambah}
          className="text-sm px-5 py-2 bg-teal-500 text-white rounded-md mr-4"
        >
          Tambah Lokasi
        </button>
        <button
          onClick={handleEdit}
          className="text-sm px-5 py-2 bg-orange-400 text-white rounded-md mr-4"
        >
          Edit Lokasi
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:flex mt-5">
        <Select
          className="md:w-1/5 mr-3 text-slate-600"
          options={optionsKab}
          placeholder="Kabupaten"
        />
        <Select
          className="md:w-1/5 mr-3 text-slate-600"
          options={optionsKec}
          placeholder="Kecamatan"
        />
        <Select
          className="md:w-1/5 mr-3 text-slate-600"
          options={optionsKel}
          placeholder="Kelurahan"
        />
        <Select
          className="md:w-1/5 mr-3 text-slate-600"
          options={optionsTps}
          placeholder="TPS"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 md:flex mt-8 bg-white p-8 rounded-lg shadow-lg shadow-gray-100">
        <h2 className="mr-3 bg-teal-50 border-2 border-teal-300 text-slate-600 px-5 py-2 rounded-full text-sm">
          <span className="font-bold">637</span> pemilih terdaftar
        </h2>
        <h2 className="mr-3 bg-teal-50 border-2 border-teal-300 text-slate-600 px-5 py-2 rounded-full text-sm">
          <span className="font-bold">67</span> golput
        </h2>
        <h2 className="mr-3 bg-teal-50 border-2 border-teal-300 text-slate-600 px-5 py-2 rounded-full text-sm">
          <span className="font-bold">40</span> tidak sah
        </h2>
      </div>
      <button
        onClick={handleTambah}
        className="text-sm px-5 py-2 bg-teal-500 text-white rounded-md mr-4 mt-5"
      >
        Tambah Suara
      </button>
      <div className="mt-8 bg-white rounded-lg shadow-gray-100 shadow lg px-8 pb-8 ">
        <div className="flex justify-between items-center pt-8 border-teal-100 border-b pb-8">
          <div className="hidden md:block">
            <p className="font-bold text-2xl text-slate-600 w-24 h-24 bg-orange-100 rounded-xl justify-center flex items-center">
              1
            </p>
          </div>
          <p className="text-sm text-gray-500">Pasangan calon Nomor 1</p>
          <p className="text-sm md:text-md font-bold text-slate-600 w-24 h-24 bg-teal-100 rounded-full md:rounded-xl justify-center flex items-center">
            350
          </p>
        </div>
        <div className="flex justify-between items-center pt-8 border-teal-100 border-b pb-8">
          <div className="hidden md:block">
            <p className="font-bold text-2xl text-slate-600 w-24 h-24 bg-orange-100 rounded-xl justify-center flex items-center">
              2
            </p>
          </div>
          <p className="text-sm text-gray-500">Pasangan calon Nomor 2</p>
          <p className="text-sm md:text-md font-bold text-slate-600 w-24 h-24 bg-teal-100 rounded-full md:rounded-xl justify-center flex items-center">
            799350
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
