import React, { useState } from 'react'
import Image from './Image'
import { IoMdHeart } from 'react-icons/io'
import Button from './Button';
import { Link } from 'react-router-dom';

const ProductforTrendy = ({className , productImg , imgClassName, productType , productTitle , productPrice , offerPrice}) => {
    
    const [isLiked, setIsLiked] = useState(false);

    return (
        <>
        <div className={`${className}`}>
            <div className="img relative group overflow-hidden">
                <Image imgSrc={productImg} className={`w-full ${imgClassName}`}/>
                {/* add to cart */}
                <div className="relative px-2.5">
                    <Link to={'/shop'}>
                    <div className="absolute left-0 right-0 pb-2.5 pt-4 bottom-2.5 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center bg-white lg:w-[310px] mx-auto">
                        <Button btnText={'ADD TO CART'} className={'text-black text-sm font-Jost font-medium leading-6'}/>
                    </div>
                    </Link>
                </div>
            </div>
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