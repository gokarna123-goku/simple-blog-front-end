import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ blog }: any) => {

    // truncate the description to 100 characters

    // One method
    // const truncate = (str: string) => {
    //     if (str.length > 100) {
    //         return str.substring(0, 100) + '...'
    //     } else {
    //         return str
    //     }
    // }


    // Another method
    // const truncateDescription = blog.attributes.Description.length > 100 ? blog.attributes.Description.substring(0, 100) + '...' : blog.attributes.Description;


    // NOTE:- but if you are using tailwind, you can use tailwind class to truncate the description


    const imgUrl = "http://localhost:1337" + blog.attributes.img.data.attributes.url
    // const imgUrl = "http://localhost:1337" + blog.attributes.img.data.attributes.url

    return (
        <div className='rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-neutral-600 cursor-pointer bg-neutral-950'>
            <Link href={`blog/${blog.id}`}>
                <div className='relative w-full h-1 pb-[100%]'>
                    <Image layout='fill' objectFit='cover' src={imgUrl} alt='' className='rounded-t-lg' />
                </div>
                <div className="p-2">
                    <h2 className="text-xl font-semibold mb-2 text-neutral-200 overflow-ellipsis line-clamp-2">
                        {blog.attributes.Title}
                    </h2>
                    <p className="text-sm text-neutral-500 line-clamp-3 overflow-ellipsis">
                        {blog.attributes.Description}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard
