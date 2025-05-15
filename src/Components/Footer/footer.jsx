import React from 'react'
import { FaInstagram } from "react-icons/fa";   
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-universal gap-10 py-10 px-4 md:px-15 max-w-[1440px] mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between gap-10 items-center md:items-start' >
            <div className='flex flex-col justify-center items-start'>
                <img src="/KRYPPAYdark.svg" alt="" />
                <p className='md:w-[486px] text-start text-white font-worksans text-[16px] '>Simplifying crypto payments for everyone. Send, receive, and convert crypto effortlessly with KRYPPAY—secure, fast, and reliable.</p>
                <div className='flex flex-row gap-5'>
                   <div className='w-[30px] h-[30px] rounded-[50%] bg-[#FFFFFF40] place-items-center place-content-center'>
                     <FaInstagram className='text-white'/>
                   </div>

                     <div className='w-[30px] h-[30px] rounded-[50%] bg-[#FFFFFF40] place-items-center place-content-center'>
                     <RiFacebookBoxLine className='text-white'/>
                   </div>

                     <div className='w-[30px] h-[30px] rounded-[50%] bg-[#FFFFFF40] place-items-center place-content-center'>
                     <CiLinkedin  className='text-white'/>
                   </div>

                     <div className='w-[30px] h-[30px] rounded-[50%] bg-[#FFFFFF40] place-items-center place-content-center'>
                     <FaXTwitter className='text-white'/>
                   </div>
                </div>
            </div>


            <div className='flex flex-col md:flex-row gap-10 justify-between items-start '>
                <div className='flex flex-row gap-10 '>
                  <div className='flex flex-col gap-5 justify-center items-start'>
                    <h2 className='font-medium font-worksans text-white text-[18px]'>Links</h2>
                    <ul className='flex flex-col gap-5'>
                        <li><Link rel="stylesheet"  href=" " className='font-normal font-worksans text-white text-[16px]'>About us</Link></li>
                        <li><Link rel="stylesheet" href="" className='font-normal font-worksans text-white text-[16px]'>Features</Link></li>
                        <li><Link rel="stylesheet" href="" className='font-normal font-worksans text-white text-[16px]'>Services</Link></li>
                        <li><Link rel="stylesheet" href="" className='font-normal font-worksans text-white text-[16px]'>Why Kryppay</Link></li>
                    </ul>
                </div>


                 <div className='flex flex-col gap-5 justify-center items-start'>
                    <h2 className='font-medium font-worksans text-white text-[18px]'>Support</h2>
                    <ul className='flex flex-col gap-5'>
                        <li><Link rel="stylesheet"  href=" " className='font-normal font-worksans text-white text-[16px]'>FAQs</Link></li>
                        <li><Link rel="stylesheet" href="" className='font-normal font-worksans text-white text-[16px]'>Help Center</Link></li>
                        <li><Link rel="stylesheet" href="" className='font-normal font-worksans text-white text-[16px]'>Terms & Conditions</Link></li>
                        <li><Link rel="stylesheet" href="" className='font-normal font-worksans text-white text-[16px]'>Privacy Policy </Link></li>
                    </ul>
                </div>
                </div>
                
                <div className="flex flex-col gap-5 justify-center items-start">
                     <h2 className='font-medium font-worksans text-white text-[18px]'>Downloads</h2>
                      <div className='flex flex-col gap-5'>
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

            
            </div>
        </div>

        <hr className='text-white w-[100%]'/>



       <p className='text-[14px] dark:text-textdark font-worksans font-medium text-white'>Copyright ©2025 Kryppay. All rights reserved</p>
    </div>
  )
}

export default footer