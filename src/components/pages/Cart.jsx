import React, { useState } from 'react'
import Container from '../Container'
import Image from '../Image'
import cart from '../../assets/cart.png'
import { RxCross2 } from 'react-icons/rx'
import Button from '../Button'
import { Link } from 'react-router-dom'



const Cart = () => {

        const [count, setCount] = useState(0)
    
    
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
        <section id='cart'>
            <div className="pt-[90px] pb-25">
                <Container>
                    <div className="heading mb-12">
                        <h3 className='text-[35px] font-bold font-Jost text-[#222222]'>CART</h3>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start gap-x-[304px] gap-y-10 lg:items-center pb-2.5 border-b border-[#E4E4E4]">
                        <div className="flex gap-x-2.5">
                            <h4 className='text-[18px] text-[#222222] font-Jost font-medium'>01</h4>
                            <div className="">
                                <h4 className='text-[18px] text-[#222222] font-Jost font-medium'>SHOPPING BAG</h4>
                                <p className='text-[14px] font-Jost text-[#767676]'>Manage Your Items List</p>
                            </div>
                        </div>
                        <div className="flex gap-x-2.5">
                            <h4 className='text-[18px] text-[#222222] font-Jost font-medium'>02</h4>
                            <div className="">
                                <h4 className='text-[18px] text-[#222222] font-Jost font-medium'>SHIPPING AND CHECKOUT</h4>
                                <p className='text-[14px] font-Jost text-[#767676]'>Checkout Your Items List</p>
                            </div>
                        </div>
                        <div className="flex gap-x-2.5">
                            <h4 className='text-[18px] text-[#222222] font-Jost font-medium'>03</h4>
                            <div className="">
                                <h4 className='text-[18px] text-[#222222] font-Jost font-medium'>CONFIRMATION</h4>
                                <p className='text-[14px] font-Jost text-[#767676]'>Review And Submit Your Order</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-7.5 justify-between gap-x-[58px] items-start mt-12.5">
                        <div className="left lg:w-[932px] w-full">
                            {/* list */}
                            <div className="hidden md:block">
                                <div className="flex justify-between border-b pb-[9px] border-[#E4E4E4]">
                                    <div className="">
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>PRODUCT</h3>
                                    </div>
                                    <div className="flex gap-x-[91px] mr-[78px]">
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>PRICE</h3>
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>QUANTITY</h3>
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>SUBTOTAL</h3>
                                    </div>
                                </div>
                            </div>
                            {/* product one */}
                            <div className="border-b pb-7.5 border-[#E4E4E4]">
                                <div className="mt-7.5 flex flex-col md:flex-row gap-y-7.5 md:gap-x-50 lg:gap-x-[255px] items-center">
                                    <div className="flex flex-col md:flex-row gap-y-7.5 gap-x-7.5 items-center ">
                                        <Image imgSrc={cart}/>
                                        <h3 className='text-base font-medium font-Jost text-[#222222]'>Zessi Dresses</h3>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-y-7.5 items-center">
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222] md:mr-[101px]'>$99</h3>
                                        <div className="flex items-center justify-between border-2 border-[#E4E4E4] gap-x-6 pt-[15px] pb-3 pr-[15px] pl-[17px] md:mr-[58px]">
                                            <button onClick={handleDecrement} className='text-[#767676] font-Jost text-base cursor-pointer'>-</button>
                                            <p className='text-[#767676] font-Jost text-base leading-6'>{count}</p>
                                            <button onClick={handleIncrement} className='text-[#767676] font-Jost text-base cursor-pointer'>+</button>
                                        </div>
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222] md:mr-[89px]'>$399</h3>
                                        <button onClick={handleDecrement} className='text-[#767676] font-Jost text-base cursor-pointer'><RxCross2 /></button>
                                    </div>
                                </div>
                            </div>
                            {/* product two */}
                            <div className="border-b pb-7.5 border-[#E4E4E4]">
                                <div className="mt-7.5 flex flex-col md:flex-row gap-y-7.5 md:gap-x-50 lg:gap-x-[255px] items-center">
                                    <div className="flex flex-col md:flex-row gap-y-7.5 gap-x-7.5 items-center ">
                                        <Image imgSrc={cart}/>
                                        <div className="">
                                            <h3 className='text-base font-medium font-Jost text-[#222222] pb-1'>Kirby T-Shirt</h3>
                                            <p className='text-[14px] text-[#767676] font-Jost'>Color:  Yellow</p>
                                            <p className='text-[14px] text-[#767676] font-Jost'>Size: L</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-y-7.5 items-center">
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222] md:mr-[101px]'>$99</h3>
                                        <div className="flex items-center justify-between border-2 border-[#E4E4E4] gap-x-6 pt-[15px] pb-3 pr-[15px] pl-[17px] md:mr-[58px]">
                                            <button onClick={handleDecrement} className='text-[#767676] font-Jost text-base cursor-pointer'>-</button>
                                            <p className='text-[#767676] font-Jost text-base leading-6'>{count}</p>
                                            <button onClick={handleIncrement} className='text-[#767676] font-Jost text-base cursor-pointer'>+</button>
                                        </div>
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222] md:mr-[89px]'>$399</h3>
                                        <button onClick={handleDecrement} className='text-[#767676] font-Jost text-base cursor-pointer'><RxCross2 /></button>
                                    </div>
                                </div>
                            </div>
                            {/* product three */}
                            <div className="border-b pb-7.5 border-[#E4E4E4]">
                                <div className="mt-7.5 flex flex-col md:flex-row gap-y-7.5 md:gap-x-50 lg:gap-x-[255px] items-center">
                                    <div className="flex flex-col md:flex-row gap-y-7.5 gap-x-7.5 items-center ">
                                        <Image imgSrc={cart}/>
                                        <h3 className='text-base font-medium font-Jost text-[#222222]'>Cableknit Shawl</h3>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-y-7.5 items-center">
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222] md:mr-[101px]'>$99</h3>
                                        <div className="flex items-center justify-between border-2 border-[#E4E4E4] gap-x-6 pt-[15px] pb-3 pr-[15px] pl-[17px] md:mr-[58px]">
                                            <button onClick={handleDecrement} className='text-[#767676] font-Jost text-base cursor-pointer'>-</button>
                                            <p className='text-[#767676] font-Jost text-base leading-6'>{count}</p>
                                            <button onClick={handleIncrement} className='text-[#767676] font-Jost text-base cursor-pointer'>+</button>
                                        </div>
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222] md:mr-[89px]'>$399</h3>
                                        <button onClick={handleDecrement} className='text-[#767676] font-Jost text-base cursor-pointer'><RxCross2 /></button>
                                    </div>
                                </div>
                            </div>
                            {/* btns */}
                            <div className="mt-8 flex flex-col gap-y-5 md:flex-row justify-between">
                                <div className="left relative">
                                    <input type="text" placeholder='Coupon Code' className='px-[21px] pt-5 pb-4 border-2 border-[#E4E4E4] w-full md:w-[370px] text-[#767676] font-Jost text-[14px] outline-none'/>
                                    <button className='text-[14px] font-Jost font-medium text-[#222222] absolute right-4 top-5.5 cursor-pointer'>APPLY COUPON</button>
                                </div>
                                <div className="right">
                                    <Button btnText={'UPDATE CART'} className={'px-[55px] pt-[22px] pb-3.5 w-full text-[14px] font-Jost font-medium text-[#222222] bg-[#E4E4E4]'}/>
                                </div>
                            </div>
                        </div>
                        <div className="right lg:w-[420px] w-full">
                            <div className="pt-[38px] pb-[22px] pr-5 pl-5 md:pr-12.5 md:pl-[41px] border border-[#222222]">
                                <h3 className='text-base font-Jost font-medium text-[#222222] pb-8'>CART TOTALS</h3>
                                <div className="flex justify-between  md:gap-x-[134px] items-center pb-[13px] border-b border-[#E4E4E4]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>SUBTOTAL</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$1300</h3>
                                </div>
                                <div className="flex justify-between md:gap-x-[134px] pb-5 pt-[15px] border-b border-[#E4E4E4]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>SUBTOTAL</h3>
                                    <div className="flex flex-col gap-y-3.5">
                                        <div className="flex gap-x-[13px] items-center">
                                            <input type="checkbox" name="" id="" />
                                            <p className='text-[14px] font-Jost text-[#222222]'>Free Shipping</p>
                                        </div>
                                        <div className="flex gap-x-[13px] items-center">
                                            <input type="checkbox" name="" id="" />
                                            <p className='text-[14px] font-Jost text-[#222222]'>Flat rate: $49</p>
                                        </div>
                                        <div className="flex gap-x-[13px] items-center">
                                            <input type="checkbox" name="" id="" />
                                            <p className='text-[14px] font-Jost text-[#222222]'>Local pickup: $8</p>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className='text-[14px] font-Jost text-[#222222] pb-1.5'>Shipping to AL.</p>
                                                <Button btnText={'CHANGE ADDRESS'} className={'beforeAfterBlack text-[14px] font-medium'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-x-[175px] items-center pb-[13px] pt-3.5 border-b border-[#E4E4E4]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>VAT</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$19</h3>
                                </div>
                                <div className="flex gap-x-[159px] items-center pt-[15px]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>TOTAL</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$1319</h3>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Link to={'/shipping'}>
                                    <Button btnText={'PROCEED TO CHECKOUT'} className={'text-[14px] w-full font-Jost font-medium text-white bg-[#222222] px-15 md:pr-[118px] md:pl-[139px] pt-[21px] pb-[15px]'}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Cart