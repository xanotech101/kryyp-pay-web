"use client"
import React from 'react'

const trusties = () => {
      const images = [
    { src: '/paypal.svg'},
    { src: '/mastercard.svg'},
    { src: '/universal.svg' },
    { src: '/mastercard.svg'},
    { src: '/universal.svg'},
  ];
    return (
        <div className="flex flex-col justify-between items-center bg-white dark:bg-black px-4 md:px-15 py-10 max-w-[1440px] mx-auto">
            <h1 className='font-worksans font-medium text-[20px] text-textlight dark:text-textdark '>Trusties</h1>
             <div className=" items-center w-full h-[100px] grid grid-cols-3 md:grid-cols-5 space-y-5">
        {images.map((img, index) => (
            <img
            key={index}
            src={img.src}
            alt=""
            className=" w-[140px] h-[45px] "
            />
        ))}
        </div>
        </div>
    )

}

export default trusties