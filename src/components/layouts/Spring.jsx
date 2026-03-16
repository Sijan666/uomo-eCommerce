import React from 'react'
import Image from '../Image'
import springImage from '../../assets/springImage.png'
import Container from '../Container'
import CountdownTimer from '../../npm/CountdownTimer'

const Spring = () => {
    return (
        <>
        <section id='spring'>
            <div className="pt-7 pb-[29px] bg-[#EBEBEB]">
                <Container>
                    <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-[202px] items-center">
                        <div className="left mx-auto md:mx-0 text-left mt-[50px]">
                            <h4 className='flex items-start before:mt-1.25 pb-[9px] gap-x-5 font-medium font-Jost text-[14px] text-[#C32929] before:content-[""] before:w-10 before:h-0.5 before:bg-[#C32929]'>DEAL OF THE WEEK</h4>
                            <h3 className='text-[#000000] font-Jost text-[30px] md:text-[70px] uppercase '><span className='font-bold'>Spring</span> Collection</h3>
                            <div className="btn mt-[11px]">
                                <button className='font-Jost text-[14px] font-medium text-[#222222] beforeAfter '>SHOP NOW</button>
                            </div>
                            <div className="countdown mt-[25px] mb-2 md:mb-0 md:mt-[119.69px]">
                                <CountdownTimer/>
                            </div>
                        </div>
                        <div className="right hidden md:block">
                            <Image imgSrc={springImage}/>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Spring