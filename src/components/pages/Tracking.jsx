import React from 'react'
import Container from '../Container'
import Button from '../Button'

const Tracking = () => {
    return (
        <>
        <section id='orderTracking'>
            <div className="py-[90px] font-Jost">
                <Container>
                    <div className="lg:w-[500px] mx-auto">
                        <div className="heading text-center">
                            <h3 className='text-[35px] font-bold text-[#222222] uppercase'>Order Tracking</h3>
                            <p className='pt-[42px] pb-5 text-sm text-[#767676]'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                        </div>
                        <div className="inputForm flex flex-col gap-7.5">
                            {/* first name */}
                            <div className="input-container w-full md:w-[500px] mx-auto">
                                <input type="text" id="myInput" placeholder=" " className="input"/>
                                <label htmlFor="myInput" className="label">First Name</label>
                            </div>
                            {/* last name */}
                            <div className="input-container w-full md:w-[500px] mx-auto">
                                <input type="text" id="myInput" placeholder=" " className="input"/>
                                <label htmlFor="myInput" className="label">Last Name</label>
                            </div>
                        </div>
                        <div className="btn mt-6">
                            <Button btnText={'Track'} className={'uppercase pt-[22px] pb-3.5 bg-black w-full text-sm text-white font-medium'}/>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Tracking