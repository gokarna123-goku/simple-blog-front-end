"use client"

// import { CategoryContext } from '@/context/CategoryContext'
// import React, { useContext } from 'react'

const Category = ({ category }: any) => {
    // const { cat, changeCat } = useContext(CategoryContext)
    return (
        <div onClick={() => { }}
            className='bg-[#af8533] px-4 py-2 rounded-lg shadow-md cursor-pointer'>
            {category.attributes.Title}
        </div>
    )
}

export default Category
