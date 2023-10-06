import QuoteForm from "@/components/QuoteForm";
import StatesPage from "@/components/StatesPage";
import React from "react";
import { Metadata } from 'next'

async function getData(id: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/states/${id}`, {
        cache: "no-store",
    }
    );

    return res.json();
}

 
export const metadata: Metadata = {
  title: '...',
  description: '...',
}
 
export default async function States({ params: { id } }: any) {
    const data = await getData(id);
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <section className={`lg:w-[1200px] w-[380px] flex lg:flex-row flex-col justify-start lg:justify-center items-start lg:gap-x-10 gap-y-8 lg:p-0 px-6`}>
                <StatesPage ImageURL={data?.url} title={data?.name} desc={data?.description} />
                <QuoteForm />
            </section>
        </div>
    )
}