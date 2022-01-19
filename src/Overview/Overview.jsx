import React from "react";

function Overview() {
  return (
    <div>
      <h2 className="font-bold text-xl text-teal-400">Overview</h2>
      <div className="grid grid-cols-4 gap-4 mt-8 bg-white p-5 rounded-lg shadow-lg shadow-gray-100">
        <div className="flex flex-col p-2 items-center border-r-2 border-slate-50">
          <p className="text-sm mb-3 text-slate-500 font-bold">TPS 3</p>
          <p className="flex items-center justify-center bg-orange-50 w-20 h-20 rounded-full text-slate-600 border-2 border-teal-100">
            250
          </p>
          <p className="mt-2 text-sm text-gray-600">Truno Joyo</p>
        </div>
        <div className="flex flex-col p-2 items-center border-r-2 border-slate-50">
          <p className="text-sm mb-3 text-slate-500 font-bold">TPS 4</p>
          <p className="flex items-center justify-center bg-orange-50 w-20 h-20 rounded-full text-slate-600 border-2 border-teal-100">
            12
          </p>
          <p className="mt-2 text-sm text-gray-600">Panjisari</p>
        </div>
        <div className="flex flex-col p-2 items-center border-r-2 border-slate-50">
          <p className="text-sm mb-3 text-slate-500 font-bold">TPS 6</p>
          <p className="flex items-center justify-center bg-orange-50 w-20 h-20 rounded-full text-slate-600 border-2 border-teal-100">
            78
          </p>
          <p className="mt-2 text-sm text-gray-600">Malabar Barat</p>
        </div>
        <div className="flex flex-col p-2 items-center ">
          <p className="text-sm mb-3 text-slate-500 font-bold">TPS 9</p>
          <p className="flex items-center justify-center bg-orange-50 w-20 h-20 rounded-full text-slate-600 border-2 border-teal-100">
            700
          </p>
          <p className="mt-2 text-sm text-gray-600">Bulaksumur Timur</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
