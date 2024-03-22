import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function fetchBlogs(id: number) {
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        }
    }

    try {
        const res = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`, options);
        const blogs = await res.json();
        return blogs;
    } catch (error) {
        console.error(error);
    }
}



const page = async ({ params }: any) => {
    const blog = await fetchBlogs(params.id);
    const imgUrl = "http://localhost:1337" + blog.data.attributes.img.data.attributes.url;


    return (
        <div className='max-w-7xl mx-auto p-4'>
            <Link href='/'>{"< back to home"}</Link>
            <div className='relative w-full h-96 overflow-hidden rounded-lg mt-5'>
                <Image layout='fill' objectFit='cover' src={imgUrl} alt={blog.data.attributes.Title} />
            </div>
            <div className='mt-4'>
                <h1 className="text-3xl font-semibold">
                    {blog.data.attributes.Title}
                </h1>
                <p className='text-neutral-500 mt-2'>
                    {blog.data.attributes.Description}
                </p>
                <div className='mt-4 flex items-center text-neutral-400'>
                    <span className="text-sm">
                        Published on {" "}
                        {new Date(blog.data.attributes.publishedAt).toDateString()}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default page
