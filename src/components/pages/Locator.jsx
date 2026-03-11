import React from 'react'
import Container from '../Container'
import Button from '../Button'
import Image from '../Image'
import locator from '../../assets/locator.png'
import { FiSearch, FiX } from 'react-icons/fi'

const Locator = () => {
  return (
    <div>
      <Container className='pt-[50px] md:pt-[70px] lg:pt-[96px] pb-[80px] lg:pb-[150px]'>
        <h1 className='font-Jost font-bold text-[22px] md:text-[28px] lg:text-[35px] uppercase'>Store Locator</h1>
        <div className='mt-[49px] flex flex-col lg:flex-row gap-10'>

            <div className='w-full lg:max-w-[468px]'>
            <div className='relative mb-[30px]'>
                <input
                    type="text"
                    placeholder="Enter your country or city"
                    className="w-full lg:w-[448px] border border-[#E4E4E4] p-4 pr-12 font-Jost text-[14px] text-[#767676] outline-[#222222]"
                />
                <FiSearch size={18} className='absolute right-10 top-4 text-[#767676] cursor-pointer'/>
            </div>
              <div className="md:text-left text-center">
                    <h1 className="font-Jost font-medium text-[16px] md:text-[18px] text-[#222222] mb-[11px]">
                        Store in London
                    </h1>
                    <h2 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        1418 River Drive, Suite 35 Cottonhall, CA 9622
                    </h2>
                    <h3 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        United States
                    </h3>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        sale@uomo.com
                    </h4>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        +1 246-345-0695
                    </h4>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        10 am - 10 pm EST, 7 days a week
                    </h4>
                    <Button btnText='See on the map' className='uppercase beforeAfterBlack mt-[20px] font-medium font-Jost text-[13px]'/>
              </div>

              <div className="md:text-left text-center border-t border-[#E4E4E4] mt-[30px]">
                    <h1 className="font-Jost font-medium text-[16px] md:text-[18px] text-[#222222] mb-[11px] pt-[30px]">
                        Store in Istanbul
                    </h1>
                    <h2 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        1418 River Drive, Suite 35 Cottonhall, CA 9622
                    </h2>
                    <h3 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        United States
                    </h3>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        sale@uomo.com
                    </h4>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        +1 246-345-0695
                    </h4>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        10 am - 10 pm EST, 7 days a week
                    </h4>
                    <Button btnText='See on the map' className='uppercase beforeAfterBlack mt-[20px] font-medium font-Jost text-[13px]'/>
              </div>

              <div className="md:text-left text-center border-t border-[#E4E4E4] mt-[30px]">
                    <h1 className="font-Jost font-medium text-[16px] md:text-[18px] text-[#222222] pt-[30px] mb-[11px]">
                        Store in New York
                    </h1>
                    <h2 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        1418 River Drive, Suite 35 Cottonhall, CA 9622
                    </h2>
                    <h3 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        United States
                    </h3>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        sale@uomo.com
                    </h4>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        +1 246-345-0695
                    </h4>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        10 am - 10 pm EST, 7 days a week
                    </h4>
                    <Button btnText='See on the map' className='uppercase beforeAfterBlack mt-[20px] font-medium font-Jost text-[13px]'/>
              </div>
            </div>

            <div className='relative w-full'>
                <Image imgSrc={locator} className='h-full w-full'/>
                <div className="w-[280px] md:w-[355px] py-[20px] md:py-[27px] px-[20px] md:px-[31px] bg-white absolute top-[40%] left-[10%] md:left-[20%]">
                    <div className='flex justify-between items-center mb-2'>
                        <h1 className="font-Jost font-medium text-[16px] md:text-[18px] text-[#222222]">
                            Store in Istanbul
                        </h1>
                        <FiX size={18} className='text-[#767676] cursor-pointer'/>
                    </div>
                    <h2 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        1418 River Drive, Suite 35 Cottonhall, CA 9622
                    </h2>
                    <h3 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        United States
                    </h3>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        +1 246-345-0695
                    </h4>
                    <h4 className="font-Jost text-[13px] md:text-[14px] leading-[24px] text-[#767676]">
                        10 am - 10 pm EST, 7 days a week
                    </h4>
                </div>
            </div>

        </div>
      </Container>
    </div>
  )
}

export default Locator