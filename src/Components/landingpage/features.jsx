// "use client"
import React from 'react'

const features = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-white dark:bg-black xl:pt-0 pt-20 px-4 md:px-15 max-w-[1440px] mx-auto'>
            <p className="bg-[#3805F250] px-4 py-1 font-worksans text-universal text-[14px] rounded-[80px] font-medium">
                Features
            </p>

            <h2 className="text-[40px] font-semibold text-center font-worksans text-textlight dark:text-textdark">
                Explore our amazing features
            </h2>

            <p className="text-textlight dark:text-textdark text-center font-worksans font-medium text-[24px]">
                Whether you're exchanging crypto for naira, withdrawing funds, shopping with virtual cards, or making direct crypto payments.
            </p>


            <div className="flex flex-col gap-5 items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    <div className="flex flex-col gap-5 items-center">
                        <img src="/features/fastbit.svg" alt="" className='w-[50px] h-[50px]' />
                        <h2 className="text-[20px] font-semibold font-worksans text-textlight dark:text-textdark">
                            Fast Crypto-to-Naira Swap
                        </h2>
                        <p className="text-textlight text-center dark:text-textdark font-worksans font-medium text-[16px]">
                            Convert your crypto in seconds with real-time exchange rates and low fees.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 items-center">
                        <img src="/features/card.svg" alt="" className='w-[50px] h-[50px]' />
                        <h2 className="text-[20px] font-semibold font-worksans text-textlight dark:text-textdark">
                            Virtual Card
                        </h2>
                        <p className="text-textlight text-center dark:text-textdark font-worksans font-medium text-[16px]">
                            Generate a secure virtual card and use it for any online transactions.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 items-center">
                        <img src="/features/pay.svg" alt="" className='w-[50px] h-[50px]' />
                        <h2 className="text-[20px] font-semibold font-worksans text-textlight dark:text-textdark">
                            Pay with crypto anywhere
                        </h2>
                        <p className="text-textlight text-center dark:text-textdark font-worksans font-medium text-[16px]">
                            Use KRYPPAY to pay directly with crypto for services, shoppings, purchases and more.
                        </p>
                    </div>
                </div>

                <hr className='w-[100%] text-[#D5D7DA]' />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                <div className="flex flex-col gap-5 items-center">
                    <img src="/features/security.svg" alt="" className='w-[50px] h-[50px]' />
                    <h2 className="text-[20px] font-semibold font-worksans text-textlight dark:text-textdark">
                        Advanced Security
                    </h2>
                    <p className="text-textlight text-center dark:text-textdark font-worksans font-medium text-[16px]">
                        Stay protected with biometric login, two-factor authentication, and encrypted transactions.
                    </p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                    <img src="/features/support.svg" alt="" className='w-[50px] h-[50px]' />
                    <h2 className="text-[20px] font-semibold font-worksans text-textlight dark:text-textdark">
                        Multicurrency support
                    </h2>
                    <p className="text-textlight text-center dark:text-textdark font-worksans font-medium text-[16px]">
                        Convert and transact with multiple cryptocurrencies.
                    </p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                    <img src="/features/customer.svg" alt="" className='w-[50px] h-[50px]' />
                    <h2 className="text-[20px] font-semibold font-worksans text-textlight dark:text-textdark">
                        Customer Support
                    </h2>
                    <p className="text-textlight text-center dark:text-textdark font-worksans font-medium text-[16px]">
                        Get round-the-clock assistance whenever you need it.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default features