'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from 'react-icons/io5';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed bg-lightbg dark:bg-darkbg w-full px-5 py-4 xl:relative z-50'>
      <div className='flex justify-between items-center max-w-[1440px] mx-auto'>
        
        <div>
          <img src='/KRYPPAYlogo.svg' alt='logo' width={100} height={100} className='dark:hidden' />
          <img src='/KRYPPAYdark.svg' alt='logo' width={100} height={100} className='hidden dark:block' />
        </div>

      
        <ul className='hidden lg:flex gap-10 text-lg'>
          
            <li>
              <Link href='/' className='text-textlight dark:text-textdark font-worksans font-medium text-[20px]'>
                Home
              </Link>
            </li>


            <li>
              <Link href='/' className='text-textlight dark:text-textdark font-worksans font-medium text-[20px]'>
                About us
              </Link>
            </li>

            <li>
              <Link href='/' className='text-textlight dark:text-textdark font-worksans font-medium text-[20px]'>
                Features
              </Link>
            </li>

            <li>
              <Link href='/' className='text-textlight dark:text-textdark font-worksans font-medium text-[20px]'>
                Services
              </Link>
            </li>

            <li>
              <Link href='/' className='text-textlight dark:text-textdark font-worksans font-medium text-[20px]'>
                FAQs
              </Link>
            </li>



          
        </ul>

       
        <div className='hidden lg:flex gap-5 items-center'>
          {/* <div className='flex items-center gap-2'>
            <TbWorld className='w-[24px] h-[24px] text-textlight dark:text-textdark' />
            <select className='bg-transparent text-textlight dark:text-textdark font-worksans font-medium text-[20px] outline-none'>
              <option>ENG</option>
              <option>EN</option>
              <option>FR</option>
            </select>
          </div> */}
          <button className='bg-universal w-[160px] h-[50px] text-white rounded-[15px] text-[18px]'>
            Contact Us
          </button>
        </div>

       
        <div className='lg:hidden'>
          <GiHamburgerMenu
            size={25}
            className='text-textlight dark:text-textdark cursor-pointer'
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

     
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[300px] bg-lightbg dark:bg-darkbg shadow-lg z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center px-5 py-4 border-b border-gray-300 dark:border-gray-600'>
          <h2 className='font-bold text-xl text-textlight dark:text-textdark'>Menu</h2>
          <IoClose
            size={30}
            className='cursor-pointer text-textlight dark:text-textdark'
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className='flex flex-col gap-6 p-5 text-lg'>
            <li>
              <Link
                href='/'
                onClick={() => setOpen(false)}
                className='text-textlight dark:text-textdark font-worksans font-medium text-[18px]'
              >
                Home
              </Link>
            </li>

             <li>
              <Link
                href='/'
                onClick={() => setOpen(false)}
                className='text-textlight dark:text-textdark font-worksans font-medium text-[18px]'
              >
                About us
              </Link>
            </li>

             <li>
              <Link
                href='/'
                onClick={() => setOpen(false)}
                className='text-textlight dark:text-textdark font-worksans font-medium text-[18px]'
              >
                Features
              </Link>
            </li>

             <li>
              <Link
                href='/'
                onClick={() => setOpen(false)}
                className='text-textlight dark:text-textdark font-worksans font-medium text-[18px]'
              >
                Services
              </Link>
            </li>

             <li>
              <Link
                href='/'
                onClick={() => setOpen(false)}
                className='text-textlight dark:text-textdark font-worksans font-medium text-[18px]'
              >
                FAQs
              </Link>
            </li>

         
        </ul>

        <div className='flex flex-col gap-4 px-5 mt-4'>
          {/* <div className='flex items-center gap-2'>
            <TbWorld className='w-[24px] h-[24px] text-textlight dark:text-textdark' />
            <select className='bg-transparent text-textlight dark:text-textdark font-worksans font-medium text-[18px] outline-none'>
              <option>ENG</option>
              <option>EN</option>
              <option>FR</option>
            </select>
          </div> */}
          <button className='bg-universal w-full h-[45px] text-white rounded-[12px] text-[16px]'>
            Contact Us
          </button>
        </div>
      </div>

     
      {open && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40'
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
