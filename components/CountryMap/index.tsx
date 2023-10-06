import React from 'react'
import Image from 'next/image'

const CountryMap = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-8 w-full'>
            <h1 className='text-white text-6xl text-center'>We Spread Over 30+ <br /> States</h1>
            <Image src={'/Map.png'} alt={'map'} width={1200} height={570}/>
        </div>
    )
}

export default CountryMap
