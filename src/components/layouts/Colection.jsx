import React from 'react'
import Container from '../Container'
import women from '../../assets/women.png'
import men from '../../assets/men.png'
import kind from '../../assets/kind.png'
import gift from '../../assets/gift.png'

const Colection = () => {
  return (
    <div className='pt-[101px]'>
     <Container>
        <div className="main xl:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 grid-rows-2 2xl:gap-[30px] xl:gap-x-[30px] md-gap-3 sm:h-[200px] md:h-5 lg:h-[300px] xl:h-[600px]">

        <div className='lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2 sm:col-span-2 relative overflow-hidden'>
        <img className='w-full h-full ' src={women} alt={women} />
       <div className='xl:top-[467px] md:top-[180px] left-10 absolute'>
        <span className='font-Jost md:font-normal xl:font-medium xl:text-[14px] text-[12px] text-[#222222]'>HOT LIST</span>
        <h4 className='font-Jost xl:font-medium font-normal xl:text-[26px] text-[16px] text-[#222222]'>WOMEN COLLECTION</h4>
        <p className='relative  font-Jost font-medium text-[14px] text-[#222222] mt-[5px] pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 hover:after:w-[50px]'>SHOP NOW</p>
       </div>
          
            </div>
            <div className='col-span-2 relative overflow-hidden'>
                <img className='w-full h-full ' src={men} alt={men} />
       <div className='top-[152px] left-10 absolute'>
        <span className='font-Jost font-medium text-[14px] text-[#222222]'>HOT LIST</span>
        <h4 className='font-Jost font-medium text-[26px] text-[#222222]'>WOMEN COLLECTION</h4>
        <p className='relative  font-Jost font-medium text-[14px] text-[#222222] mt-[5px] pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 hover:after:w-[50px]'>SHOP NOW</p>
       </div>
            </div>

              <div className='relative overflow-hidden'>
              <img className='w-full h-full ' src={kind} alt={kind} />
            <div className='top-[152px] left-10 absolute'>
        <span className='font-Jost font-medium text-[14px] text-[#222222]'>HOT LIST</span>
        <h4 className='font-Jost font-medium text-[26px] text-[#222222]'>WOMEN COLLECTION</h4>
        <p className='relative  font-Jost font-medium text-[14px] text-[#222222] mt-[5px] pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 hover:after:w-[50px]'>SHOP NOW</p>
          </div>
              </div>
              <div className='relative overflow-hidden '>
                        <img className='w-full h-full ' src={gift} alt={gift} />
       <div className='top-[109px] left-10 absolute'>
        <h4 className='font-Jost font-bold text-[28px] text-[#222222] '>E-GIFT CARDS</h4>
        <p className='font-Jost font-normal leading-[24px] text-[14px] text-[#222222] w-[213px] mt-3 mb-4 '>Surprise someone with the gift they 
            really want.</p>
        <span className='relative  font-Jost font-medium text-[14px] text-[#222222] mt-[5px] pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 hover:after:w-[50px]'>SHOP NOW</span>
       </div>
        </div>
        </div>
     </Container>
    </div>
  )
}

export default Colection