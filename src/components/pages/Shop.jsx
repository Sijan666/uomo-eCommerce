import React, { useState } from 'react'
import Container from '../Container'
import Image from '../Image'
import shop1 from '../../assets/shop1.png'
import shop2 from '../../assets/shop2.png'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { IoShareSocialOutline } from 'react-icons/io5'
import Button from '../Button'

const Shop = () => {
    const [count, setCount] = useState(0)

    const [activeTab, setActiveTab] = useState('description')

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <section id='shop'>
                <div className="pt-12.5 pb-25">
                    <Container>
                        <div className="md:flex gap-x-15">
                            {/* left side */}
                            <div className="left md:w-[810px]">
                                <div className="md:flex gap-x-2.5">
                                    <div className="flex flex-wrap gap-x-5 justify-center md:justify-normal md:flex-nowrap mb-5 md:mb-0 md:flex-col gap-y-2.5">
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
                                <div className="flex justify-between mt-5 md:mt-0">
                                    <p className='text-[#222222] font-Jost font-medium text-[14px] '>HOME / THE SHOP</p>
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
                                <div className="flex flex-col md:flex-row gap-y-5 items-center gap-x-5 mt-[35px]">
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
                                <div className="mt-[35px] ">
                                    <div className="flex gap-x-[31px] items-center justify-center md:justify-normal">
                                        <div className="gap-x-2 flex items-center beforeAfterBlack">
                                            <FaRegHeart size={16} />
                                            <h4 className='text-[#222222] font-Jost font-medium text-[13px]'>ADD TO WISHLIST</h4>
                                        </div>
                                        <div className="gap-x-2 flex items-center beforeAfterBlack">
                                            <IoShareSocialOutline size={16} />
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

                        {/* Tabs Section */}
                        <div className="mt-25">
                            <div className="btn flex justify-center gap-x-5 md:gap-x-[70px]">
                                <button
                                    onClick={() => setActiveTab('description')}
                                    className={`font-Jost text-[12px] md:text-base font-medium duration-300 cursor-pointer beforeAfterallcolor ${activeTab === 'description' ? 'text-[#222222]' : 'text-[#767676] hover:text-[#222222]'}`}>
                                    DESCRIPTION
                                </button>
                                <button
                                    onClick={() => setActiveTab('additional')}
                                    className={`font-Jost text-[12px] md:text-base font-medium duration-300 cursor-pointer beforeAfterallcolor ${activeTab === 'additional' ? 'text-[#222222]' : 'text-[#767676] hover:text-[#222222]'}`}>
                                    ADDITIONAL INFORMATION
                                </button>
                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`font-Jost text-[12px] md:text-base font-medium duration-300 cursor-pointer beforeAfterallcolor ${activeTab === 'reviews' ? 'text-[#222222]' : 'text-[#767676] hover:text-[#222222]'}`}>
                                    REVIEWS (3)
                                </button>
                            </div>

                            {/* desc  */}
                            {activeTab === 'description' && (
                                <div className="md:w-[930px] mx-auto">
                                    <div className="mt-12.5">
                                        <h4 className='text-[#222222] text-base font-Jost font-medium'>Sed do eiusmod tempor incididunt ut labore</h4>
                                        <div className="pt-10">
                                            <p className='text-[14px] font-Jost text-[#222222] leading-7.5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row items-start md:items-center gap-[30px] md:gap-[151px] mt-[39px]'>
                                        <div>
                                            <h3 className='text-[15px] md:text-[16px] font-medium text-[#222222] font-Jost leading-[30px] mb-3'>Why choose product?</h3>
                                            <ul className='list-disc list-inside text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px]'>
                                                <li>Creat by cotton fibric with soft and smooth</li>
                                                <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
                                                <li>Downloadable/Digital Products, Virtual Products</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className='text-[15px] md:text-[16px] font-medium text-[#222222] font-Jost leading-[30px] mb-3'>Sample Number List</h3>
                                            <ol className='list-decimal list-inside text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px]'>
                                                <li>Create Store-specific attrittbutes on the fly</li>
                                                <li>Simple, Configurable (e.g. size, color, etc.), bundled</li>
                                                <li>Downloadable/Digital Products, Virtual Products</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="mt-[37px]">
                                        <h3 className='text-[15px] md:text-[16px] font-medium text-[#222222] font-Jost leading-[30px]'>Lining</h3>
                                        <p className='text-[13px] md:text-[14px] text-[#222222] font-Jost leading-[30px]'>100% Polyester, Main: 100% Polyester.</p>
                                    </div>
                                </div>
                            )}

                            {/* additional */}
                            {activeTab === 'additional' && (
                                <div className="md:w-[930px] mx-auto mt-20">
                                    <div className="flex">
                                        <ul className='flex flex-col gap-y-[31px]'>
                                            <div className="flex items-center gap-x-[58px]">
                                                <li className='text-base font-Jost font-medium text-[#222222] w-[82px]'>Weight</li>
                                                <li className='text-[14px] font-Jost text-[#222222]'>1.25 kg</li>
                                            </div>
                                            <div className="flex items-center gap-x-[58px]">
                                                <li className='text-base font-Jost font-medium text-[#222222] w-[82px]'>Dimensions</li>
                                                <li className='text-[14px] font-Jost text-[#222222]'>90 x 60 x 90 cm</li>
                                            </div>
                                            <div className="flex items-center gap-x-[58px]">
                                                <li className='text-base font-Jost font-medium text-[#222222] w-[82px]'>Size</li>
                                                <li className='text-[14px] font-Jost text-[#222222]'>XS, S, M, L, XL</li>
                                            </div>
                                            <div className="flex items-center gap-x-[58px]">
                                                <li className='text-base font-Jost font-medium text-[#222222] w-[82px]'>Color</li>
                                                <li className='text-[14px] font-Jost text-[#222222]'>Black, Orange, White</li>
                                            </div>
                                            <div className="flex items-center gap-x-[58px]">
                                                <li className='text-base font-Jost font-medium text-[#222222] w-[82px]'>Storage</li>
                                                <li className='text-[14px] font-Jost text-[#222222]'>Relaxed fit shirt-style dress with a rugged</li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* reviews */}
                            {activeTab === 'reviews' && (
                                <div className="md:w-[930px] mx-auto mt-20">
                                    <div>
                                        <h2 className='font-Jost font-medium text-[16px] md:text-[18px] text-[#222222] mt-[50px] mb-[26px]'>Reviews</h2>
                                        {/* Review 1 */}
                                        <div className='flex gap-4 pb-[23px] border-b border-[#E4E4E4] mb-10'>
                                            <div className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-[#E4E4E4] shrink-0'></div>
                                            <div className='flex-1'>
                                                <div className='flex justify-between items-start'>
                                                    <div>
                                                        <p className='font-Jost text-[13px] md:text-[14px] text-[#222222]'>Janice Miller</p>
                                                        <p className='font-Jost text-[13px] md:text-[14px] text-[#767676]'>April 06, 2020</p>
                                                    </div>
                                                    <div className='flex gap-1 text-[#EEBA36]'>
                                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                                    </div>
                                                </div>
                                                <p className='font-Jost text-[13px] md:text-[14px] text-[#767676] leading-6 mt-5'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est...</p>
                                            </div>
                                        </div>
                                        {/* Review 2 */}
                                        <div className='flex gap-4'>
                                            <div className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-[#E4E4E4] shrink-0'></div>
                                            <div className='flex-1'>
                                                <div className='flex justify-between items-start'>
                                                    <div>
                                                        <p className='font-Jost font-medium text-[13px] md:text-[14px] text-[#222222]'>Benjam Porter</p>
                                                        <p className='font-Jost text-[13px] md:text-[14px] text-[#767676]'>April 06, 2020</p>
                                                    </div>
                                                    <div className='flex gap-1 text-[#EEBA36]'>
                                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                                    </div>
                                                </div>
                                                <p className='font-Jost text-[13px] md:text-[14px] text-[#767676] leading-6 mt-5'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est...</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Review Form */}
                                    <div className='mt-[54px]'>
                                        <h2 className='font-Jost font-medium text-[16px] md:text-[18px] text-[#222222] mb-1'>Be the first to review "Message Cotton T-Shirt"</h2>
                                        <p className='font-Jost text-[13px] md:text-[14px] text-[#222222] mb-[30px]'>Your email address will not be published. Required fields are marked *</p>

                                        <div className='flex items-center gap-[18px] mb-[26px]'>
                                            <p className='font-Jost text-[13px] md:text-[14px] text-[#222222] leading-6'>Your rating *</p>
                                            <div className='flex gap-1 text-[#EEBA36]'>
                                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                            </div>
                                        </div>
                                        <textarea
                                            placeholder='Your Review'
                                            className='w-full border border-[#E4E4E4] p-4 font-Jost text-[13px] md:text-[14px] text-[#767676] h-[213px] resize-none outline-[#222222] mb-[30px]'
                                        />
                                        <div className='relative border border-[#E4E4E4] mb-[30px]'>
                                            <span className='absolute -top-2.5 left-3 bg-white px-1 font-Jost text-[13px] md:text-[14px] text-[#222222] leading-6'>Name *</span>
                                            <input
                                                type='text'
                                                placeholder='Your name'
                                                className='w-full p-4 font-Jost text-[13px] md:text-[14px] text-[#222222] outline-[#222222]'/>
                                        </div>
                                        <input
                                            type='email'
                                            placeholder='Email address *'
                                            className='w-full border border-[#E4E4E4] p-4 font-Jost text-[13px] md:text-[14px] text-[#767676] outline-[#222222] mb-[27px]'
                                        />
                                        <div className='flex items-center gap-2 mb-[27px]'>
                                            <input type='checkbox' id='save' className='w-4 h-4' />
                                            <label htmlFor='save' className='font-Jost text-[13px] md:text-[14px] text-[#767676]'>Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                        <Button className='bg-[#222222] text-white font-Jost font-medium leading-6 text-[13px] md:text-[14px] pr-[77px] pl-[74px] pt-[22px] pb-3.5 uppercase' btnText='submit' />
                                    </div>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Shop