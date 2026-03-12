import React, { useEffect, useRef } from 'react'
import Container from '../Container'
import ProductforTrendy from '../ProductforTrendy'
import product from '../../assets/product.png'
import mixitup from 'mixitup';

const TrendProduct = () => {

    const containerRef = useRef(); 
    useEffect(() => {
        if (containerRef.current) {
        mixitup(containerRef.current, {
            animation: {
                duration: 400,
            },
            selectors: {
                target: '.mix'
            }
        });
    }
},);

    return (
        <>
        <section id='trendyProduct'>
            <div className="pt-[94px] pb-25">
                <Container>
                    <div className="heading">
                        <h3 className='text-center font-Jost text-[20px] lg:text-[35px] text-[#222222]'>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h3>
                    </div>
                    {/* all buttons */}
                    <div className="mt-[29px]">
                        <div className="flex flex-col md:flex-row gap-y-6 justify-center gap-x-13">
                            <button data-filter=".all" className='beforeAfter font-medium text-[10px] md:text-base '>ALL</button>
                            <button data-filter=".new" className='beforeAfter font-medium text-[10px] md:text-base '>NEWARRIVALS</button>
                            <button data-filter=".best" className='beforeAfter font-medium text-[10px] md:text-base '>BEST SELLER </button>
                            <button data-filter=".top" className='beforeAfter font-medium text-[10px] md:text-base '>TOP RATING</button>
                        </div>
                    </div>
                    <div className="mt-[41px]">
                        {/* all products */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7.5" ref={containerRef}>
                            {/* 1st product */}
                            <div className="mix all new">
                                <ProductforTrendy className={''}
                                    productImg={product}
                                    productType={'Dresses'}
                                    productTitle={'Cropped Faux Leather Jacket'}
                                    productPrice={'$29'}
                                />
                            </div>
                            {/* 2nd product */}
                            <div className="mix all new">
                                <ProductforTrendy className={''}
                                    productImg={product}
                                    productType={'Dresses'}
                                    productTitle={'Calvin Shorts'}
                                    productPrice={'$62'}
                                />
                            </div>
                            {/* 3rd product */}
                            <div className="mix all best">
                                <ProductforTrendy className={''}
                                    productImg={product}
                                    productType={'Dresses'}
                                    productTitle={'Kirby T-Shirt'}
                                    productPrice={'$17'}
                                />
                            </div>
                            {/* 4th product */}
                            <div className="mix all best">
                                <ProductforTrendy className={''}
                                    productImg={product}
                                    productType={'Dresses'}
                                    productTitle={'Cableknit Shawl'}
                                    productPrice={'$129'}
                                    offerPrice={'$99'}
                                />
                            </div>
                            {/* 2nd line */}
                            {/* 5th product */}
                            <div className="mix all top">
                                <ProductforTrendy className={''}
                                    productImg={product}
                                    productType={'Dresses'}
                                    productTitle={'Colorful Jacket'}
                                    productPrice={'$29'}
                                />
                            </div>
                            {/* 6th product */}
                            <div className="mix all top">
                                <ProductforTrendy className={''}
                                    productImg={product}
                                    productType={'Dresses'}
                                    productTitle={'Shirt In Botanical Cheetah Print'}
                                    productPrice={'$62'}
                                />
                            </div>
                            {/* 7th product */}
                            <div className="mix all best">
                                <ProductforTrendy className={''}
                                    productImg={product}
                                    productType={'Dresses'}
                                    productTitle={'Cotton Jersey T-Shirt'}
                                    productPrice={'$17'}
                                />
                            </div>
                            {/* 8th product */}
                            <div className="mix all top">
                                <ProductforTrendy className={''}
                                    productImg={product}
                                    productType={'Dresses'}
                                    productTitle={'Zessi Dresses'}
                                    productPrice={'$129'}
                                    offerPrice={'$99'}
                                />
                            </div>
                        </div>
                        <div className="btn mt-[42px] text-center">
                            <button className='font-Jost text-[14px] font-medium text-[#222222] beforeAfter '>SEE ALL PRODUCT</button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default TrendProduct
