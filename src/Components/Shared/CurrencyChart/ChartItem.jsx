import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import UseAxious from '../../../Hook/UseAxious';

const ChartItem = ({ item }) => {
    const nav = useNavigate();
   
    const totalString = `${item?.label} - ${item?.value}`

    return (
        <div className={` bg-gray-100 justify-between items-center px-3 flex  py-5`}>
            <div className="flex gap-5 items-center">
                <h2 className="px-3 bg-gray-200 inline py-3 rounded-lg">{item?.value}</h2>

                <h2 className="xl:text-xl lg:text-lg  lg:block hidden">
                    {item?.label}-{item?.value}
                </h2>
                <h2 className="xl:text-xl lg:text-lg  lg:hidden ">
                    {
                        totalString.length > 30 ?
                        <>
                        {totalString.slice(0,30)}...
                        </>:<>
                        {totalString}
                        </>
                    }
                    
                </h2>
            </div>

            <div className="flex  lg:gap-10 gap-6 xl:gap-20">
                <div className="flex  gap-4 xl:flex-row flex-col xl:items-center">
                    <h2 className="xl:text-xl lg:text-lg w-fit">{(item?.Rate * (1 + (item?.Sell / 100))).toFixed(2)}</h2>
                    <button
                        onClick={() => {
                            nav(`/purchase/${item?.value}/Order`);
                        }}
                        className="bg-[#93C94E] hover:bg-[#6c923a] hover:text-white xl:text-xl lg:text-lg px-3 py-2 rounded-lg flex items-center gap-2"
                    >
                        CLICK & COLLECT <IoIosArrowForward></IoIosArrowForward>{' '}
                    </button>
                </div>
                <div className="flex  gap-4 xl:flex-row flex-col xl:items-center ">
                    <h2 className="xl:text-xl lg:text-lg w-[100px] xl:text-end">{(item?.Rate * (1 + (item?.Buy / 100))).toFixed(2)}</h2>
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                nav(`/purchase/${item?.value}/Sell`);
                            }}
                            className="bg-[#93C94E] hover:bg-[#6c923a] hover:text-white xl:text-xl lg:text-lg px-3 py-2 rounded-lg flex items-center gap-2"
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
