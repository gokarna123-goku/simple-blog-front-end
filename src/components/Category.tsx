"use client"

import React from 'react'

const Category = ({ category }: any) => {
    return (
        <div onClick={() => { }} className='bg-[#af8533] px-4 py-2 rounded-lg shadow-md cursor-pointer'>
            {category.attributes.Title}
        </div>
    )
}

export default Category
