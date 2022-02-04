import React from "react";
import Select from "react-select";

function Result() {
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
    <div>
      <h2 className="font-bold text-xl text-teal-400">Result</h2>
      <div className="flex mt-8">
        <Select className="w-1/5 mr-3 text-slate-600" options={optionsKab} />
        <Select className="w-1/5 mr-3" options={optionsKec} />
        <Select className="w-1/5 mr-3" options={optionsKel} />
        <Select className="w-1/5 mr-3" options={optionsTps} />
      </div>
      <div className="flex mt-8 bg-white p-8 rounded-lg shadow-lg shadow-gray-100">
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
    </div>
  );
}

export default Result;
