import { useContext, useState } from 'react';
import CurrencyTable from './CurrencyTable/CurrencyTable';
import UseCurrency from '../../../../Hook/UseCurrency';
import { useQuery } from '@tanstack/react-query';
import UseAxious from '../../../../Hook/UseAxious';
import UseUpsell from '../../../../Hook/UseUpsell';
import { AuthContext } from '../../../../Provider/AuthProvider';

const CurrencyPage = () => {
    const [percentageIncrease, setPercentageIncrease] = useState(0);
    const {UpdateCurrencyData,SetUpdateCurrencyData} = useContext(AuthContext)
    const [currency, refetchCUrrency] = UseCurrency();
    //   const Axious = UseAxious()
    //   const handlePercentageChange = (event) => {
    //       setPercentageIncrease(parseFloat(event.target.value));
    //     };

    //     const [upsellValue,refetchUpsell] = UseUpsell()

    // console.log(upsellValue)

    // const handleApply =()=>{
    //    const newPercentage =  1 + percentageIncrease / 100

    //       Axious.get(`/upsellUpdate/${newPercentage}`)
    //       .then(res => {
    //           console.log(res.data)
    //           refetchUpsell()
    //       })
    // }

    const handleUpdateLatest = ()=>{
        // SetUpdateCurrencyData(true)
        // setTimeout(() => {
        //     refetchCUrrency()
        //     SetUpdateCurrencyData(false)
        // }, 1000);
        SetUpdateCurrencyData(true)
    }
    const stopUpdateLates = ()=>{
        SetUpdateCurrencyData(false)
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex w-full flex-col">
            <header className="bg-gray-800 py-4">
                <h1 className="text-3xl text-center font-bold">Currency Dashboard</h1>
            </header>
            <main className="flex-1 p-6">
                <div className="max-w-6xl mx-auto">
                    <div className='flex justify-between lg:flex-row flex-col items-center'>
                    <h2 className="text-2xl font-medium mb-6">Manipulate Currency</h2>
                    {
                        UpdateCurrencyData ? 
                        <button onClick={stopUpdateLates} className='px-4 py-2 bg-green-800 text-white rounded-md hover:duration-300 transition hover:scale-105'>Stop the Latest</button> :
                        <button onClick={handleUpdateLatest} className='px-4 py-2 bg-green-800 text-white rounded-md hover:duration-300 transition hover:scale-105'>Get the Latest</button> 
                       
                    }
                    
                    </div>


                    {/* Search Bar */}

                    {/* <div className="flex  gap-3 justify-start mb-4">
            <input
              type="number"
              id="percentageInput"
              placeholder="Sell price hike %"
              value={percentageIncrease}
              onChange={handlePercentageChange}
              className="px-2 py-1 max-w-[300px] w-[70%] rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
            />
            <button onClick={handleApply} className="bg-white text-slate-900 text-sm px-3 py-2 rounded-lg hover:bg-gray-300">Apply</button>
          </div> */}
                    <CurrencyTable currency={currency}></CurrencyTable>
                </div>
            </main>
            <footer className="bg-gray-800 py-4 text-center">
                <p>© 2024 Currency Dashboard. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CurrencyPage;
