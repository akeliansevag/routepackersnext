import FAQDropDown from "@/components/FAQ";
import React from "react";

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/faq?limit=50`, {
        cache: "no-store",
    }
    );

    return res.json();
}

export default async function FAQ() {
    const data = await getData();
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <section className={`lg:w-[1200px] w-[380px] flex flex-col justify-center items-center gap-y-8 lg:p-0 px-6`}>
                <h1 className="lg:text-5xl text-xl font-bold text-white">Frequently Asked Questions</h1>
                <h4 className="text-gray-400 font-semibold lg:text-xl text-sm">Have questions? We are here to help you</h4>
                {
                    data.docs.map((item: any, index: React.Key) => {
                        return (
                            <FAQDropDown key={index} title={item.question} desc={item.answer} />
                        )
                    })
                }
            </section>
        </div>
    )
}