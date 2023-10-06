import BlogContent from '@/components/BlogContent'
import React from 'react'

const BlogPost = (slug: any) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <BlogContent slug={slug} />
    </div>
  )
}

export default BlogPost