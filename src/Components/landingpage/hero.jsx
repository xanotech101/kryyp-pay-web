// "use client"
import React from 'react';
import Background from '../background/background';

const Hero = () => {
  return (
    <div className="relative w-full xl:h-[120vh] h-[170vh] md:h-[130vh] min-h-screen overflow-hidden max-w-[1440px] mx-auto">
      <Background />

      <div className="absolute top-6/12 md:top-7/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div className='flex flex-col gap-20 items-center'>
          <div className='flex flex-col gap-5 items-center'>
            <p className='md:w-[321px] md:h-[30px] rounded-[15px] bg-[#3805F250] text-universal text-[10px] md:text-[14px] font-worksans font-medium place-content-center px-9 py-3 md:px-0 md:py-0'>
              Future of cryptocurrency
            </p>
            <h1 className='text-[50px] text-textlight dark:text-textdark font-worksans font-semibold'>
              Seamless <span className='text-universal'>Crypto-to-Naira</span> Payments in Seconds!
            </h1>
            <p className='text-[24px] text-textlight dark:text-textdark font-worksans font-medium'>
              Send, receive, and convert crypto to Naira instantly with low fees, high security, and zero delays.
            </p>

            <div className='flex flex-col md:flex-row gap-5'>
              <button className='cursor-pointer flex flex-row gap-1 items-center justify-center w-[200px] h-[50px] rounded-[6px] bg-black'>
                <img src='/Playstore.svg' alt='logo' className='w-[20px] h-[20px]' />
                <div className='flex flex-col justify-center items-start'>
                  <p className='text-[10px] font-worksans font-light text-white'>Get the App</p>
                  <p className='text-[14px] dark:text-textdark font-worksans font-medium text-white'>Google Play</p>
                </div>
              </button>

            
              <button className='cursor-pointer flex flex-row gap-1 items-center justify-center w-[200px] h-[50px] rounded-[6px] bg-black'>
                <img src='/Applestore.svg' alt='logo' className='w-[20px] h-[20px]' />
                <div className='flex flex-col justify-center items-start'>
                  <p className='text-[10px] font-worksans font-light text-white'>Get the App</p>
                  <p className='text-[14px] dark:text-textdark font-worksans font-medium text-white'>AppleStore</p>
                </div>
              </button>
            </div>
          </div>

          <img src="/heroimage.svg" alt="" className='w-full h-[60%] dark:hidden mb-[-100px] md:mb-0' />
           <img src="/herodark.svg" alt="" className='w-full h-[60%] hidden dark:block mb-[-100px] md:mb-0' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
