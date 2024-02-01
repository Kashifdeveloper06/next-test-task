import React from "react";

function Card() {
  return (
    <>
      <div className="h-[220px] w-[250px] py-3 rounded-lg border transition-transform transform hover:scale-105 shadow-lg">
        <div className="px-8">
          <img
            
            src="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
            alt=""
          />
        </div>
        <h1 className="px-6 py-2 font-bold">Edit pdf</h1>
        <p className="px-6 py-2 text-gray-400">
          use the best pdf tool to <br />
          edit pdf in your browser
        </p>
      </div>
    </>
  );
}

export default Card;
