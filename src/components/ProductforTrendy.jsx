import React from 'react'
import Image from './Image'
import { IoMdHeart } from 'react-icons/io'

const ProductforTrendy = ({className , productImg , productType , productTitle , productPrice , offerPrice}) => {
    return (
        <>
        <div className={`${className}`}>
            <Image imgSrc={productImg}/>
            <div className="mt-3.5">
                <div className="flex justify-between">
                    <p className='text-[14px] font-Jost text-[#767676]'>{productType}</p>
                    <IoMdHeart />
                </div>
                <div className="mt-1.5">
                    <h4 className='text-[#222222] font-Jost text-base'>{productTitle}</h4>
                </div>
                <div className="flex gap-x-2">
                    <p className='text-[#222222] font-Jost text-base'>{productPrice}</p>
                    <p className='text-[#D6001C] font-Jost text-base'>{offerPrice}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductforTrendy