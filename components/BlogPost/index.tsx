'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface BlogsProps {
    title: string;
    abstract: string;
    imageURL: string;
    width: number;
    height: number
    slug: string;
}

const BlogPost: React.FC<BlogsProps> = (props) => {
    
    return (
        <Link className="flex flex-col justify-start items-start w-full gap-y-9" href={"/blog/" + props?.slug}>
            <Image unoptimized={true} src={props.imageURL} width={props.width} height={props.height} alt={"blog"} />
            <div className='flex flex-col justify-start items-start w-full gap-y-4'>
                <h3 className='text-white text-xl font-semibold'>{props?.title}</h3>
                <p className='text-lg text-gray-400'>{props?.abstract}</p>
            </div>
            <Link href={"/blog/" + props?.slug} className="bg-blue-rp text-xl rounded-3xl text-white py-4 px-8">
                Read More
            </Link>
        </Link>
    )
}

export default BlogPost
