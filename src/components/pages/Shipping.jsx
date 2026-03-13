
import { useState } from 'react';
import Button from '../Button'
import Container from '../Container'
import { Link } from 'react-router-dom';



const Shipping = () => {

    const [selectedMethod, setSelectedMethod] = useState("bank");

    return (
        <>
        <section id='shipping'>
            <div className="pt-15 pb-25">
                <Container>
                    <div className="heading mb-12">
                        <h3 className='text-[35px] font-bold font-Jost text-[#222222] uppercase'>SHIPPING AND CHECKOUT</h3>
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
                        {/* left side */}
                        <div className="left lg:w-[930px] w-full">
                            <h3 className='text-base font-medium font-Jost text-[#222222]'>BILLING DETAILS</h3>
                            {/* form */}
                            <form>
                                <div className="mt-8.5 flex flex-col gap-7.5">
                                    <div className="flex flex-col lg:flex-row items-center gap-7.5">
                                        {/* first name */}
                                        <div className="input-container w-full md:w-[450px]">
                                            <input type="text" id="myInput" placeholder=" " className="input"/>
                                            <label htmlFor="myInput" className="label">First Name</label>
                                        </div>
                                        {/* last name */}
                                        <div className="input-container w-full md:w-[450px]">
                                            <input type="text" id="myInput" placeholder=" " className="input"/>
                                            <label htmlFor="myInput" className="label">Last Name</label>
                                        </div>
                                    </div>
                                    {/* company */}
                                    <div className="input-container w-full">
                                        <input type="text" id="myInput" placeholder=" " className="input"/>
                                        <label htmlFor="myInput" className="label">Company Name (optional)</label>
                                    </div>
                                    {/* countrry */}
                                    <div className="select-container">
                                        <select 
                                            id="country" required defaultValue="" className="select">
                                            <option value="" disabled hidden></option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="USA">USA</option>
                                        </select>
                                        <label htmlFor="country" className="select-label">Country / Region *</label>
                                    </div>
                                    {/* street */}
                                    <div className="input-container w-full">
                                        <input type="text" id="myInput" placeholder=" " className="input"/>
                                        <label htmlFor="myInput" className="label">Street Address *</label>
                                    </div>
                                    {/* town */}
                                    <div className="input-container w-full">
                                        <input type="text" id="myInput" placeholder=" " className="input"/>
                                        <label htmlFor="myInput" className="label">Town / City *</label>
                                    </div>
                                    {/* postcode */}
                                    <div className="input-container w-full">
                                        <input type="text" id="myInput" placeholder=" " className="input"/>
                                        <label htmlFor="myInput" className="label">Postcode / ZIP *</label>
                                    </div>
                                    {/* province */}
                                    <div className="input-container w-full">
                                        <input type="text" id="myInput" placeholder=" " className="input"/>
                                        <label htmlFor="myInput" className="label">Province *</label>
                                    </div>
                                    {/* phone */}
                                    <div className="input-container w-full">
                                        <input type="number" id="myInput" placeholder=" " className="input"/>
                                        <label htmlFor="myInput" className="label">Phone *</label>
                                    </div>
                                    {/* mail */}
                                    <div className="input-container w-full">
                                        <input type="email" id="myInput" placeholder=" " className="input"/>
                                        <label htmlFor="myInput" className="label">Your Mail</label>
                                    </div>
                                    <div className="btns">
                                        <div className="flex gap-x-2.5 items-center">
                                            <input type="checkbox" name="" id="" />
                                            <Button btnText={"CREATE AN ACCOUNT?"} className={'text-[14px] font-Jost text-[#222222] font-medium'}/>
                                        </div>
                                        <div className="flex gap-x-2.5 items-center mt-3">
                                            <input type="checkbox" name="" id="" />
                                            <Button btnText={"SHIP TO A DIFFERENT ADDRESS?"} className={'text-[14px] font-Jost text-[#222222] font-medium'}/>
                                        </div>
                                    </div>
                                    <div className="textarea-container w-full">
                                        <textarea id="message" placeholder=" "className="textarea"></textarea>
                                        <label htmlFor="message" className="textarea-label">Order Notes (optional)</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* right side */}
                        <div className="right lg:w-[420px] w-full">
                            <div className="pt-[38px] pb-[22px] pr-5 pl-5 md:pr-12.5 md:pl-[41px] border border-[#222222]">
                                <h3 className='text-base font-Jost font-medium text-[#222222] pb-8'>YOUR ORDER</h3>
                                <div className="flex justify-between  md:gap-x-[134px] items-center pb-[13px] border-b border-[#E4E4E4]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>PRODUCT</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$SUBTOTAL</h3>
                                </div>
                                <div className="flex justify-between md:gap-x-[134px] pb-[13px] pt-[15px] ">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#767676]'>Zessi Dresses x2</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#767676]'>$32.50</h3>
                                </div>
                                <div className="flex justify-between md:gap-x-[134px] pb-4  border-b border-[#E4E4E4]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#767676]'>Kirby T-Shirt</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#767676]'>$29.90</h3>
                                </div>
                                <div className="flex justify-between items-center pb-[13px] pt-3.5 border-b border-[#E4E4E4]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>SUBTOTAL</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$89.90</h3>
                                </div>
                                <div className="flex justify-between items-center pb-[13px] pt-3.5 border-b border-[#E4E4E4]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>SHIPPING</h3>
                                    <h3 className='text-[14px] font-Jost text-[#222222]'>Free shipping</h3>
                                </div>
                                <div className="flex justify-between items-center pb-[13px] pt-3.5 border-b border-[#E4E4E4]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>VAT</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$19</h3>
                                </div>
                                <div className="flex justify-between items-center pt-[15px]">
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>TOTAL</h3>
                                    <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$1319</h3>
                                </div>
                            </div>
                            <div className="mt-5 pt-[42px] pr-[31px] pb-[26px] pl-[41px] border border-[#222222]">
                                <div className="flex flex-col gap-8.75 font-Jost">
                                    {/* direct bank transfer */}
                                    <div id='bank'>
                                        <label className="flex items-start gap-[15px] cursor-pointer w-fit">
                                            <input type="radio" name="payment" value="bank" checked={selectedMethod === "bank"} onChange={() => setSelectedMethod("bank")} className="hidden"/>
                                            {/* radio btn */}
                                            <div className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${selectedMethod === "bank" ? "border-[#222222]" : "border-[#E4E4E4]"}`}>
                                                {selectedMethod === "bank" && (
                                                <div className="h-2 w-2 rounded-full bg-[#222222]"></div>
                                                )}
                                            </div>
                                            <div className="">
                                                <h4 className='text-base text-[#222222]'>Direct bank transfer</h4>
                                                    {selectedMethod === "bank" && (
                                                    <p className="mt-2 text-[14px] leading-6 text-[#222222] md:w-[260px]">
                                                        Make your payment directly into our bank account. Please use your Order ID as the
                                                        payment reference. Your order will not be shipped until the funds have cleared in our
                                                        account.
                                                    </p>
                                                    )}
                                            </div>
                                        </label>
                                    </div>
                                    {/* check payments */}
                                    <div id='check'>
                                        <label className="flex items-center gap-[15px] cursor-pointer w-fit">
                                            <input type="radio" name="payment" value="check" checked={selectedMethod === "check"} onChange={() => setSelectedMethod("check")} className="hidden"/>
                                            <div className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${selectedMethod === "check" ? "border-[#222222]" : "border-[#E4E4E4]"}`}>
                                                {selectedMethod === "check" && (
                                                <div className="h-2 w-2 rounded-full bg-[#222222]"></div>
                                                )}
                                            </div>
                                            <span className="text-base text-[#222222]">Check payments</span>
                                        </label>
                                    </div>
                                    {/* cash on delivery */}
                                    <div className='cash'>
                                        <label className="flex items-center gap-[15px] cursor-pointer w-fit">
                                            <input type="radio" name="payment" value="cod" checked={selectedMethod === "cod"} onChange={() => setSelectedMethod("cod")} className="hidden"/>
                                            <div className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${selectedMethod === "cod" ? "border-[#222222]" : "border-[#E4E4E4]"}`}>
                                                {selectedMethod === "cod" && (
                                                <div className="h-2 w-2 rounded-full bg-[#222222]"></div>
                                                )}
                                            </div>
                                            <span className="text-base text-[#222222]">Cash on delivery</span>
                                        </label>
                                    </div>
                                    {/* paypal */}
                                    <div id='paypal'>
                                        <label className="flex items-center gap-[15px] cursor-pointer w-fit">
                                            <input type="radio" name="payment" value="paypal" checked={selectedMethod === "paypal"} onChange={() => setSelectedMethod("paypal")}className="hidden"/>
                                            <div className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${selectedMethod === "paypal" ? "border-[#222222]" : "border-[#E4E4E4]"}`}>
                                                {selectedMethod === "paypal" && (
                                                <div className="h-2 w-2 rounded-full bg-[#222222]"></div>
                                                )}
                                            </div>
                                            <span className="text-[16px] text-[#222222]">PayPal</span>
                                        </label>
                                    </div>
                                    {/* Policy Text */}
                                    <div className="mt-[5px]">
                                        <p className="text-[12px] leading-6 text-[#222222]">
                                        Your personal data will be used to process your order, support your experience throughout
                                        this website, and for other purposes described in our{" "}
                                        <button className="text-[#E95144] cursor-pointer">
                                            privacy policy.
                                        </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Link to={'/'}>
                                    <Button btnText={'PLACE ORDER'} className={'text-[14px] w-full font-Jost font-medium text-white bg-[#222222] md:pr-[163px] md:pl-[164px] pt-[21px] pb-[15px]'}/>
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

export default Shipping