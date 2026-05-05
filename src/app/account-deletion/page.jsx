'use client'

import React from 'react';
import Footer from '../../component/footer/footer';
import NavPolicy from '../../component/nav/nav-policy';


export default function Page() {
    return (
        <div> <NavPolicy />

            <div className='z-10'>

                <div className='flex flex-col items-center justify-center bg-universal text-white p-20'>
                    <h1 className='text-[48px] font-worksans font-bold'>Account Deletion Policy
                    </h1>
                    <p className='text-[24px] font-worksans font-medium '>Updated May 4, 2026.</p>
                </div>

                <div className='px-20 py-10'>
                    <div className='flex flex-col items-center justify-center bg-[#F7F9FA] py-5 rounded  text-white'>
                        <p className='text-[#717680] font-worksans font-normal text-[18px] '>PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THE SERVICES OR ACCESSING THE PLATFORM.</p>
                    </div>
                </div>

                <div className='px-20 z-10 dark:text-white'>
                    <div className='pb-10'>
                        <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Introduction</h1>
                        <p className='text-[18px] font-worksans font-normal '>Welcome to KRYP PAY</p>
                        <br />
                        <p className='text-[18px] font-worksans font-normal '>At KRYP APP, users have the right to request account deletion, subject to applicable financial regulations, fraud prevention obligations, and compliance requirements.</p><br />
                        <p className='text-[18px] font-worksans font-normal '>This policy explains how account deletion works.</p><br />

                    </div>

                    <div className='pb-10'>
                        <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Eligibility for Account Deletion</h1>
                        <p className='text-[18px] font-worksans font-normal '>You may request account deletion if:</p>
                        <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
                            <li>There are no pending transactions</li>
                            <li>Your wallet balances have been fully withdrawn</li>
                            <li>Your virtual cards have been closed</li>
                            <li>There are no unresolved disputes</li>
                            <li>There are no compliance investigations</li>
                            <li>There are no fraud-related restrictions</li>
                        </ul>
                        <br />
                        <p className='text-[18px] font-worksans font-normal '>We may require identity verification before processing deletion.</p>
                    </div>

                    <div className='pb-10'>
                        <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>How to request Deletion</h1>
                        <p className='text-[18px] font-worksans font-normal '>You may request account deletion through:</p>
                        <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
                            <li>Your in-app account settings</li>
                            <li>Customer support</li>
                            <li>Emailing support@kryppay.com</li>
                        </ul>
                    </div>

                    <div className='pb-10'>
                        <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>What happens after Deletion</h1>
                        <p className='text-[18px] font-worksans font-normal '>Once your deletion request is approved:</p>
                        <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
                            <li>Your account access will be permanently disabled</li>
                            <li>Login credentials will be deactivated</li>
                            <li>Wallet access will be revoked</li>
                            <li>Virtual card services will be terminated</li>
                            <li>Marketing communications will stop</li>
                            <li>Personal profile data will be deleted where legally permitted</li>
                        </ul>
                        <br />
                        <p className='text-[18px] font-worksans font-normal '>However, we may retain:</p>
                        <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
                            <li>Transaction history</li>
                            <li>KYC records</li>
                            <li>Compliance documentation</li>
                            <li>Fraud monitoring records</li>
                            <li>Security logs</li>
                            <li>Financial audit records</li>
                        </ul>
                        <br />
                        <p className='text-[18px] font-worksans font-normal '>This is required by AML laws, financial regulations, and fraud prevention obligations.</p>
                    </div>


                    <div className='pb-10'>
                        <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Processing Timeline</h1>
                        <p className='text-[18px] font-worksans font-normal '>Account deletion requests are usually completed within:
                        </p><br />
                        <p className='text-[18px] font-worksans font-normal '>A7–30 business days</p><br />
                        <p className='text-[18px] font-worksans font-normal '>depending on compliance review requirements.</p>

                    </div>

                    <div className='pb-10'>
                        <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Important Notice</h1>
                        <p className='text-[18px] font-worksans font-normal '>Deleted accounts cannot be restored.
                        </p><br />
                        <p className='text-[18px] font-worksans font-normal '>If you wish to use KRYPAPP again in the future, you will need to complete a new registration and KYC verification process.</p>


                    </div>

                    <div className='pb-10'>
                        <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Cases Where Deletion May Be Refused</h1>
                        <p className='text-[18px] font-worksans font-normal '>We may refuse deletion requests where:</p>
                        <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
                            <li>Required by law</li>
                            <li>A fraud investigation is ongoing</li>
                            <li>Regulatory review is pending</li>
                            <li>Financial disputes remain unresolved</li>
                            <li>Court orders require record preservation</li>
                        </ul>
                    </div>


                    <div className='pb-10'>
                        <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Contact</h1>
                        <p className='text-[18px] font-worksans font-normal '>For deletion requests:
                        </p><br />
                        <p className='text-[18px] font-worksans font-normal '>Email: support@kryppay.com</p>


                    </div>
                </div>
                <Footer />
            </div>
        </div>

    )
}
