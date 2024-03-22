import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div>
                <BlogCard />
            </div>
            <div>
                <BlogCard />
            </div>
            <div>
                <BlogCard />
            </div>
        </div>
    )
}

export default Blogs
