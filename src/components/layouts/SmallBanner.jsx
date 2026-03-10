import React from 'react'
import Container from '../Container'

const SmallBanner = () => {
    return (
        <section id='smallBanner'>
            <div className="pt-25 pb-[91px]">
                <Container>
                    <div className="flex flex-col md:flex-row gap-y-7.5 justify-between gap-x-7.5">
                        <div className="bg-[url('/src/assets/1.png')] pt-[236px] pb-[49.69px] bg-center bg-cover bg-no-repeat w-full px-5 md:px-12.5">
                            <h4 className='text-[18px] font-Jost text-white font-medium'>STARTING AT $19</h4>
                            <h3 className='mt-2 text-[26px] font-medium font-Jost text-white'>Women’s T-Shirts</h3>
                            <div className="btn mt-[15px]">
                                <button className='font-Jost text-[14px] font-medium text-white beforeAfter2'>SHOP NOW</button>
                            </div>
                        </div>
                        <div className="bg-[url('/src/assets/2.png')] pt-[236px] pb-[49.69px] bg-center bg-cover bg-no-repeat w-full px-5 md:px-12.5">
                            <h4 className='text-[18px] font-Jost text-[#222222] font-medium'>STARTING AT $19</h4>
                            <h3 className='mt-2 text-[26px] font-medium font-Jost text-[#222222]'>Women’s T-Shirts</h3>
                            <div className="btn mt-[15px]">
                                <button className='font-Jost text-[14px] font-medium beforeAfter3'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default SmallBanner