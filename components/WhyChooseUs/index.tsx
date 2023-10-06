import AwardsIcon from '@/Icons/AwardsIcon'
import MoneyBagIcon from '@/Icons/MoneyBagIcon'
import TimeIcon from '@/Icons/TimeIcon'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start w-full gap-y-12'>
      <h3 className='text-xl text-white'>Why Choose Us</h3>
      <div className='w-full flex lg:flex-row flex-col px-4 lg:px-0 gap-y-3 lg:gap-y-0 lg:justify-between justify-center items-center lg:items-start lg:gap-x-8'>
        <h1 className='font-bold text-white text-2xl lg:text-5xl flex justify-center lg:justify-between items-center gap-x-4 w-full lg:text-left text-center'>All Of Our Solution For <br />Your Business</h1>
        <p className='text-gray-400 lg:text-xl text-sm lg:w-1/2 w-full'>Choose RoutePackers for reliable and secure car transportation. With expertise and personalized service, we ensure timely delivery and transparent pricing. Trust us for a worry-free experience nationwide</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-y-0 gap-y-4 lg:px-0 px-2 gap-x-8 w-full h-full lg:h-56'>
        <div className='bg-gray-rp lg:py-0 py-3 gap-y-4 rounded-2xl flex flex-col justify-center items-center w-full h-full'>
          <AwardsIcon />
          <h3 className='text-2xl text-white'>Safe Transport</h3>
        </div>
        <div className='bg-gray-rp lg:py-0 py-3 gap-y-4 rounded-2xl flex flex-col justify-center items-center w-full h-full '>
          <MoneyBagIcon />
          <h3 className='text-2xl text-white'>Low Fee</h3>
        </div>
        <div className='bg-gray-rp lg:py-0 py-3 gap-y-4 rounded-2xl flex flex-col justify-center items-center w-full h-full '>
          <TimeIcon />
          <h3 className='text-2xl text-white'>On Time</h3>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
