import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const Done = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[800px]'>
            <div className='flex flex-col justify-center items-center gap-y-8 w-full'>
                <Image width={239} height={239} src={'/done.png'} alt={'done'} />
                <div className='text-center w-full'>
                    <div className='text-white text-2xl flex justify-center items-center gap-x-2'> <h1 className='text-green-400'>Successfully</h1> Submited</div>
                    <h1 className='text-white text-2xl'>An Agent will call you shortly</h1>
                </div>
                    <Link href={'/'} className="gradient-button gradient-button-2 w-96 my-20">Go to homepage</Link>
            </div>
        </div>
    )
}

export default Done;
