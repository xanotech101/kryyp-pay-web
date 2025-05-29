"use client"
import React from 'react'
import { GrTransaction } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
      AOS.init();
    }, []);
  
  return (
    <div  className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10  bg-white dark:bg-black px-4 md:px-0 max-w-[1440px] mx-auto overflow-hidden">
      
        
       
        <img
          src="/about.svg"
          alt=""
          className=" w-[550px] h-auto"
data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
        />
     

      
      <div data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine" className="flex flex-col gap-5 xl:pr-15 items-start text-left">
        <p className="bg-[#3805F250] px-4 py-1 font-worksans rounded text-universaltext-[12px] md:text-[14px] font-medium">
          About us
        </p>
        <h2 className="md:text-[40px] text-[30px] font-semibold font-worksans text-textlight dark:text-textdark">
          About <span className='text-universal'>KRYPPAY</span>
        </h2>
        <p className="text-textlight dark:text-textdark font-worksans font-medium text-[20px] md:text-[24px]">
          <span className='text-universal'>KRYPPAY</span> is a fast and secure platform that enables seamless crypto-to-naira transactions for converting, receiving, or withdrawing cryptocurrency.
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-5 items-start md:items-center">
            <div className='w-[50px] h-[50px] rounded-[50%] bg-[#A9A9A950] flex justify-center items-center'>
                  <GrTransaction className='text-universal dark:text-textdark'/>
            </div>
            <p className="text-textlight dark:text-textdark font-worksans font-medium text-[15px] md:text-[20px]">
              Instant crypto to naira Conversion. No delays, no stress.
            </p>
          </div>

          <div className="flex flex-row gap-5 items-start">
          <div className='w-[50px] h-[50px] rounded-[50%] bg-[#A9A9A950] flex justify-center items-center'>
                  <FaCreditCard  className='text-universal dark:text-textdark'/>
            </div>
            <p className="text-textlight dark:text-textdark font-worksans font-medium text-[15px] md:text-[20px]">
              Virtual Cards for payments. Spend anywhere, anytime.
            </p>
          </div>

          <div className="flex flex-row gap-5 items-start">
          <div className='w-[50px] h-[50px] rounded-[50%] bg-[#A9A9A950] flex justify-center items-center'>
                  <MdSecurity className='text-universal dark:text-textdark'/>
            </div>
            <p className="text-textlight dark:text-textdark font-worksans font-medium text-[15px] md:text-[20px]">
             Top-Level Security: Google 2FA, biometric authentication, and <br></br>encrypted transactions.
            </p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About
