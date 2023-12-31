import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ChartItem = () => {
    return (
        <div className={` bg-gray-100 justify-between items-center px-3 flex  py-5`}>
        <div className="flex gap-5 items-center">
          <h2 className="px-3 bg-gray-200 inline py-3 rounded-lg">USD</h2>

          <h2 className="text-xl">Euro-EUR</h2>
        </div>

        <div className="flex  gap-20">
          <div className="flex items-center gap-4">
            <h2 className="text-xl">1.123</h2>
            <button className="bg-[#93C94E] hover:bg-[#6c923a] hover:text-white text-xl px-3 py-2 rounded-lg flex items-center gap-2">
              CLICK & COLLECT <IoIosArrowForward></IoIosArrowForward>{" "}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-xl">1.123</h2>
            <button className="bg-[#93C94E] hover:bg-[#6c923a] hover:text-white text-xl px-3 py-2 rounded-lg flex items-center gap-2">
              CLICK & SELL <IoIosArrowForward></IoIosArrowForward>{" "}
            </button>
          </div>
        </div>
      </div>
    );
};

export default ChartItem;