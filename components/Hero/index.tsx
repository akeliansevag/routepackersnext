'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  highYellow: string;
  highWhite: string;
  downYellow: string;
  downWhite: string;
}

const HeroBox: React.FC<HeroProps> = (props) => {
  return (
    <div className='flex flex-col justify-start items-start w-full lg:p-0 px-3'>
      <div className='font-bold text-base lg:text-5xl text-white flex justify-between items-center gap-x-1 lg:gap-x-4'>
        <h1 className='text-yellow-rp'>
          {props.highYellow}
        </h1>
        {props.highWhite}
        <div>
          {props.downWhite}
        </div>
        <h1 className='text-yellow-rp'>
          {props.downYellow}
        </h1>
      </div>
      <div className='flex lg:flex-row flex-col-reverse w-full justify-between items-center gap-x-8 gap-y-4 lg:gap-y-0'>
        <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center gap-y-6'>
          <p className='text-gray-400 lg:text-xl text-sm'>
            Your Trusted Car Transportation Partner. With years of experience, we deliver reliable and secure vehicle transport services across the USA. From open carriers for cost-effective solutions to closed carriers for added protection, we ensure your vehicle arrives safely. Trust RoutePackers for hassle-free car transportation. Contact us today for a quote!
          </p>
          {/* <a href={'tel: +17144223193'} className="bg-blue-rp text-xl rounded-3xl text-white py-4 px-12">
            Call Us
          </a> */}
        </div>
        <Image src={'/hero-trucks.jpg'} width={600} height={400} alt='trucks' />
      </div>
      <div className='w-full flex justify-center items-center lg:my-20 my-2'>
        <Link href={'contact-us'} className="gradient-button gradient-button-2 w-96 my-20">Get Quote</Link>
      </div>
      <div className='w-full flex justify-center items-center'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AFriSXKzgH8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default HeroBox