import React from 'react'
import Image from 'next/image'
import { CallUsIcons } from '@/Icons/CallUs'
import { CarIcon } from '@/Icons/CarIcon'
import { ArrivalIcon } from '@/Icons/ArrivalIcon'
import { Number1 } from '@/Icons/Number1'
import Link from 'next/link'

const HowItWorks = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full gap-y-10'>
            <div className='flex flex-col justify-center items-center gap-y-8'>
                <h1 className='lg:text-6xl text-2xl text-center text-white'>
                    We Provide Full <br /> Asisstance In Shipping
                </h1>
                <p className='text-gray-400 text-center'>
                Got questions or ready to book your car transportation service? Our friendly and knowledgeable team is here to assist you. Give us a call today to speak with one of our experts. We are available from 7 days a week to provide personalized assistance and address any concerns you may have. Experience exceptional customer service and let RoutePackers take care of your car transport needs. Call us now!
                </p>
            </div>
            <div className='flex lg:flex-row flex-col justify-start items-start lg:gap-y-0 gap-y-4 lg:justify-center lg:items-center gap-x-12 w-full'>
                <div className='flex justify-center items-center gap-x-6'>
                    <CallUsIcons />
                    <h3 className='text-xl text-white'>Call Us</h3>
                </div>
                <svg className='hidden lg:block' width="152" height="2" viewBox="0 0 152 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="152" y2="1" stroke="#F7F7F7" stroke-opacity="0.3" stroke-width="2" stroke-dasharray="8 8" />
                </svg>
                <div className='flex justify-center items-center gap-x-6'>
                    <ArrivalIcon  />
                    <h3 className='text-xl text-white'>Consignment Booking</h3>
                </div>
                <svg className='hidden lg:block' width="152" height="2" viewBox="0 0 152 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="152" y2="1" stroke="#F7F7F7" stroke-opacity="0.3" stroke-width="2" stroke-dasharray="8 8" />
                </svg>
                <div className='flex justify-center items-center gap-x-6'>
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="54" height="54" rx="12" fill="#F7F7F7" fill-opacity="0.12" />
                        <g clip-path="url(#clip0_439_159)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3143 26.2001C9.81613 24.8828 10.103 23.4146 12.6118 23.5683L13.1743 24.661L14.3324 20.9247C14.7873 19.4538 15.545 18.1206 17.0305 18.1206H28.5699L28.5686 18.1709C28.5566 18.6566 28.5553 19.13 28.5639 19.5909H17.5219C16.391 19.5909 15.8113 20.6085 15.4627 21.7274L14.3756 25.485H29.4246C29.7081 26.4061 30.0581 27.2473 30.4718 28.0142C31.875 30.6171 33.9515 32.3264 36.5539 33.3137L37.8469 33.3054L37.9113 33.2799C37.8794 33.9634 37.8323 34.7212 37.7825 35.5707V37.1236C37.7825 37.6052 37.4026 38 36.9384 38H33.3366C32.8724 38 32.4925 37.6052 32.4925 37.1236V36.4209H15.47V37.1236C15.47 37.6052 15.0901 38 14.6259 38H11.0241C10.5599 38 10.18 37.6052 10.18 37.1236V35.1057C10.18 35.0588 10.1847 35.014 10.1893 34.9692C9.9164 31.3405 9.53124 28.07 12.3143 26.2001ZM35.0578 23.2017C35.5041 23.4684 35.7943 23.6902 36.1396 24.085C37.0367 22.5879 38.0096 21.7584 39.2746 20.5809L39.3981 20.5313H40.7834C38.9266 22.6712 37.4869 24.435 36.198 27.0145C35.5273 25.5256 34.929 24.4984 33.5909 23.5455L35.0578 23.2017ZM43.9901 18.1854C44.1827 25.8046 41.5809 29.8833 37.1888 31.5465L37.1868 31.5451L37.1855 31.5465C32.7934 29.8833 30.1909 25.8046 30.3841 18.1854C32.7548 18.3149 35.3586 17.637 37.1855 16C39.2447 17.6452 41.4003 18.3273 43.9901 18.1854ZM42.7417 19.2099C42.8997 25.4319 40.7747 28.7624 37.1881 30.1203L37.1868 30.1196L37.1861 30.1203C33.5989 28.7624 31.4745 25.4319 31.6319 19.2099C33.5677 19.3167 35.694 18.7621 37.1861 17.4255C38.8675 18.7696 40.6273 19.3263 42.7417 19.2099ZM20.2393 33.3991H27.6721C27.7631 33.3991 27.8368 33.4749 27.8368 33.5686V34.7977C27.8368 34.8914 27.7631 34.9679 27.6721 34.9679H20.2393C20.1489 34.9679 20.0752 34.8914 20.0752 34.7977V33.5686C20.0752 33.4749 20.1489 33.3991 20.2393 33.3991ZM16.9123 30.5027L13.7135 30.0852C12.9585 29.9977 12.7553 30.3284 13.0129 31.0029L13.3582 31.8744C13.4698 32.0983 13.6179 32.2616 13.7905 32.3746C13.9931 32.5048 14.2368 32.5682 14.5077 32.5799L17.3605 32.6033C18.0498 32.6013 18.348 32.3154 18.1315 31.6595C17.9542 31.0435 17.5491 30.6563 16.9123 30.5027Z" fill="#FBBC1E" />
                        </g>
                        <defs>
                            <clipPath id="clip0_439_159">
                                <rect width="34" height="22" fill="white" transform="translate(10 16)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h3 className='text-xl text-white'>Delivery On Time</h3>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col px-4 justify-between items-center gap-x-16 my-10'>
                <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-8 lg:w-5/12 w-full '>
                    <Number1 />
                    <h1 className='text-6xl font-bold text-white'>Call Us</h1>
                    <p className='text-gray-400 text-lg'>Customer satisfaction is our top priority at RoutePackers, and we believe in providing personalized assistance every step of the way. Have questions about our car transportation services? Ready to book your vehicle transport? Our dedicated team of experts is just a phone call away</p>
                    <p className='text-gray-400 text-lg'>Give us a ring at to speak directly with one of our friendly and knowledgeable representatives. Whether you are looking for detailed information about our services, need help choosing the right transport option for your vehicle, or want to discuss a customized transport plan, we are here to assist you</p>
                    <p className='text-gray-400 text-lg'>When you call RoutePackers, you can expect attentive service and prompt responses. We take the time to listen to your unique needs and tailor our solutions accordingly. Whether you require transport for a single car or an entire fleet, we will work closely with you to understand your requirements and provide a tailored quote that fits your budget</p>
                    <Link href={'tel: +17144223193'} className="bg-blue-rp text-xl rounded-3xl text-white animate-pulse py-4 px-8 my-2">
                        Call Us
                    </Link>
                </div>
                <Image src={'/call_us_bus.png'} alt={'bus-call-us'} width={546} height={600} />
            </div>
        </div>
    )
}

export default HowItWorks
