import React from 'react'
import Container from '../Container'
import Image from '../Image'
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'

const FooterTop = () => {
    return (
        <>
        <section id='adsTwo'>
            <div className="py-25">
                <Container>
                    <div className="flex flex-col md:flex-row gap-y-20 items-center justify-center gap-x-64">
                        {/* ads1 */}
                        <div className="">
                            <Image imgSrc={a1} className={'mx-auto'}/>
                            <div className="text-center">
                                <h4 className='text-black text-[18px] font-medium font-Jost pt-[23px] pb-2'>FAST AND FREE DELIVERY</h4>
                                <h6 className='text-[15px] font-Jost text-[#767676]'>Free delivery for all orders over $140</h6>
                            </div>
                        </div>
                        {/* ads2 */}
                        <div className="">
                            <Image imgSrc={a2} className={'mx-auto'}/>
                            <div className="text-center">
                                <h4 className='text-black text-[18px] font-medium font-Jost pt-[23px] pb-2'>24/7 CUSTOMER SUPPORT</h4>
                                <h6 className='text-[15px] font-Jost text-[#767676]'>Friendly 24/7 customer support</h6>
                            </div>
                        </div>
                        {/* ads3 */}
                        <div className="">
                            <Image imgSrc={a3} className={'mx-auto'}/>
                            <div className="text-center">
                                <h4 className='text-black text-[18px] font-medium font-Jost pt-[23px] pb-2'>MONEY BACK GUARANTEE</h4>
                                <h6 className='text-[15px] font-Jost text-[#767676]'>We return money within 30 days</h6>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default FooterTop