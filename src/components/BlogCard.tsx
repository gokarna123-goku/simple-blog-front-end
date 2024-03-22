import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
    return (
        <div className='rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-neutral-600 cursor-pointer bg-neutral-950'>
            <Link href={'/blog/2'}>
                <div>
                    <Image layout='fill' objectFit='cover' src={''} alt='' className='rounded-t-lg' />
                </div>
                <div className="p-2">
                    <h2 className="text-xl font-semibold mb-2 text-neutral-800 overflow-ellipsis line-clamp-2">
                        Title of BLog
                    </h2>
                    <p className="text-sm text-neutral-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, odit.
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard
