import React from 'react'
import CardSlider from '../CardSlider'

const Services = () => {
  return (
    <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center w-full'>
      <h3 className='text-xl text-white'>Our Services</h3>
      <div className='flex lg:flex-row flex-col-reverse justify-between items-center gap-x-8 my-4 lg:my-0 gap-y-2'>
        <p className='text-gray-400 text-sm lg:text-left text-center lg:text-xl lg:w-1/2'>Welcome to RoutePackers, your trusted partner for car transportation across the United States. We offer two reliable and convenient services to meet your specific needs:</p>
        <h1 className='font-bold text-white lg:text-6xl text-3xl text-center lg:text-left flex justify-between items-center gap-x-4'>All Of Our Solution <br /> For Your Business</h1>
      </div>
      <CardSlider />
    </div>
  )
}

export default Services
