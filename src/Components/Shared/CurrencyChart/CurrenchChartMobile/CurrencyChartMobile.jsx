import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CurrencyMobile from "./CurrencyMobile/CurrencyMobile";

const CurrencyChartMobile = ({ data }) => {
    const item = [
        {
            id: 0,
            name: "Click & Collect"
        },
        {
            id: 1,
            name: "Click & Sell"
        }
    ];

    return (
        <div className="flex flex-col">
            <Tabs>
                <TabList className="flex mt-10">
                    {item.map((item, ind) => (
                        <Tab
                            onClick={() => {
                                setActiveTab(ind);
                            }}
                            className={`bg-gray-300 w-[50%] text-center text-[#1E4A9A] border-none outline-none   sm:px-9 sm:py-4 px-5 py-3 `}
                            key={item.id}
                        >
                            {item.name}
                        </Tab>
                    ))}
                </TabList>

                <TabPanel>
                    <CurrencyMobile data={data} num={0}></CurrencyMobile>
                </TabPanel>
                <TabPanel>
                    <CurrencyMobile data={data} num={1}></CurrencyMobile>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CurrencyChartMobile;
