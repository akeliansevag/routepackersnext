'use client'
import { CustomRenderers, Serialize } from '@/components/RichTextGenerator'
import axios from 'axios'
import Image from 'next/image';
import qs from 'qs';
import React, { useEffect, useState } from 'react'

const BlogContent: React.FC<{
    slug: any;
    customRenderers?: CustomRenderers
}> = ({ slug, customRenderers }) => {
    const [posts, setPosts] = useState<any>([])
    const getData = () => {
        const query = {
            slug: { in: slug.params.slug }
        };
        const stringifiedQuery = qs.stringify(
            {
                where: query,
            },
            { addQueryPrefix: true }
        );
        axios.get(`https://panel.routepackers.com/api/blog${stringifiedQuery}`).then((response: any) => {
            setPosts(response?.data?.docs[0]);
        });
    }

    useEffect(() => {
        getData()
    }, [])

    if (!posts) {
        return (
            <div>
                there is no data
            </div>
        )
    } else {
        return (
            <div className='blogContentArea w-[1100px] flex flex-col justify-center items-center text-white'>
                <div className='flex flex-col justify-center items-center text-center w-full gap-y-6 my-8'>
                    <div className='mb-2'>
                        <h1>{posts?.title}</h1>
                        <p className='-mt-2'>{posts?.abstract}</p>
                        {/* <div className='flex justify-center items-center w-full mt-6 text-gray-600 gap-x-2'>
                            <p className='text-lg font-medium'>
                                Published on:
                            </p>
                            {posts?.author?.updatedAt}
                        </div> */}
                        {/* {
                            posts?.tags?.map((tag: any, tagId: any) => {
                                return (
                                    <button className='px-3 py-2 bg-gray-200 rounded-md mx-2' key={tagId}>
                                       #{tag.name}
                                    </button>
                                )
                            })
                        } */}
                    </div>
                    <Image className='rounded-md' src={posts?.url} alt={'blog-post'} width={1000} height={400} />
                </div>
                <div className=' w-10/12 justify-center items-center text-white'>
                    <Serialize content={posts?.content} customRenderers={customRenderers} />
                </div>
            </div>
        )
    }

}

export default BlogContent