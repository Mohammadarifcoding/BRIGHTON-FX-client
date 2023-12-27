import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CalculatorTab from './CalculatorTab/CalculatorTab';


const Calculator = () => {
    const [activeTab,setActiveTab] =  useState(0)
   const data = [
    {
        id:0,
        name:'Click & Collect'
    },
    {
        id:1,
        name:'Click & Sell'
    }
   ]


    return (
        <div className="flex flex-col">
             <Tabs>
    <TabList className='flex rounded-t-lg'>
        {
            data.map((item,ind) => <Tab style={{
                borderRadius: activeTab == ind ? '8px 0 0 0 ':'0 8px 0 0',
            }} className={`bg-white text-[#1E4A9A] border-none outline-none  rounded-tl-lg  px-9 py-4 `} key={item.id}>{item.name}</Tab>)
        }
      

    </TabList>

    <TabPanel>
      <CalculatorTab></CalculatorTab>
    </TabPanel>
    <TabPanel>
    <CalculatorTab></CalculatorTab>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Calculator;