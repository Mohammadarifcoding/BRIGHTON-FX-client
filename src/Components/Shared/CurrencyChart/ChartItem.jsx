import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import UseAxious from '../../../Hook/UseAxious';

const ChartItem = ({ item }) => {
    const nav = useNavigate();


    return (
        <div className={` bg-gray-100 justify-between items-center px-3 flex  py-5`}>
            <div className="flex gap-5 items-center">
                <h2 className="px-3 bg-gray-200 inline py-3 rounded-lg">{item?.value}</h2>

                <h2 className="text-xl xl:block hidden">
                    {item?.label}-{item?.value}
                </h2>
                <h2 className="text-xl xl:hidden ">
                    {item?.label.slice(0, 10)}...-{item?.value}
                </h2>
            </div>

            <div className="flex  lg:gap-10 gap-6 xl:gap-20">
                <div className="flex  gap-4 lg:flex-row flex-col lg:items-center">
                    <h2 className="text-xl w-fit">{(item?.Rate * (1 + (item?.Buy / 100))).toFixed(3)}</h2>
                    <button
                        onClick={() => {
                            nav(`/purchase/${item?.value}/Order`);
                        }}
                        className="bg-[#93C94E] hover:bg-[#6c923a] hover:text-white text-xl px-3 py-2 rounded-lg flex items-center gap-2"
                    >
                        CLICK & COLLECT <IoIosArrowForward></IoIosArrowForward>{' '}
                    </button>
                </div>
                <div className="flex  gap-4 lg:flex-row flex-col lg:items-center ">
                    <h2 className="text-xl w-[100px] lg:text-end">{(item?.Rate * (1 + (item?.Sell / 100))).toFixed(3)}</h2>
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                nav(`/purchase/${item?.value}/Sell`);
                            }}
                            className="bg-[#93C94E] hover:bg-[#6c923a] hover:text-white text-xl px-3 py-2 rounded-lg flex items-center gap-2"
                        >
                            CLICK & SELL <IoIosArrowForward></IoIosArrowForward>{' '}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartItem;
