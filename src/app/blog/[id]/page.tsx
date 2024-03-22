import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-3xl mx-auto p-4'>
            <Link href='/'>{"< back to home"}</Link>
            <div className='relative w-full h-96 overflow-hidden rounded-lg mt-5'>
                <Image layout='fill' objectFit='cover' src={''} alt='' />
            </div>
            <div className='mt-4'>
                <h1 className="text-3xl font-semibold">
                    {"Title of Blog"}
                </h1>
                <p className='text-neutral-500 mt-2'>
                    {"blog description"}
                </p>
                <div className='mt-4 flex items-center text-neutral-400'>
                    <span className="text-sm">
                        Published on {" "}
                        {"2022-01-01"}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default page
