import React from 'react';

const Accordin = () => {
    return (
        <div>
        {/* main */}
        <div className=" flex-row md:flex items-center justify-around  px-4 md:p-24">
            {/* image - Left Section */}
            <div className="flex-1 mt-8 md:p-28">
            <img className="flex w-full md:w-[35vw] items-center" src="/Images/faq.png" alt="" />
            </div>
            {/* Faq */}
            <div className="flex-1 mt-24">
            <div className="collapse collapse-plus mb-8 border-2">
<input type="radio" name="my-accordion-3" checked="checked" /> 
<div className="collapse-title text-xl font-medium">
How do I send money if I have cash?
</div>
<div className="collapse-content"> 
<p>
Brighton FX Services LTD is an online portal so that you can send money online - Cash is not being facilitated at all.</p>
</div>
</div>
<div className="collapse collapse-plus mb-8 border-2">
<input type="radio" name="my-accordion-3" /> 
<div className="collapse-title text-xl font-medium">
How do i send money online with Brighton FX?
                          
</div>
<div className="collapse-content"> 
<p>
Brighton FX Services LTD has made Sending Money easier for your complete peace of mind. Just follow the simple steps as below:
Create an account using our app or web portal.
Complete your profile with basic details and identification documents.
Choose the destination country, desired payout option, and enter the receiver’s details.
Pay for the transaction using your Debit/Credit Card or your Bank Account</p>
</div>
</div>
<div className="collapse collapse-plus mb-8 border-2">
<input type="radio" name="my-accordion-3" /> 
<div className="collapse-title text-xl font-medium">
What are Sending Methods? 
</div>
<div className="collapse-content"> 
<p>You can pay for your online transactions using:
Debit/Credit Card.
Online Bank Transfer.</p>
</div>
</div> 

<div className="collapse collapse-plus mb-8 border-2">
<input type="radio" name="my-accordion-4" /> 
<div className="collapse-title text-xl font-medium">
What are Sending Methods? 
</div>
<div className="collapse-content"> 
<p>You can pay for your online transactions using:
Debit/Credit Card.
Online Bank Transfer.</p>
</div>
</div> 


<div className="collapse collapse-plus mb-8 border-2">
<input type="radio" name="my-accordion-5" /> 
<div className="collapse-title text-xl font-medium">
What are Sending Methods? 
</div>
<div className="collapse-content"> 
<p>You can pay for your online transactions using:
Debit/Credit Card.
Online Bank Transfer.</p>
</div>
</div> 


            </div>
        </div>
    </div>
    );
};

export default Accordin;