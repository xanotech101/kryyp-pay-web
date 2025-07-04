"use client"
import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Services = () => {
     useEffect(() => {
          AOS.init();
        }, []);
  const faqq = [
    { question: "What is KRYPPAY?", answer: "KRYPPAY is a secure and user-friendly cryptocurrency platform for buying, selling, and managing digital assets." },
    { question: "Is KRYPPAY available worldwide?", answer: "Yes, KRYPPAY is accessible globally, though features may vary by country." },
    { question: "Which cryptocurrencies are supported on KRYPPAY?", answer: "We support Bitcoin, Ethereum, and many other major cryptocurrencies." },
    { question: "Is my personal information secure with KRYPPAY?", answer: "Absolutely. We use top-tier encryption and secure storage protocols." },
    { question: "Are there any deposit or withdrawal fees?", answer: "Some transactions may incur minor network or service fees." },
    { question: "Does KRYPPAY offer advanced trading tools?", answer: "Yes, including charting, limit orders, and performance tracking tools." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col gap-5 justify-center items-center bg-white dark:bg-black px-4 md:px-15 pt-32 max-w-[1440px] mx-auto pb-10'>
      <p className="bg-[#3805F250] px-4 py-1 font-worksans text-universal text-[14px] rounded-[80px] font-medium">
        FAQs
      </p>

      <p className="text-textlight dark:text-textdark text-center font-dmsans font-normal text-[18px]">
        Frequently Asked <span className='text-universal'>Questions</span>
      </p>

      <h2 className="text-[40px] text-center font-semibold font-worksans text-textlight dark:text-textdark">
        Learn more about KRYPPAY
      </h2>

      <div className='flex flex-col items-center gap-4 mt-10 w-full'>
        {faqq.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="w-full max-w-[700px] bg-[#F7F9FA] dark:bg-[#25282E] rounded-[16px]  cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div  className="flex justify-between items-center px-4 py-4 ">
              <p className="dark:text-textdark text-textlight font-medium text-[16px]">{item.question}</p>
              <span className="text-xl text-textlight dark:text-textdark">
                {openIndex === index ? '-' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-sm text-textlight dark:text-textdark  pb-4 transition-all px-4 duration-300">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
