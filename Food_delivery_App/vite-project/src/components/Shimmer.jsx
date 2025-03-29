import React from "react";

const Shimmer = () => {
  return (
    <div className="w-[90%] mx-auto flex justify-center gap-8 flex-wrap py-10">
      {["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"].map((i,idx) => (
        <div key={i+idx} className="w-[300px] h-[360px] rounded">
          <img className="w-full h-2/3 rounded-xl bg-gray-200" alt="" />
          <div className="mt-4 flex gap-4 flex-col">
            <p className="py-3 bg-gray-200 rounded-xl"></p>
            <p className="py-3 bg-gray-200 rounded-xl"></p>
            <p className="py-3 bg-gray-200 rounded-xl"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
