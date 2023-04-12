import React, { useEffect } from "react";

const Display = ({ images }) => {
  const tagss = images.tags.split(",");
  return (
    <div className="max-w-sm shadow-lg hover:shadow-xl rounded-lg scale-100 hover:scale-105 duration-200 ease-in py-2">
      <div className="  ">
        <div className="">
          <div>
            <img src={images.webformatURL} alt="" className="w-full" />
            <div className="text-lg font-bold">Photo by {images.user}</div>
            <div className="text-base font-medium">
              views: <span className="font-normal ">{images.views}</span>
            </div>
            <div className="text-base font-medium">
              likes: <span className="font-normal ">{images.likes}</span>
            </div>
            <div className="text-base font-medium">
              downloads:{" "}
              <span className="font-normal ">{images.downloads}</span>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full w-full">
            <div></div>
            <div>
              {tagss.map((tagg, index) => {
                return (
                  <div
                    key={index}
                    className="px-2 py-[1px]  rounded-full bg-slate-300 inline-block mr-3 items-center"
                  >
                    {tagg}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
