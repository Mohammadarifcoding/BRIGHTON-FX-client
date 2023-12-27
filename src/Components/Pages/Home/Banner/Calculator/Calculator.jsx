import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


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
    <TabList className='flex '>
        {
            data.map(item => <Tab  className={`text-[#1E4A9A] ${item.id == 0 ? 'rounded-tl-lg':'rounded-tr-lg'} bg-white px-9 py-5 `} key={item.id}>{item.name}</Tab>)
        }
      

    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Calculator;