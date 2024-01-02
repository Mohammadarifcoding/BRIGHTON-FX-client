import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Process = ({no}) => {
    const item = [
        {
          value: 1,
          text: "Create Order",
        },
        {
          value: 2,
          text: "YOUR DETAILS",
        },
        {
          value: 3,
          text: "ORDER CONFIRMATION",
        },
      ];
    return (
        <div className="flex items-center mt-20 justify-between">
        {item.map((value) => (
            <div key={value.value} className=" flex items-center gap-3">
              <div className="flex  items-center gap-3 md:flex-row flex-col">
                <div
                  className={` ${
                    value.value == no
                      ? "bg-[#4A53A4] text-white"
                      : "bg-white border-2 border-gray-400 text-gray-400"
                  }    rounded-full lg:py-6 lg:px-10 md:py-8 md:px-12 sm:px-12 sm:py-9 px-6 py-4  md:text-4xl sm:text-3xl text-2xl`}
                >
                  {value.value}
                </div>
                <h2 className="lg:text-2xl md:text-xl sm:text-lg  text-[13px] whitespace-normal ">
                  {value.text}
                </h2>
              </div>

              <div
                className={` ${
                  value.value == 3 && "hidden"
                } lg:text-3xl md:text-3xl sm:text-3xl text-lg`}
              >
                <IoIosArrowForward></IoIosArrowForward>
              </div>
            </div>
          ))}   
        </div>
       
    );
};

export default Process;