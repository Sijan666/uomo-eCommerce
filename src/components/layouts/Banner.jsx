import React from 'react'
import Container from '../Container'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const slides = [
    { id: 1, bg: "/banner.png" },
    { id: 2, bg: "/banner.png" },
    { id: 3, bg: "/banner.png" },
    { id: 4, bg: "/banner.png" },
    { id: 5, bg: "/banner.png" },
]

const Banner = () => {
    return (
        <section className="relative w-full" id='banner'>
            {/* Left Social Sidebar */}
            <div className="hidden md:flex md:flex-col absolute left-0 top-0 h-full w-[2%] items-center justify-center gap-4 lg:gap-6 z-10">
                <a href="#" className="text-[#767676] hover:text-gray-800 transition-colors"><FaFacebookF size={14} /></a>
                <a href="#" className="text-[#767676] hover:text-gray-800 transition-colors"><FaTwitter size={14} /></a>
                <a href="#" className="text-[#767676] hover:text-gray-800 transition-colors"><FaInstagram size={14} /></a>
                <a href="#" className="text-[#767676] hover:text-gray-800 transition-colors"><FaPinterestP size={12} /></a>
                <div className="mt-[18px]">
                    <span className="text-[10px] lg:text-[14px] font-Jost font-medium text-[#767676] leading-6"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                        FOLLOW US
                    </span>
                </div>
            </div>
            {/* Right Scroll Sidebar */}
            <div className="hidden md:flex md:flex-col absolute right-0 top-0 h-full  w-[2%] items-center justify-end pb-8 gap-3 z-10">
                <span className="text-[10px] lg:text-[14px] font-Jost font-medium text-black"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    SCROLL
                </span>
                <div className="w-px h-10 bg-black"></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true, el: '.banner-dots' }}
                loop={true}
                className="w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="w-[96%] mx-auto pt-[150px] pb-[200px] md:pt-[220px] md:pb-[260px] lg:pt-72 lg:pb-[317px] bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.bg})` }}
                        >
                            <Container>
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-6 md:w-8 h-0.5 bg-[#C32929]"></div>
                                        <h2 className='text-[11px] md:text-[13px] lg:text-[14px] text-[#C32929] font-Jost font-medium leading-6'>NEW TREND</h2>
                                    </div>
                                    <h1 className='text-[36px] sm:text-[48px] md:text-[56px] lg:text-[70px] text-[#222222] font-Jost leading-tight lg:leading-20'>
                                        SUMMER SALE STYLISH <br />
                                        <span className='font-bold'>WOMENS</span>
                                    </h1>
                                </div>
                            </Container>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* dots */}
            <div className="absolute bottom-[58px] left-0 right-0 z-10">
                <Container>
                    <div className="banner-dots" />
                </Container>
            </div>

        </section>
    )
}

export default Banner