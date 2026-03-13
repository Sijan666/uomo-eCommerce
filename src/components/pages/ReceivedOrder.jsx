
import { ImCheckmark } from 'react-icons/im'
import Container from '../Container'


const ReceivedOrder = () => {


    return (
        <>
        <section id='receivedOrder'>
            <div className="pt-15 pb-25">
                <Container>
                    <div className="heading mb-12">
                        <h3 className='text-[35px] font-bold font-Jost text-[#222222] uppercase'>Order received</h3>
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
                    <div className="w-full lg:w-[900px] mt-12.5 mx-auto ">
                        <div className=" text-center">
                            <div className="py-5 px-5 bg-[#B9A16B] rounded-full inline-block text-white mb-5 ">
                                <ImCheckmark size={30}/>
                            </div>
                        </div>
                        <div className="text-center font-Jost">
                            <h3 className='text-[35px] text-[#222222]'>Your order is completed!</h3>
                            <p className='text-sm text-[#77838F]'>Thank you. Your order has been received.</p>
                        </div>
                        <div className="mt-9 px-11 py-10 border border-dashed border-[#222222] font-Jost">
                            <div className="flex flex-col md:flex-row gap-y-10 gap-x-22 items-center text-center md:text-left">
                                <div className="first ">
                                    <h4 className='text-[#767676] text-sm font-medium pb-1'>Order Number</h4>
                                    <h3 className='text-base text-[#222222] font-medium'>13119</h3>
                                </div>
                                <div className="second">
                                    <h4 className='text-[#767676] text-sm font-medium pb-1'>Date</h4>
                                    <h3 className='text-base text-[#222222] font-medium'>27/11/2020</h3>
                                </div>
                                <div className="third">
                                    <h4 className='text-[#767676] text-sm font-medium pb-1'>Total</h4>
                                    <h3 className='text-base text-[#222222] font-medium'>$40.10</h3>
                                </div>
                                <div className="fourth">
                                    <h4 className='text-[#767676] text-sm font-medium pb-1'>Payment Method</h4>
                                    <h3 className='text-base text-[#222222] font-medium'>Direct Bank Transfer</h3>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[38px] pb-[22px] pr-5 pl-5 md:pr-12.5 md:pl-[41px] border border-[#222222] mt-9">
                            <h3 className='text-base font-Jost font-medium text-[#222222] pb-8'>ORDER DETAILS</h3>
                            <div className="flex justify-between items-center pb-[13px] border-b border-[#E4E4E4]">
                                <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>PRODUCT</h3>
                                <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>SUBTOTAL</h3>
                            </div>
                            <div className="flex justify-between items-center pb-[13px] pt-[15px] ">
                                <h3 className='text-[14px] font-Jost font-medium text-[#767676]'>Zessi Dresses x2</h3>
                                <h3 className='text-[14px] font-Jost font-medium text-[#767676]'>$32.50</h3>
                            </div>
                            <div className="flex justify-between items-center pb-4  border-b border-[#E4E4E4]">
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
                            <div className="flex justify-between items-center pb-[13px] pt-3.5 border-b border-[#E4E4E4]">
                                <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>PAYMENT METHOD</h3>
                                <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>Direct bank transfer</h3>
                            </div>
                            <div className="flex justify-between items-center pt-[15px]">
                                <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>TOTAL</h3>
                                <h3 className='text-[14px] font-Jost font-medium text-[#222222]'>$1319</h3>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default ReceivedOrder