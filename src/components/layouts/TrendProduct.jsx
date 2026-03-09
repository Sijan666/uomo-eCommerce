import React from 'react'
import Container from '../Container'

const TrendProduct = () => {
    return (
        <>
        <section id='trendyProduct'>
            <div className="pt-[94px] pb-25">
                <Container>
                    <div className="heading">
                        <h3 className='text-center font-Jost text-[35px] text-[#222222]'>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h3>
                    </div>
                    <div className="mt-[29px]">
                        <div className="flex justify-center gap-x-13">
                            <button className='text-[#767676] font-Jost cursor-pointer font-medium text-base hover:text-[#222222] duration-300'>ALL</button>
                            <button className='text-[#767676] font-Jost cursor-pointer font-medium text-base hover:text-[#222222] duration-300'>NEWARRIVALS</button>
                            <button className='text-[#767676] font-Jost cursor-pointer font-medium text-base hover:text-[#222222] duration-300'>BEST SELLER </button>
                            <button className='text-[#767676] font-Jost cursor-pointer font-medium text-base hover:text-[#222222] duration-300'>TOP RATING</button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default TrendProduct
