'use client'

import React from 'react';
import Footer from '../../component/footer/footer';
import NavPolicy from '../../component/nav/nav-policy';


export default function Page() {
  return (
    <div> <NavPolicy />

    <div className='z-10'>
     
      <div className='flex flex-col items-center justify-center bg-universal text-white p-20'>
        <h1 className='text-[48px] font-worksans font-bold'>Data Policy</h1>
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
          <p className='text-[18px] font-worksans font-normal '>This Data Policy explains how KRYP PAY collects, stores, manages, protects, and processes data across our website, mobile application, and financial services platform.
</p>
          <br />
          <p className='text-[18px] font-worksans font-normal '>We are committed to transparency, security, and compliance with Nigerian financial regulations and data protection laws.
</p>
         
        </div>

        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Data we collect</h1>
          <p className='text-[18px] font-worksans font-normal '>We collect:</p>
          <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
            <li>Personal identification information</li>
            <li>Contact details</li>
            <li>Financial account information</li>
            <li>Wallet balances and transaction records</li>
            <li>Crypto conversion history</li>
            <li>Payment records</li>
            <li>Virtual card usage records</li>
            <li>Device and security logs</li>
          </ul>
        </div>

        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Why we collect Data</h1>
          <p className='text-[18px] font-worksans font-normal '>We collect data to:</p>
          <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
            <li>Deliver our services</li>
            <li>Verify identity and prevent fraud</li>
            <li>Process transactions and payments</li>
            <li>Support regulatory compliance</li>
            <li>Improve platform security</li>
            <li>Resolve disputes</li>
            <li>Provide customer support</li>
            <li>Improve system performance</li>
          </ul>
        </div>

        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Data Protection Measures</h1>
          <p className='text-[18px] font-worksans font-normal '>We protect data using:</p>
          <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
            <li>Encryption</li>
            <li>MFA</li>
            <li>Access restrictions</li>
            <li>Security monitoring</li>
            <li>Compliance audits</li>
            <li>Fraud prevention systems</li>
            <li>Secure infrastructure</li>
          </ul>
        </div>

        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Data Sharing</h1>
          <p className='text-[18px] font-worksans font-normal '>We may share data only with:</p>
          <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
            <li>Authorized financial partners</li>
            <li>Payment providers</li>
            <li>Compliance partners</li>
            <li>Legal and regulatory authorities</li>
            <li>Security monitoring providers</li>
          </ul>
          <br />
          <p className='text-[18px] font-worksans font-normal '>We do not sell user data.</p>
        </div>

        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Data Retention</h1>
          <p className='text-[18px] font-worksans font-normal '>We retain user data only as long as necessary for:</p>
          <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
            <li>Legal compliance</li>
            <li>Service delivery</li>
            <li>Fraud prevention</li>
            <li>Financial reporting</li>
            <li>Audit requirements</li>
          </ul>
          <br />
          <p className='text-[18px] font-worksans font-normal '>Some records must be retained by law even after account deletion.</p>
        </div>

        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>User Rights</h1>
          <p className='text-[18px] font-worksans font-normal '>Users may request:</p>
          <ul className="list-disc pl-6 space-y-2 text-[18px] font-worksans font-normal">
            <li>Access to their data</li>
            <li>Data correction</li>
            <li>Deletion where permitted</li>
            <li>Restriction of processing</li>
            <li>Data portability where applicable</li>
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
