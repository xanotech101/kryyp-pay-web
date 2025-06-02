"use client"
import React from 'react';
import Background from '../background/background';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full h-[130vh] xl:h-[135vh] min-h-screen overflow-hidden max-w-[1440px] mx-auto">
      <Background />

      <div className="absolute top-24 md:top-44  left-0 w-full h-full flex flex-col justify-center items-center text-white px-[15px]">
        <div className='flex flex-col md:gap-20 gap-0 items-center w-full '>
          <div  className='flex flex-col gap-5 items-center text-center'>
            <p  data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"  className='md:w-[321px] h-[30px] w-[187px] rounded-[15px] bg-[#3805F250] text-universal text-[10px] md:text-[14px] font-worksans font-medium place-content-center'>
              Future of cryptocurrency
            </p>
            <h1 data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine" className='md:text-[50px] text-[40px] text-textlight dark:text-textdark font-worksans font-semibold'>
              Seamless <span className='text-universal'>Crypto-to-Naira</span><br />Payments in Seconds!
            </h1>
            <p data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine" className='text-[24px] text-textlight dark:text-textdark font-worksans font-medium'>
              Send, receive, and convert crypto to Naira instantly with low fees, high security, and zero delays.
            </p>

            <div data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine" className='flex flex-col md:flex-row gap-5'>
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

          <img src="/heroimage.svg" alt="" data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine" className='w-full h-[40vh] md:h-[60%] dark:hidden mt-10 md:mt-0' />
          <img src="/herodark.svg" alt="" data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine" className='w-full h-[40vh] md:h-[60%] hidden dark:block mt-10 md:mt-0' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
