'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const StatesList = () => {
  const [states, setStates] = useState(Array)

  function getStates() {
    axios.get('https://panel.routepackers.com/api/states?limit=50').then((response: any) => {
      console.log(response)
      setStates(response?.data?.docs);
    });
  }

  useEffect(() => {
    getStates()
  }, [])


  return (
    <div className='flex flex-col justify-start items-start w-full gap-y-12'>
      <div className='flex lg:flex-row flex-col justify-between items-start lg:gap-y-0 gap-y-4 gap-x-8 h-full'>
        <h1 className='font-bold text-white text-5xl text-center lg:text-left flex justify-center items-center lg:justify-between lg:items-start gap-x-4 lg:w-1/2 w-full'>We Ship Everywhere <br />in the US </h1>
        <p className='text-gray-400 lg:text-left text-center text-xl w-full lg:w-1/2'>Nationwide Car Transportation Experts. We ship vehicles to every corner of the USA, providing reliable and efficient services wherever you need your car transported. Trust us to handle your vehicle transport needs, no matter the destination</p>
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-6 gap-x-8 w-full gap-y-4'>
        {
          states.map((items: any, id: any) => {
            return (
              <Link prefetch={false} href={`/states/${items.id}`} key={id} className='flex flex-col justify-center items-center gap-y-1'>
                <Image width={70} height={30} src={items.url} alt={'map'}  />
                <div className='bg-gray-rp rounded-2xl flex justify-center items-center lg:w-40 px-2 lg:px-0 py-1  lg:py-2'>
                  <h4 className='lg:text-sm text-xs text-yellow-rp font-semibold'>{items.name}</h4>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default StatesList
