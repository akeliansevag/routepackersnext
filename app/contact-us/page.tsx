'use client'

import LocationIcon from '@/Icons/LocatioIcon'
import MailIcon from '@/Icons/MailIcon'
import { StatesList } from '@/utils/states-list'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([{
        fullName: "",
        phoneNumber: "",
        carBrand: "",
        email: "",
        zipCodeOrigin: "",
        zipCodeDest: "",
    }]);
    const router = useRouter()
    const submitHandler = () => {
        setLoading(true);
        axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/api/quote`, user)
            .then((res) => {
                console.log(res)
                setLoading(false);
                router.push('/done')
            })
            .catch((err) => {
                toast.error('something went wrong');
                setLoading(false);
            });
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    };

    const handleChange = (e: any) => setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }))

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <Toaster
                position="bottom-left"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
            <div className={`lg:w-[1200px] w-[390px] flex flex-col justify-center items-center gap-y-20 px-2`}>
                <div className="flex flex-col justify-center items-center lg:w-1/2 gap-y-4">
                    <h2 className="text-4xl font-semibold text-white">Contact Us</h2>
                    <p className="text-gray-400 text-center">one of your workspace experts will reach out to you based on your communication preferences</p>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-y-0 gap-y-8 justify-around items-center w-full'>
                    <div className='flex flex-col justify-center items-center gap-y-4'>
                        <LocationIcon />
                        <h4 className='text-white text-xl'>USA</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-y-4'>
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.98125 39C2.34375 39 1.8125 38.7875 1.3875 38.3625C0.9625 37.9375 0.75 37.4062 0.75 36.7688V28.1625C0.75 27.6667 0.909375 27.2325 1.22812 26.8599C1.54687 26.4873 1.95417 26.2486 2.45 26.1437L9.78125 24.6562C10.2771 24.5854 10.7821 24.63 11.2964 24.7901C11.8106 24.9502 12.2264 25.1889 12.5438 25.5062L17.5375 30.5C20.2292 28.8708 22.6906 26.9406 24.9219 24.7094C27.1531 22.4781 29.0125 20.0875 30.5 17.5375L25.4 12.3312C25.0813 12.0125 24.8773 11.6491 24.788 11.2411C24.6988 10.8331 24.6903 10.3819 24.7625 9.8875L26.1437 2.45C26.2146 1.95417 26.4448 1.54687 26.8344 1.22812C27.224 0.909375 27.6667 0.75 28.1625 0.75H36.7688C37.4062 0.75 37.9375 0.9625 38.3625 1.3875C38.7875 1.8125 39 2.34375 39 2.98125C39 7.55 37.9814 12.004 35.9443 16.3433C33.9071 20.6825 31.2154 24.5252 27.8692 27.8714C24.5231 31.2175 20.6804 33.9092 16.3411 35.9464C12.0019 37.9835 7.54858 39.0014 2.98125 39Z" fill="#FBBC1E" />
                        </svg>
                        <h4 className='text-white text-xl'>(714) 422-3193</h4>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-y-4'>
                        <MailIcon />
                        <h4 className='text-white text-xl'>info@routepackers.com</h4>
                    </div>
                </div>
                <div className='bg-gray-rp lg:mx-0 mx-4 rounded-xl grid grid-cols-1 lg:grid-cols-1 gap-x-10 p-8 w-full lg:w-[490px]'>
                    <div className='flex flex-col justify-start items-start gap-y-1 my-2'>
                        <h3 className='text-white text-xl font-semibold'>Full Name *</h3>
                        <input onChange={(e) => {
                            handleChange(e)
                        }} type="text" name='fullName' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='Kevin' />
                    </div>
                    <div className='flex flex-col justify-start items-start gap-y-1 my-2'>
                        <h3 className='text-white text-xl font-semibold'>Email *</h3>
                        <input onChange={(e) => {
                            handleChange(e)
                        }} type="text" name='email' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='sample@test.com' />
                    </div>
                    <div className='flex flex-col justify-start items-start gap-y-1 my-2'>
                        <h3 className='text-white text-xl font-semibold'>Phone *</h3>
                        <input onChange={(e) => {
                            handleChange(e)
                        }} type="text" name='phoneNumber' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='(212) 456 - 7890' />
                    </div>
                    <div className='flex flex-col justify-start items-start gap-y-1 my-2'>
                        <h3 className='text-white text-xl font-semibold'>Your Zip Code</h3>
                        <input type="text" onChange={(e) => {
                            handleChange(e)
                        }} name='zipCodeOrigin' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='Origin - 993351' />
                        <input type="text" onChange={(e) => {
                            handleChange(e)
                        }} name='zipCodeDest' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='Destination - 993351' />
                    </div>
                    <div className='flex flex-col justify-start items-start gap-y-1 my-2'>
                        <h3 className='text-white text-xl font-semibold'>Car Brand / Car Model / Production Year  *</h3>
                        <input type="text" onChange={(e) => {
                            handleChange(e)
                        }} name='carBrand' className='rounded-xl border-2 border-gray-400 text-white bg-transparent p-2 w-full' placeholder='BMW - 530 i - 2019' />
                    </div>
                    <div className='w-full flex justify-end items-end py-3'>
                        <button onClick={() => {
                            submitHandler()
                        }} className='bg-blue-rp w-full py-2 rounded-lg'>Submit Request</button>
                    </div>
                </div>
            </div>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  gtag('event', 'conversion', {'send_to': 'AW-11298620243/r8NcCMX6vNAYENOGzYsq'});
                `}
            </Script>
        </div>
    )
}

export default ContactUs