import React from "react";

function Overview() {
  return (
    <div>
      <h2 className="font-bold text-xl text-teal-400">Overview</h2>
      <div className="grid grid-cols-4 gap-4 mt-8 bg-white p-5 rounded-lg shadow-lg shadow-gray-100">
        <div className="flex flex-col p-2 items-center border-r-2 border-slate-50">
          <p className="text-sm mb-3 text-slate-500 font-bold">TPS 3</p>
          <p className="flex items-center justify-center bg-orange-50 w-20 h-20 rounded-full text-teal-400 font-bold border-2 border-orange-100">
            250
          </p>
          <p className="mt-2 text-sm text-gray-400">Truno Joyo</p>
        </div>
        <div className="flex flex-col p-2 items-center border-r-2 border-slate-50">
          <p className="text-sm mb-3 text-slate-500 font-bold">TPS 4</p>
          <p className="flex items-center justify-center bg-orange-50 w-20 h-20 rounded-full text-teal-400 font-bold border-2 border-orange-100">
            12
          </p>
          <p className="mt-2 text-sm text-gray-400">Panjisari</p>
        </div>
        <div className="flex flex-col p-2 items-center border-r-2 border-slate-50">
          <p className="text-sm mb-3 text-slate-500 font-bold">TPS 6</p>
          <p className="flex items-center justify-center bg-orange-50 w-20 h-20 rounded-full text-teal-400 font-bold border-2 border-orange-100">
            78
          </p>
          <p className="mt-2 text-sm text-gray-400">Malabar Barat</p>
        </div>
        <div className="flex flex-col p-2 items-center ">
          <p className="text-sm mb-3 text-slate-500 font-bold">TPS 9</p>
          <p className="flex items-center justify-center bg-orange-50 w-20 h-20 rounded-full text-teal-400 font-bold border-2 border-orange-100">
            700
          </p>
          <p className="mt-2 text-sm text-gray-400">Bulaksumur Timur</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500 italic">
        Perolehan terbanyak suara Anda pada level TPS
      </p>
      {/* Below overview_________________________________________________ */}
      <h2 className="mt-10 font-bold text-slate-500 mb-3">Top Rank</h2>
      <div className="flex ">
        <div className="bg-white rounded-lg w-48 p-3 text-center shadow-lg shadow-gray-100">
          <div className="border-b-2 border-slate-50">
            <img
              src="https://avatarfiles.alphacoders.com/249/249786.jpg"
              alt=""
              className="w-4/5 my-0 mx-auto rounded-full"
            />
            <p className="bg-orange-50 rounded-full text-sm py-1 mt-3 text-slate-600 font-bold">
              12.750
            </p>
            <p className="mt-2 text-sm text-gray-500">Pasangan No. 3</p>
          </div>
          <div className="border-b-2 border-slate-50 mt-9">
            <img
              src="https://avatarfiles.alphacoders.com/280/280205.jpg"
              alt=""
              className="w-4/5 my-0 mx-auto rounded-full"
            />
            <p className="bg-orange-50 rounded-full text-sm py-1 mt-3 text-slate-600 font-bold">
              11.099
            </p>
            <p className="mt-2 text-sm text-gray-500">Pasangan No. 1</p>
          </div>

          <div className="border-b-2 border-slate-50 mt-9">
            <img
              src="https://avatarfiles.alphacoders.com/532/53282.jpg"
              alt=""
              className="w-4/5 my-0 mx-auto rounded-full"
            />
            <p className="bg-orange-50 rounded-full text-sm py-1 mt-3 text-slate-600 font-bold">
              550
            </p>
            <p className="mt-2 text-sm text-gray-500">Pasangan No. 4</p>
          </div>
        </div>

        <div className="bg-white w-full ml-8 rounded-lg shadow-lg shadow-gray-100 p-3">
          <p>Mantap</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
