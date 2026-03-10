import React from 'react'
import Container from '../Container'
import Image from '../Image'
import shop1 from '../../assets/shop1.png'
import shop2 from '../../assets/shop2.png'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Shop = () => (
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
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    </>
)

export default Shop