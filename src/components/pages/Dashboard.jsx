import React, { useState } from 'react'
import Container from '../Container'
import Button from '../Button'
import { Link } from 'react-router-dom'
import ProductforTrendy from '../ProductforTrendy'
import product from '../../assets/product.png'

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState('dashboard');

    const tabHeadings = {
        dashboard: 'DASHBOARD',
        orders: 'ORDERS',
        downloads: 'DOWNLOADS',
        addresses: 'ADDRESSES',
        accountDetails: 'ACCOUNT DETAILS',
        wishlist: 'WISHLIST'
    };

    return (
        <>
        <section id='dashboard'>
            <div className="mt-[90px] mb-25">
                <Container>
                    <div className="heading">
                        <h3 className='text-[25px] lg:text-[35px] font-Jost font-bold text-[#222222] uppercase text-center lg:text-left'>{tabHeadings[activeTab]}</h3>
                    </div>
                    <div className="mt-[37px]">
                        <div className="flex flex-col lg:flex-row lg:gap-x-[237px]">
                            {/* left side */}
                            <div className="left lg:w-[124px] mb-8 lg:mb-0 ">
                                <div className="flex flex-wrap items-start justify-center gap-7.5 lg:flex-col lg:gap-0 lg:space-y-7.5">
                                    <Button onClick={() => setActiveTab('dashboard')} btnText={'DASHBOARD'} className={'text-sm font-medium text-[#222222] font-Jost beforeAfterRed'}/>
                                    <Button onClick={() => setActiveTab('orders')} btnText={'ORDERS'} className={'text-sm font-medium text-[#222222] font-Jost beforeAfterRed'}/>
                                    <Button onClick={() => setActiveTab('downloads')} btnText={'DOWNLOADS'} className={'text-sm font-medium text-[#222222] font-Jost beforeAfterRed'}/>
                                    <Button onClick={() => setActiveTab('addresses')} btnText={'ADDRESSES'} className={'text-sm font-medium text-[#222222] font-Jost beforeAfterRed'}/>
                                    <Button onClick={() => setActiveTab('accountDetails')} btnText={'ACCOUNT DETAILS'} className={'text-sm font-medium text-[#222222] font-Jost beforeAfterRed'}/>
                                    <Button onClick={() => setActiveTab('wishlist')} btnText={'WISHLIST'} className={'text-sm font-medium text-[#222222] font-Jost beforeAfterRed'}/>
                                    <Link to={'/register'}>
                                        <Button btnText={'LOGOUT'} className={'text-sm font-medium text-[#222222] font-Jost beforeAfterRed'}/>
                                    </Link>
                                </div>
                            </div>
                            {/* right side */}
                            {/* dashboard */}
                            {activeTab === 'dashboard' && (
                            <div className="right lg:w-[850px]">
                                <h4 className='text-sm font-Jost text-[#222222]'>Hello <span className='font-bold'>alitfn58</span> (not <span className='font-bold'>alitfn58?</span> <Link to={'/register'}>Log out</Link>)</h4>
                                <p className='pt-7.5'>
                                    From your account dashboard you can view your <span className='underline'>recent orders</span>, manage your <span className='underline'>shipping and billing addresses</span> , and <span className='underline'>edit your password and account details.</span>
                                </p>
                            </div>
                            )}
                            {/* dashboard */}
                            {/* order */}
                            {activeTab === 'orders' && (
                            <div className="order w-full lg:w-[1051px]">
                                <div class=" mx-auto border border-[#E4E4E4] flex flex-col">
                                    <div class="hidden lg:flex items-center bg-[#E4E4E4] pt-4 pb-2.5 px-7.5 font-Jost">
                                        <div class="w-[15%] text-base font-medium uppercase">Order</div>
                                        <div class="w-[25%] text-base font-medium uppercase">Date</div>
                                        <div class="w-[15%] text-base font-medium uppercase">Status</div>
                                        <div class="w-[25%] text-base font-medium uppercase">Total</div>
                                        <div class="w-[20%] text-base font-medium uppercase">Actions</div>
                                    </div>
                                    
                                    <div class="flex flex-wrap lg:flex-nowrap items-center border-b border-[#E4E4E4] p-5 lg:p-7.5 font-Jost text-[#222222] text-sm">
                                        <p class="w-1/2 lg:w-[15%] underline mb-2 lg:mb-0 font-semibold lg:font-normal text-base lg:text-sm">#2418</p>
                                        <p class="w-1/2 lg:w-[25%] text-right lg:text-left mb-2 lg:mb-0">October 27, 2020</p>
                                        <p class="w-1/2 lg:w-[15%] mb-4 lg:mb-0">On hold</p>
                                        <p class="w-1/2 lg:w-[25%] text-right lg:text-left mb-4 lg:mb-0 font-medium lg:font-normal">$1,200.65 for 3 items</p>
                                        <div class="w-full lg:w-[20%]">
                                            <button class="w-full lg:w-auto bg-[#222222] text-white text-sm font-medium lg:pr-12.5 lg:pl-13 py-3 lg:pt-[15px] lg:pb-[11px] uppercase cursor-pointer">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-wrap lg:flex-nowrap items-center border-b border-[#E4E4E4] p-5 lg:p-7.5 font-Jost text-[#222222] text-sm">
                                        <p class="w-1/2 lg:w-[15%] underline mb-2 lg:mb-0 font-semibold lg:font-normal text-base lg:text-sm">#2418</p>
                                        <p class="w-1/2 lg:w-[25%] text-right lg:text-left mb-2 lg:mb-0">October 27, 2020</p>
                                        <p class="w-1/2 lg:w-[15%] mb-4 lg:mb-0">On hold</p>
                                        <p class="w-1/2 lg:w-[25%] text-right lg:text-left mb-4 lg:mb-0 font-medium lg:font-normal">$1,200.65 for 3 items</p>
                                        <div class="w-full lg:w-[20%]">
                                            <button class="w-full lg:w-auto bg-[#222222] text-white text-sm font-medium lg:pr-12.5 lg:pl-13 py-3 lg:pt-[15px] lg:pb-[11px] uppercase cursor-pointer">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-wrap lg:flex-nowrap items-center border-b border-[#E4E4E4] p-5 lg:p-7.5 font-Jost text-[#222222] text-sm">
                                        <p class="w-1/2 lg:w-[15%] underline mb-2 lg:mb-0 font-semibold lg:font-normal text-base lg:text-sm">#2418</p>
                                        <p class="w-1/2 lg:w-[25%] text-right lg:text-left mb-2 lg:mb-0">October 27, 2020</p>
                                        <p class="w-1/2 lg:w-[15%] mb-4 lg:mb-0">On hold</p>
                                        <p class="w-1/2 lg:w-[25%] text-right lg:text-left mb-4 lg:mb-0 font-medium lg:font-normal">$1,200.65 for 3 items</p>
                                        <div class="w-full lg:w-[20%]">
                                            <button class="w-full lg:w-auto bg-[#222222] text-white text-sm font-medium lg:pr-12.5 lg:pl-13 py-3 lg:pt-[15px] lg:pb-[11px] uppercase cursor-pointer">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-wrap lg:flex-nowrap items-center p-5 lg:p-7.5 font-Jost text-[#222222] text-sm">
                                        <p class="w-1/2 lg:w-[15%] underline mb-2 lg:mb-0 font-semibold lg:font-normal text-base lg:text-sm">#2418</p>
                                        <p class="w-1/2 lg:w-[25%] text-right lg:text-left mb-2 lg:mb-0">October 27, 2020</p>
                                        <p class="w-1/2 lg:w-[15%] mb-4 lg:mb-0">On hold</p>
                                        <p class="w-1/2 lg:w-[25%] text-right lg:text-left mb-4 lg:mb-0 font-medium lg:font-normal">$1,200.65 for 3 items</p>
                                        <div class="w-full lg:w-[20%]">
                                            <button class="w-full lg:w-auto bg-[#222222] text-white text-sm font-medium lg:pr-12.5 lg:pl-13 py-3 lg:pt-[15px] lg:pb-[11px] uppercase cursor-pointer">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            {/* order */}
                            {/* addressess */}
                            {activeTab === 'addresses' &&(
                            <div className="addresses">
                                <div className="font-Jost">
                                    <p className='text-sm text-[#222222] text-center lg:text-left'>The following addresses will be used on the checkout page by default.</p>
                                    <div className="mt-[62px] flex flex-col lg:flex-row justify-between gap-x-[91px] gap-y-10">
                                        <div className="left">
                                            <div className="flex justify-between lg:gap-x-[207px] pb-[15px]">
                                                <h4 className='text-[18px] font-medium text-[#222222]'>BILLING ADDRESS</h4>
                                                <h4 className='text-[18px] font-medium text-[#222222] beforeAfterBlack'>EDIT</h4>
                                            </div>
                                            <p className='text-sm text-[222222] leading-6'>Daniel Robinson</p>
                                            <p className='text-sm text-[222222] leading-6'>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
                                            <p className='text-sm text-[222222] leading-6'>United States</p>
                                            <div className="pt-[35px]">
                                                <p className='text-sm text-[222222] leading-6'>sale@uomo.com</p>
                                                <p className='text-sm text-[222222] leading-6'>+1 246-345-0695</p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="flex justify-between lg:gap-x-[207px] pb-[15px]">
                                                <h4 className='text-[18px] font-medium text-[#222222]'>SHIPPING ADDRESS</h4>
                                                <h4 className='text-[18px] font-medium text-[#222222] beforeAfterBlack'>EDIT</h4>
                                            </div>
                                            <p className='text-sm text-[222222] leading-6'>Daniel Robinson</p>
                                            <p className='text-sm text-[222222] leading-6'>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
                                            <p className='text-sm text-[222222] leading-6'>United States</p>
                                            <div className="pt-[35px]">
                                                <p className='text-sm text-[222222] leading-6'>sale@uomo.com</p>
                                                <p className='text-sm text-[222222] leading-6'>+1 246-345-0695</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            {/* addressess */}
                            {/* Account details */}
                            {activeTab === 'accountDetails'  && (
                            <div className="accountDetails font-Jost ">
                                <form>
                                    <div className="flex flex-col gap-7.5">
                                        <div className="flex flex-row gap-[27px]">
                                            {/* first name */}
                                            <div className="input-container w-full md:w-[510px]">
                                                <input type="text" id="" placeholder=" " className="input"/>
                                                <label className="label">First Name</label>
                                            </div>
                                            {/* last name */}
                                            <div className="input-container w-full md:w-[510px]">
                                                <input type="text" id="" placeholder=" " className="input"/>
                                                <label className="label">Last Name</label>
                                            </div>
                                        </div>
                                        {/* display name */}
                                        <div className="input-container w-full">
                                            <input type="text" id="" placeholder=" " className="input"/>
                                            <label className="label">Display Name</label>
                                        </div>
                                        {/* email */}
                                        <div className="input-container w-full">
                                            <input type="email" id="" placeholder=" " className="input"/>
                                            <label className="label">Email Address</label>
                                        </div>
                                        <p className='text-base font-medium text-[#222222]'>PASSWORD CHANGE</p>
                                        {/* Current pass */}
                                        <div className="input-container w-full">
                                            <input type="password" id="" placeholder=" " className="input"/>
                                            <label className="label text-[12px]!">Current password (leave blank to leave unchanged)</label>
                                        </div>
                                        {/* New pass */}
                                        <div className="input-container w-full">
                                            <input type="password" id="" placeholder=" " className="input"/>
                                            <label className="label text-[12px]!">New password (leave blank to leave unchanged)</label>
                                        </div>
                                        {/* Confirm pass */}
                                        <div className="input-container w-full">
                                            <input type="password" id="" placeholder=" " className="input"/>
                                            <label className="label">Confirm new password </label>
                                        </div>
                                        <Button btnText={'SAVE CHANGES'} className={'pr-[93px] pl-25 pt-[21px] pb-[15px] bg-[#222222] w-[300px] text-sm font-medium text-white'}/>
                                    </div>
                                </form>
                            </div>
                            )}
                            {/* Account details */}
                            {/* wishlist */}
                            {activeTab === 'wishlist' &&(
                            <div className="wishlist lg:w-[1050px] mx-auto ">
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7.5">
                                    {/* 1st product */}
                                    <div className="">
                                        <ProductforTrendy className={''}
                                            productImg={product}
                                            productType={'Dresses'}
                                            productTitle={'Cropped Faux Leather Jacket'}
                                            productPrice={'$29'}
                                        />
                                    </div>
                                    {/* 2nd product */}
                                    <div className="">
                                        <ProductforTrendy className={''}
                                            productImg={product}
                                            productType={'Dresses'}
                                            productTitle={'Calvin Shorts'}
                                            productPrice={'$62'}
                                        />
                                    </div>
                                    {/* 3rd product */}
                                    <div className="">
                                        <ProductforTrendy className={''}
                                            productImg={product}
                                            productType={'Dresses'}
                                            productTitle={'Kirby T-Shirt'}
                                            productPrice={'$17'}
                                        />
                                    </div>
                                </div>
                            </div>
                            )}
                            {/* wishlist */}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Dashboard