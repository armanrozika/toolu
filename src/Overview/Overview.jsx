import React from "react";

import paslon from "../assets/paslon.png";
import files from "../assets/files.png";

function Overview() {
  return (
    <div>
      <h2 className="font-bold text-xl text-teal-400">Overview</h2>
      <div className="grid grid-cols-4 gap-4 mt-3 md:mt-8 bg-white p-2 rounded-lg shadow-lg shadow-gray-100">
        <div className="flex flex-col p-2 items-center border-r border-slate-100">
          <p className="text-sm mb-1 text-slate-500 font-bold">TPS 3</p>
          <p className="flex items-center justify-center md:bg-orange-50 md:w-16 md:h-16 md:rounded-full text-teal-400 font-bold md:border-2 md:border-orange-100 text-sm">
            250
          </p>
          <p className="mt-2 text-xs text-gray-400 text-center">Truno Joyo</p>
        </div>
        <div className="flex flex-col p-2 items-center border-r border-slate-100">
          <p className="text-sm mb-1 text-slate-500 font-bold">TPS 3</p>
          <p className="flex items-center justify-center md:bg-orange-50 md:w-16 md:h-16 md:rounded-full text-teal-400 font-bold md:border-2 md:border-orange-100 text-sm">
            250
          </p>
          <p className="mt-2 text-xs text-gray-400 text-center">Truno Joyo</p>
        </div>
        <div className="flex flex-col p-2 items-center border-r border-slate-100">
          <p className="text-sm mb-1 text-slate-500 font-bold">TPS 3</p>
          <p className="flex items-center justify-center md:bg-orange-50 md:w-16 md:h-16 md:rounded-full text-teal-400 font-bold md:border-2 md:border-orange-100 text-sm">
            250
          </p>
          <p className="mt-2 text-xs text-gray-400 text-center">Truno Joyo</p>
        </div>
        <div className="flex flex-col p-2 items-center ">
          <p className="text-sm mb-1 text-slate-500 font-bold">TPS 3</p>
          <p className="flex items-center justify-center md:bg-orange-50 md:w-16 md:h-16 md:rounded-full text-teal-400 font-bold md:border-2 md:border-orange-100 text-sm">
            250
          </p>
          <p className="mt-2 text-xs text-gray-400 text-center">Truno Joyo</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500 italic text-right">
        Perolehan terbanyak suara Anda pada level TPS
      </p>
      {/* Below overview_________________________________________________ */}
      <h2 className=" mt-5 md:mt-10 font-bold text-slate-500 mb-3">Top Rank</h2>
      <div className="md:flex">
        <div className="bg-white rounded-lg w-full md:w-48 p-3 text-center shadow-lg shadow-gray-100 md:block flex items-center justify-between">
          <div className="pb-2 mt-5">
            <img src={paslon} alt="" className="w-2/5 my-0 mx-auto" />
            <p className="mt-2 text-sm text-gray-500">Paslon No. 3</p>
            <p className="md:bg-orange-50 rounded-full text-sm py-1 text-slate-500 font-bold">
              12.750
            </p>
          </div>
          <div className=" mt-5 pb-2">
            <img src={paslon} alt="" className="w-2/5 my-0 mx-auto" />
            <p className="mt-2 text-sm text-gray-500">Paslon No. 1</p>
            <p className="md:bg-orange-50 rounded-full text-sm py-1  text-slate-500 font-bold">
              11.099
            </p>
          </div>

          <div className="mt-5 pb-2">
            <img src={paslon} alt="" className="w-2/5 my-0 mx-auto" />
            <p className="mt-2 text-sm text-gray-500">Paslon No. 4</p>
            <p className="md:bg-orange-50 rounded-full text-sm py-1 text-slate-500 font-bold">
              550
            </p>
          </div>
        </div>

        <div className="bg-white w-full md:ml-8 rounded-lg shadow-lg shadow-gray-100 px-5 md:px-20 py-10 mt-5 md:mt-0">
          <div className="flex items-center border-b border-teal-100">
            <img className="w-24 mr-5" src={files} alt="data-koleksi" />
            <h1 className="text-slate-500 text-sm">
              Pasangan calon Anda memperoleh suara tertinggi pada Kabupaten
              Bontang Timur
            </h1>
          </div>
          <div className="flex items-center border-b border-teal-100">
            <img className="w-24 mr-5" src={files} alt="data-koleksi" />
            <h1 className="text-slate-500 text-sm">
              Pasangan calon Anda memperoleh suara terendah pada Kabupaten
              Mamuju
            </h1>
          </div>
          <div className="flex items-center border-b border-teal-100">
            <img className="w-24 mr-5" src={files} alt="data-koleksi" />
            <h1 className="text-slate-500 text-sm">
              Dari keseluruhan pemilih terdaftar, 700 di antaranya golput/tidak
              memilih
            </h1>
          </div>
          <div className="flex items-center">
            <img className="w-24 mr-5" src={files} alt="data-koleksi" />
            <h1 className="text-slate-500 text-sm">
              Dari keseluruhan surat suara, terdapat sebanyak 35 suara tidak sah
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
