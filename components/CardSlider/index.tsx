"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { ServicesData } from '@/utils/services';

const CardSlider = () => {
    return (
        <div className='bg-black-rp rounded-xl flex lg:flex-row flex-col gap-y-4 justify-center items-center gap-x-16 mt-8 p-4 w-full'>
                {
                    ServicesData.map((item, index) => {
                        return (
                            <div key={index} className="bg-gray-rp rounded-xl px-8 py-6 w-full h-full">
                                <div className='flex flex-col justify-start items-start w-full gap-y-4'>
                                    <div className='flex justify-start items-center gap-x-4'>
                                        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="38" cy="38" r="38" fill="#16161E" />
                                            <mask id="mask0_439_120" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="20" y="20" width="36" height="36">
                                                <path d="M48.8334 41.66V47.5058C48.8334 50.54 46.4075 53 43.4142 53C40.4209 53 37.995 50.54 37.995 47.5058L38.005 28.9525C38.005 25.665 35.5792 23 32.5859 23C29.5934 23 27.1667 25.665 27.1667 28.9525V41.6608" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M53.8334 43.8333L48.8334 38.8333L43.8334 43.8333" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M53.8333 26.9392C53.8333 30.6517 48.8333 33.8333 48.8333 33.8333C48.8333 33.8333 43.8333 30.6517 43.8333 26.9392C43.8333 25.6733 44.36 24.46 45.2975 23.5642C46.2533 22.6621 47.5191 22.1617 48.8333 22.1667C50.1475 22.1619 51.4133 22.6622 52.3692 23.5642C52.8293 23.9981 53.1963 24.521 53.448 25.1012C53.6997 25.6814 53.8308 26.3067 53.8333 26.9392ZM32.1667 46.9392C32.1667 50.6517 27.1667 53.8333 27.1667 53.8333C27.1667 53.8333 22.1667 50.6517 22.1667 46.9392C22.1667 45.6733 22.6934 44.46 23.6309 43.5642C24.5866 42.6621 25.8525 42.1617 27.1667 42.1667C28.4809 42.1619 29.7467 42.6622 30.7025 43.5642C31.1626 43.9981 31.5296 44.521 31.7813 45.1012C32.033 45.6814 32.1642 46.3067 32.1667 46.9392Z" fill="#555555" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M48.8334 28.8333C49.7538 28.8333 50.5 28.0871 50.5 27.1667C50.5 26.2462 49.7538 25.5 48.8334 25.5C47.9129 25.5 47.1667 26.2462 47.1667 27.1667C47.1667 28.0871 47.9129 28.8333 48.8334 28.8333Z" fill="white" />
                                                <path d="M27.1667 48.8333C28.0871 48.8333 28.8333 48.0871 28.8333 47.1667C28.8333 46.2462 28.0871 45.5 27.1667 45.5C26.2462 45.5 25.5 46.2462 25.5 47.1667C25.5 48.0871 26.2462 48.8333 27.1667 48.8333Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_439_120)">
                                                <path d="M18 18H58V58H18V18Z" fill="#FBBC1E" />
                                            </g>
                                        </svg>
                                        <h2 className='text-white text-lg font-semibold'>
                                            {item?.title}
                                        </h2>
                                    </div>
                                    <div className='py-2 text-gray-400 text-lg'>
                                        {item?.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default CardSlider;
