"use client"
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { MdOutlineAddBox } from "react-icons/md";
import { RiArrowUpBoxLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { BsDashSquare } from "react-icons/bs";


const services = () => {
    useEffect(() => {
          AOS.init();
        }, []);
  return (
    <div className='flex flex-col justify-center items-center gap-5 bg-white dark:bg-black px-4 md:px-15 pt-20 md:pt-32 max-w-[1440px] mx-auto'>
        <p className="bg-[#3805F250] px-4 py-1 font-worksans text-universal text-[12px] md:text-[14px] rounded-[80px] font-medium">
          Services
        </p>

          <p className="text-textlight dark:text-textdark text-center font-dmsans font-normal text-[16px] md:text-[18px]">
         One App, endless possibilities for <span className='text-universal'>Crypto Transactions</span>
        </p>

         <h2 className="text-[30px] md:text-[40px] text-center font-semibold font-worksans text-textlight dark:text-textdark">
         Deposit, send, convert, and withdraw your crypto seamlessly—all in one secure and easy-to-use platform.
        </h2>

       


      <img src="/servicesimgesm.svg" alt="" className='py-10 md:hidden dark:hidden'/>
      <img src="/services/serviceimage.svg" alt="" className='py-10 dark:hidden hidden md:block'/>
      <img src="/servicesimgesm.svg" alt="" className='py-10 dark:block dark:md:hidden hidden'/>
      <img src="/services/servicesdark.svg" alt="" className='py-10 hidden dark:md:block dark:hidden'/>

      <div className='flex flex-col md:flex-row gap-5 justify-center items-start w-full max-w-[1200px] md:hidden'>
         <div className="flex flex-row gap-5 items-start md:items-center">
                    <div className='w-[50px] h-[50px] rounded-[50%] bg-[#A9A9A950] flex justify-center items-center'>
                          <MdOutlineAddBox className='text-universal dark:text-textdark'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h2 className='text-textlight dark:text-textdark font-worksans font-semibold text-[20px] '>Deposit</h2>
                       <p className="text-textlight dark:text-textdark font-worksans font-medium text-[15px] ">
                     Fund your wallet in seconds with supported cryptocurrencies.
                    </p>
                    </div>
                   
                  </div>
        
                  <div className="flex flex-row gap-5 items-start">
                  <div className='w-[50px] h-[50px] rounded-[50%] bg-[#A9A9A950] flex justify-center items-center'>
                          <RiArrowUpBoxLine  className='text-universal dark:text-textdark'/>
                    </div>
                     <div className='flex flex-col gap-1'>
                      <h2 className='text-textlight dark:text-textdark font-worksans font-semibold text-[20px] '>Send</h2>
                       <p className="text-textlight dark:text-textdark font-worksans font-medium text-[15px] ">
                      Transfer crypto instantly to any wallet address worldwide.
                    </p>
                    </div>
                  </div>
        
                  <div className="flex flex-row gap-5 items-start">
                  <div className='w-[50px] h-[50px] rounded-[50%] bg-[#A9A9A950] flex justify-center items-center'>
                          <GrTransaction className='text-universal dark:text-textdark'/>
                    </div>
                     <div className='flex flex-col gap-1'>
                      <h2 className='text-textlight dark:text-textdark font-worksans font-semibold text-[20px] '>Convert</h2>
                       <p className="text-textlight dark:text-textdark font-worksans font-medium text-[15px] ">
                      Swap your crypto to naira instantly at the best market rates.
                    </p>
                    </div>
                  </div>

                   <div className="flex flex-row gap-5 items-start">
                  <div className='w-[50px] h-[50px] rounded-[50%] bg-[#A9A9A950] flex justify-center items-center'>
                          <BsDashSquare className='text-universal dark:text-textdark'/>
                    </div>
                     <div className='flex flex-col gap-1'>
                      <h2 className='text-textlight dark:text-textdark font-worksans font-semibold text-[20px] '>Withdraw</h2>
                       <p className="text-textlight dark:text-textdark font-worksans font-medium text-[15px] ">
                     Move your funds from KRYPPAY to another wallet with ease.
                    </p>
                    </div>
                  </div>
      </div>


      <div className="bg-cover bg-center h-[100%] w-full flex flex-col xl:flex-row gap-5 rounded-[30px] justify-center items-center py-10 md:py-0 "
         style={{ backgroundImage: "url('/joinbanner.svg')" }}>


            <div data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine" className='flex flex-col gap-5 justify-center items-center xl:items-start px-10'>
            <h1 className='md:text-[50px] text-[30px] text-textdark text-center xl:text-start font-worksans font-semibold'>
             Join the Future of Crypto Payments!
            </h1>
            <p className='text-[20px] md:text-[24px] text-textdark text-center md:text-start font-worksans font-medium'>
              Join over 100,000 users who trust KRYPPAY for their crypto transactions. Sign up today and experience the future of crypto payments!
            </p>

            <div className='flex flex-col md:flex-row gap-5'>
              <div className='flex flex-row gap-1 items-center justify-center w-[200px] h-[50px] rounded-[6px] bg-black'>
                <img src='/Playstore.svg' alt='logo' className='w-[20px] h-[20px]' />
                <div className='flex flex-col justify-center items-start'>
                  <p className='text-[10px] font-worksans font-light text-white'>Get the App</p>
                  <p className='text-[14px] dark:text-textdark font-worksans font-medium text-white'>Google Play</p>
                </div>
              </div>

            
              <div className='flex flex-row gap-1 items-center justify-center w-[200px] h-[50px] rounded-[6px] bg-black'>
                <img src='/Applestore.svg' alt='logo' className='w-[20px] h-[20px]' />
                <div className='flex flex-col justify-center items-start'>
                  <p className='text-[10px] font-worksans font-light text-white'>Get the App</p>
                  <p className='text-[14px] dark:text-textdark font-worksans font-medium text-white'>AppleStore</p>
                </div>
              </div>
            </div>
          </div>



            <img src="/iphone.svg" alt="" data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine" 
            className='dark:hidden'/>

             <img src="/iPhonedark.svg" alt="" data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine" 
            className='hidden dark:block'/>
           

      </div>
    </div>
  )
}

export default services