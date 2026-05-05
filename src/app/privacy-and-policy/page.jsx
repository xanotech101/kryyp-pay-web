'use client'

import React from 'react';
import Footer from '../../component/footer/footer';
import NavPolicy from '../../component/nav/nav-policy';


export default function Page() {
  return (
    <div> <NavPolicy />

    <div className='z-10'>
     
      <div className='flex flex-col items-center justify-center bg-universal text-white p-20'>
        <h1 className='text-[48px] font-worksans font-bold'>Privacy and Policy</h1>
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
          <p className='text-[18px] font-worksans font-normal '>KRYP PAY is a blockchain-powered crypto-to-Naira payment platform operated by Kryp App Limited. We provide users with secure cryptocurrency conversion services, Naira wallet services, payment processing, virtual card services, and merchant payment solutions.</p><br />
          <p className='text-[18px] font-worksans font-normal '>Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, store, and disclose your personal information when you use our website, mobile application, and related services</p><br />
          <p className='text-[18px] font-worksans font-normal '>By accessing or using KRYP PAY, you agree to the terms of this Privacy Policy.</p>
        </div>


        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Information we may collect</h1>
          <p className='text-[18px] font-worksans font-normal '>We may collect the following information:</p>
          <br />
          <h2 className='text-[20px] font-worksans font-semibold text-black dark:text-white'>Personal Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Residential address</li>
            <li>Date of birth</li>
            <li>Government-issued identification documents</li>
            <li>Passport photograph/selfie verification</li>
            <li>BVN and NIN where required</li>
            <li>KYC verification records</li>
          </ul>
          <br />
          <h2 className='text-[20px] font-worksans font-semibold text-black dark:text-white'>Financial Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bank account details</li>
            <li>Wallet addresses</li>
            <li>Crypto wallet transactions</li>
            <li>Naira wallet records</li>
            <li>Payment beneficiary details</li>
            <li>Virtual card information</li>
            <li>Payment transaction history</li>
          </ul>
          <br />
          <h2 className='text-[20px] font-worksans font-semibold text-black dark:text-white'>Technical Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device information</li>
            <li>IP address</li>
            <li>Browser information</li>
            <li>Operating system</li>
            <li>App version</li>
            <li>Login activity</li>
            <li>Device identifiers</li>
            <li>Security logs</li>
          </ul>
          <br />
          <h2 className='text-[20px] font-worksans font-semibold text-black dark:text-white'>Usage Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>User preferences</li>
            <li>Transaction patterns</li>
            <li>Customer support interactions</li>
            <li>In-app activity logs</li>
          </ul>
        </div>


        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>How we use your information</h1>
          <p className='text-[18px] font-worksans font-normal '>We use your information to:</p>
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage your account</li>
            <li>Verify your identity (KYC/AML compliance)</li>
            <li>Process crypto-to-Naira conversions</li>
            <li>Facilitate wallet deposits and withdrawals</li>
            <li>Enable payments and merchant transactions</li>
            <li>Issue and manage virtual cards</li>
            <li>Prevent fraud and unauthorized access</li>
            <li>Improve our services and user experience</li>
            <li>Send important transaction notifications</li>
            <li>Meet legal and regulatory obligations</li>
          </ul>
        </div>

        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Sharing of information</h1>
          <p className='text-[18px] font-worksans font-normal '>We may share your information with:</p>
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>Licensed financial institutions</li>
            <li>Banking partners</li>
            <li>Payment processors</li>
            <li>Virtual card partners</li>
            <li>Crypto liquidity providers</li>
            <li>Identity verification providers</li>
            <li>Regulatory authorities</li>
            <li>Law enforcement agencies where required by law</li>
            <li>Cloud hosting and infrastructure providers</li>
          </ul>
          <br />
          <p className='text-[18px] font-worksans font-normal '>We do not sell your personal information.</p>
        </div>


        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Data Security</h1>
          <p className='text-[18px] font-worksans font-normal '>We implement strong security measures including:</p>
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of sensitive data</li>
            <li>Secure API communication</li>
            <li>Multi-factor authentication (MFA)</li>
            <li>Access control restrictions</li>
            <li>Fraud monitoring systems</li>
            <li>Security audits and penetration testing</li>
            <li>Secure cloud infrastructure</li>
          </ul>
          <br />
          <p className='text-[18px] font-worksans font-normal '>
            However, no digital platform can guarantee absolute security.</p>
        </div>

        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Data Retention</h1>
          <p className='text-[18px] font-worksans font-normal '>We retain your information for as long as necessary to:</p>
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide our services</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud</li>
            <li>Resolve disputes</li>
            <li>Maintain financial audit records</li>
            <li>Fulfill AML and regulatory requirements</li>
          </ul>
          <br />
          <p className='text-[18px] font-worksans font-normal '>Certain financial and KYC records may be retained even after account closure where required by law.</p>
        </div>

        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Your Rights</h1>
          <p className='text-[18px] font-worksans font-normal '>You may request to:</p>
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion where legally permitted</li>
            <li>Withdraw consent where applicable</li>
            <li>Export transaction history</li>
            <li>Restrict certain processing activities</li>
          </ul>
          <br />
          <p className='text-[18px] font-worksans font-normal '>Some requests may be limited by regulatory compliance obligations.</p>
        </div>


        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Third-Party Services</h1>
          <p className='text-[18px] font-worksans font-normal '>KRYP PAY integrates with third-party service providers such as banks, payment gateways, crypto exchanges, and card issuing partners. Their own privacy policies may also apply.</p>

        </div>


        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Children Privacy</h1>
          <p className='text-[18px] font-worksans font-normal '>KRYP PAY is not intended for users below the legally permitted age for financial services and cryptocurrency transactions under applicable law.
            <br /><br />We do not knowingly onboard minors.
          </p>
        </div>
        <div className='pb-10'>
          <h1 className='text-[25px] font-worksans font-semibold text-black dark:text-white'>Policy Updates</h1>
          <p className='text-[18px] font-worksans font-normal '>For privacy-related inquiries:</p><br />
          <p className='text-[18px] font-worksans font-normal '>Email: privacy@krypapp.com</p>
          <p className='text-[18px] font-worksans font-normal '>Support: support@kryapp.com</p>
          <p className='text-[18px] font-worksans font-normal '>Website: www.krypapp.com</p>


        </div>
      </div>
      <Footer />
    </div>
    </div>
   
  )
}
