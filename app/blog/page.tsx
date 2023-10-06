import BlogPost from "@/components/BlogPost";
import React from "react";

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/blog`, {
        cache: "no-store",
      }
);

    return res.json();
}

export default async function Blog() {
    const data = await getData();
    return (
        <div className="flex flex-col justify-center items-center">
            <section className={`lg:w-[1200px] w-[390px] flex flex-col justify-center items-center py-10 gap-y-20 lg:px-0 px-4`}>
                <div className="flex flex-col justify-center items-center gap-y-6">
                    <h1 className="text-5xl text-white font-bold">Blog & News</h1>
                    <p className="text-xl text-gray-400">we provide best articles and news to help you stay updated about car transportation</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-20 gap-y-20">
                    {
                        data.docs.map((item: any, index: React.Key) => {
                            return (
                                <BlogPost key={index} title={item.title} abstract={item.abstract} imageURL={item.url} width={item.width} height={item.height} slug={item.slug} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
} 