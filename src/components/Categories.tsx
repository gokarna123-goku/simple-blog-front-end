import React from 'react'
import Category from './Category'

const Categories = ({ categories }: any) => {
    return (
        <div className='flex gap-6 mb-8'>
            {/* {categories.map((category: any) => (
                
            ))} */}
            {categories?.data?.map((category: any) => (
                <div key={category.id} className="">
                    <Category category={category} />
                </div>
            ))}
        </div>
    )
}

export default Categories
