import React from 'react'
import BlogCard from './BlogCard'

const Blogs = ({ blogs }: any) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {blogs?.data?.map((blog: any) => (
                <div key={blog.id}>
                    <BlogCard blog={blog} />
                </div>
            ))}
        </div>
    )
}

export default Blogs
