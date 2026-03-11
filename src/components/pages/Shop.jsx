import React, { useState } from 'react'
import Container from '../Container'
import Image from '../Image'
import shop1 from '../../assets/shop1.png'
import shop2 from '../../assets/shop2.png'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import { IoShareSocialOutline } from 'react-icons/io5'

const Shop = () => {
        const [ count , setCount ] = useState(0)

    const handleIncrement = ()=>{
        setCount(count + 1)
    }

    const handleDecrement = ()=>{
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return(
    <>
        <section id='shop'>
            <div className="pt-12.5 pb-25">
                <Container>
                    <div className="flex gap-x-15">
                        {/* left side */}
                        <div className="left md:w-[810px]">
                            <div className="flex gap-x-2.5">
                                <div className="flex flex-col gap-y-2.5">
                                    <Image imgSrc={shop1} />
                                    <Image imgSrc={shop1} />
                                    <Image imgSrc={shop1} />
                                    <Image imgSrc={shop1} />
                                </div>
                                <div className="">
                                    <Image imgSrc={shop2} />
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="right md:w-[540px]">
                            <div className="flex justify-between">
                                <p className='text-[#222222] font-Jost font-medium text-[14px]'>HOME / THE SHOP</p>
                                <div className="flex gap-x-7">
                                    <div className="flex gap-x-2 items-center cursor-pointer">
                                        <MdKeyboardArrowLeft />
                                        <p className='text-[#222222] font-Jost font-medium text-[14px]'>PREV</p>
                                    </div>
                                    <div className="flex gap-x-2 items-center cursor-pointer">
                                        <p className='text-[#222222] font-Jost font-medium text-[14px]'>NEXT</p>
                                        <MdKeyboardArrowRight />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className='text-[26px] font-Jost text-[#222222]'>Lightweight Puffer Jacket With a Hood</h3>
                                <h4 className='pt-[7px] text-[#222222] font-medium font-Jost text-[22px]'>$449</h4>
                                <p className='pt-[25px] font-Jost text-[14px] text-[#222222]'>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</p>
                            </div>
                            <div className="flex items-center gap-x-5 mt-[35px]">
                                <div className="flex items-center justify-between border-2 border-[#E4E4E4] gap-x-5 pt-5 pb-4 pr-[18px] pl-[21px]">
                                    <button onClick={handleDecrement} className='text-[#767676] font-Jost text-base cursor-pointer'>-</button>
                                    <p className='text-[#767676] font-Jost text-base leading-6'>{count}</p>
                                    <button onClick={handleIncrement} className='text-[#767676] font-Jost text-base cursor-pointer'>+</button>
                                </div>
                                <div className="btn">
                                    <button className="px-[95px] pt-[21px] pb-[15px] bg-[#222222] border-2 border-[#222222] cursor-pointer text-white text-[14px] font-Jost uppercase leading-6">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="mt-[35px]">
                                <div className="flex gap-x-[31px] items-center">
                                    <div className="gap-x-2 flex items-center beforeAfterBlack">
                                        <FaRegHeart size={16}/>
                                        <h4 className='text-[#222222] font-Jost font-medium text-[13px]'>ADD TO WISHLIST</h4>
                                    </div>
                                    <div className="gap-x-2 flex items-center beforeAfterBlack">
                                        <IoShareSocialOutline size={16}/>
                                        <h4 className='text-[#222222] font-Jost font-medium text-[13px]'>SHARE</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <p className='text-[13px] text-[#767676] font-Jost leading-6'>SKU: <span className='text-[13px] text-[#222222] font-Jost'>N/A</span></p>
                                <p className='text-[13px] text-[#767676] font-Jost leading-6'>Categories: <span className='text-[13px] text-[#222222] font-Jost'>Casual & Urban Wear, Jackets, Men</span></p>
                                <p className='text-[13px] text-[#767676] font-Jost leading-6'>Tags: <span className='text-[13px] text-[#222222] font-Jost'>biker, black, bomber, leather</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-25">
                        <div className="btn flex justify-center gap-x-[70px] ">
                            <button className='font-Jost text-[#767676] text-base font-medium hover:text-[#222222] duration-300 cursor-pointer beforeAfterallcolor'>DESCRIPTION</button>
                            <button className='font-Jost text-[#767676] text-base font-medium hover:text-[#222222] duration-300 cursor-pointer beforeAfterallcolor'>ADDITIONAL INFORMATION</button>
                            <button className='font-Jost text-[#767676] text-base font-medium hover:text-[#222222] duration-300 cursor-pointer beforeAfterallcolor'>REVIEWS (3)</button>
                        </div>
                        <div className="mt-12.5 w-[930px] mx-auto">
                            <h4 className='text-[#222222] text-base font-Jost font-medium'>Sed do eiusmod tempor incididunt ut labore</h4>
                            <div className="pt-10">
                                <p className='text-[14px] font-Jost text-[#222222] leading-7.5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    </>
    )
}

export default Shop