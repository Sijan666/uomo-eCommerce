import React, { useState } from 'react'
import Container from '../Container'
import Image from '../Image'
import cart from '../../assets/cart.png'



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
            <div className="pt-15 pb-25">
                <Container>
                    <div className="heading mb-12">
                        <h3 className='text-[35px] font-bold font-Jost text-[#222222]'>CART</h3>
                    </div>
                    <div className="flex gap-x-[304px] items-center pb-2.5 border-b border-[#E4E4E4]">
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
                    <div className="flex justify-between">
                        <div className="mt-12.5 md:w-[930px]">
                            <div className="flex justify-between border-b pb-[9px] border-[#E4E4E4]">
                                <div className="">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>PRODUCT</h3>
                                </div>
                                <div className="flex gap-x-16 mr-[78px]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>PRICE</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>QUANTITY</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>SUBTOTAL</h3>
                                </div>
                            </div>
                            <div className="border-b pb-7.5 border-[#E4E4E4]">
                                <div className="mt-7.5 flex gap-x-[247px] items-center">
                                    <div className=" flex gap-x-7.5 items-center ">
                                        <Image imgSrc={cart}/>
                                        <h3 className='text-base font-medium font-Jost text-[#222222]'>Zessi Dresses</h3>
                                    </div>
                                    <div className="flex gap-x-16 mr-[78px] items-center">
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$99</h3>
                                        <div className="flex items-center justify-between border-2 border-[#E4E4E4] gap-x-5 pt-5 pb-4 pr-[18px] pl-[21px]">
                                            <button onClick={handleDecrement} className='text-[#767676] font-Jost text-base cursor-pointer'>-</button>
                                            <p className='text-[#767676] font-Jost text-base leading-6'>{count}</p>
                                            <button onClick={handleIncrement} className='text-[#767676] font-Jost text-base cursor-pointer'>+</button>
                                        </div>
                                        <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$399</h3>
                                        <button onClick={handleDecrement} className='text-[#767676] font-Jost text-base cursor-pointer'>-</button>
                                    </div>
                                </div>
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