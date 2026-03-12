import React, { useState } from 'react'
import Image from './Image'
import { IoMdHeart } from 'react-icons/io'

const ProductforTrendy = ({className , productImg , imgClassName, productType , productTitle , productPrice , offerPrice}) => {
    
    const [isLiked, setIsLiked] = useState(false);

    return (
        <>
        <div className={`${className}`}>
            <Image imgSrc={productImg} className={`w-full ${imgClassName}`}/>
            <div className="mt-3.5">
                <div className="flex justify-between items-center">
                    <p className='text-[14px] font-Jost text-[#767676]'>{productType}</p>
                    <IoMdHeart onClick={() => setIsLiked(!isLiked)} className={`cursor-pointer transition-colors duration-300 ${isLiked ? 'text-[#D6001C]' : 'text-[#767676]'}`} />
                </div>
                <div className="mt-1.5">
                    <h4 className='text-[#222222] font-Jost text-base'>{productTitle}</h4>
                </div>
                <div className="flex gap-x-2 mt-1">
                    {offerPrice ? (
                        <>
                        <p className='text-[#767676] font-Jost text-base line-through'>{productPrice}</p>
                        <p className='text-[#D6001C] font-Jost text-base'>{offerPrice}</p>
                        </>
                    ) 
                    : 
                    (
                        <p className='text-[#767676] font-Jost text-base'>{productPrice}</p>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductforTrendy