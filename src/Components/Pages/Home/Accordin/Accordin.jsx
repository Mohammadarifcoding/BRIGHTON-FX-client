import React, { useState } from "react";
import Container from "../../../Shared/Container/Container";

const Accordin = () => {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    { title: 'How do I place an order for currency exchange?', description: `To place an order for currency exchange with Brighton FX, follow these steps:
    Visit our website or branch.
    Choose the currency and amount you want to exchange. 
    Fill in the form with the needed information. 
    Choose your preferred location for collection.
    Order online, and then pick up and pay in-store.
    `},
    { title: 'What currencies can I exchange at Brighton FX?', description: 'We offer a wide range of 70+ foreign currencies for exchange, including popular options like USD, EUR, JPY, and AUD. For the complete list check our website or contact us directly.'},
    { title: 'Are there any hidden charges or commissions?', description: 'We do not charge commission or have any hidden charges. You pay what you see!'},
    { title: 'How long does it take to process a currency exchange order?', description: ' Most currency exchanges are processed within a few minutes to a few hours as we carry over 70+ currencies in stock. However, factors like transaction volume and availability may affect the processing time.'},
    { title: 'Can I reserve currency in advance?', description: 'You can conveniently pre-order currency by using our website or by contacting our customer service. We will make sure that the requested amount is available for pick up at their preferred time and location. '},
    { title: 'What identification or documents do I need for currency exchange?', description: 'In order to complete a currency exchange or money transfer, you’ll need a valid government-issued ID (passport, driver’s license, BRP) and, in some cases, additional documentation for larger transactions.  '},
    { title: 'Do you offer international money transfers?', description: 'We offer fast, secure, and efficient international money transfer services via Western Union and WorFX. Transfer funds to family, friends worldwide! '},
    { title: 'How can I contact customer support if I have questions?', description: 'You can reach our customer support team via phone at 01273 030708, or email us at support@brightonfx.com, or visit us during business hours. We’re here to assist you with any queries!'}];

  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <Container>
    <div>
      {/* main */}
      <div className="  flex lg:flex-row gap-20 flex-col mt-10 md:mb-36 mb-20 items-center justify-around  px-4 ">
        {/* image - Left Section */}
        <div className="flex-1  ">
          <img
            className="flex w-full md:w-[35vw] items-center"
            src="/Images/faq.png"
            alt=""
          />
        </div>
        {/* Faq */}
        <div className="flex-1 ">
        <div className="rounded-lg font-sans">
      {accordionsData.map((PerAccordion, idx) => (
        <div key={idx} className="border-b border-gray-500 last-of-type:border-none">
          <button onClick={() => toggle(idx)} className="flex h-full w-full justify-between py-4 text-left font-medium text-black ">
            <span className="sm:text-lg md:text-xl text-sm">{PerAccordion.title}</span>
            <span className="rounded-full p-2 ">
              <svg className="ml-8 mr-7 shrink-0 fill-black " width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
              </svg>
            </span>
          </button>
          <div className={`grid overflow-hidden lg:text-base md:text-sm text-[12px] text-gray-800 transition-all duration-300 ease-in-out  ${isOpen === idx ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden pr-4">{PerAccordion.description}</div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>    
    </Container>
    
  );
};

export default Accordin;
