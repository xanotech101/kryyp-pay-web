"use client"
import React from 'react'

const services = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-white dark:bg-black px-4 md:px-15 pt-20 md:pt-32 max-w-[1440px] mx-auto'>
        <p className="bg-[#3805F250] px-4 py-1 font-worksans text-universal text-[14px] rounded-[80px] font-medium">
          Services
        </p>

          <p className="text-textlight dark:text-textdark text-center font-dmsans font-normal text-[18px]">
         One App, endless possibilities for <span className='text-universal'>Crypto Transactions</span>
        </p>

         <h2 className="text-[40px] text-center font-semibold font-worksans text-textlight dark:text-textdark">
         Deposit, send, convert, and withdraw your crypto seamlessly—all in one secure and easy-to-use platform.
        </h2>

       


      <img src="/services/serviceimage.svg" alt="" className='py-10 dark:hidden'/>
      <img src="/services/servicesdark.svg" alt="" className='py-10 hidden dark:block'/>


      <div className="bg-cover bg-center h-[100%] w-full flex flex-col xl:flex-row gap-5 justify-center items-center "
         style={{ backgroundImage: "url('/joinbanner.svg')" }}>


            <div className='flex flex-col gap-5 justify-center items-center xl:items-start px-10'>
            <h1 className='text-[50px] text-textdark text-center xl:text-start font-worksans font-semibold'>
             Join the Future of Crypto Payments!
            </h1>
            <p className='text-[24px] text-textdark text-center md:text-start font-worksans font-medium'>
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



            <img src="/iphone.svg" alt="" />
           

      </div>
    </div>
  )
}

export default services