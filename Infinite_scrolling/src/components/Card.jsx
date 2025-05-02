import React from "react";

const Card = ({val,key}) => {

    const {url,title,preview} = val;

  return (
    <div key={key} className="card w-[300px] h-[300px] bg-white rounded-xl overflow-hidden">
      <div className="w-full h-[80%] text-center">
        <img
          className="w-full h-full object-contain"
          src={preview[0]}
          alt=""
        />
      </div>
      <div className="text-center">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
