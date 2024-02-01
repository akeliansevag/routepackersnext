'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <div className="px-20 py-6">
            <div className="lg:flex justify-between items-center border-2 border-white rounded-2xl px-8 py-4 w-full hidden ">
                <Link href={'/'}>
                    <Image src={"/routepackers.png"} alt={""} width={200} height={100} />
                </Link>
                <ul className="text-xl text-white flex justify-around items-center gap-x-9">
                    <Link className="hover:text-yellow-rp delay-150" href={'/'}>Home</Link>
                    {/* <Link className="hover:text-yellow-rp delay-100" href={'/'}>Services</Link> */}
                    <Link prefetch={false} className="hover:text-yellow-rp delay-150" href={'/about-us'}>About Us</Link>
                    <Link prefetch={false} className="hover:text-yellow-rp delay-easy" href={'/contact-us'}>Contact Us</Link>
                    <Link prefetch={false} className="hover:text-yellow-rp delay-easy" href={'/blog'}>Blog</Link>
                    <Link prefetch={false} className="hover:text-yellow-rp delay-150" href={'/faq'}>FAQ</Link>
                </ul>
                <Link href={'tel: +16265500468'} className="bg-blue-rp text-xl rounded-3xl text-white animate-pulse py-4 px-8">
                    (626) 550-0468
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center lg:hidden">
                <Image src={"/routepackers.png"} alt={""} width={150} height={50} />
                <ul className="text-sm text-white flex justify-center items-center gap-x-6 mt-6">
                    <Link prefetch={false} className="hover:text-yellow-rp delay-150" href={'/'}>Home</Link>
                    {/* <Link prefetch={false} className="hover:text-yellow-rp delay-100" href={'/'}>Services</Link> */}
                    <Link prefetch={false} className="hover:text-yellow-rp delay-150" href={'/about-us'}>About</Link>
                    <Link prefetch={false} className="hover:text-yellow-rp delay-easy" href={'/contact-us'}>Contact</Link>
                    <Link prefetch={false} className="hover:text-yellow-rp delay-easy" href={'/blog'}>Blog</Link>
                    <Link prefetch={false} className="hover:text-yellow-rp delay-150" href={'/faq'}>FAQ</Link>
                </ul>
            </div>
        </div>
    )
}
