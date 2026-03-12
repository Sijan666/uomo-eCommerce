import React from 'react'
import Container from '../Container'
import Image from '../Image'
import StoreMap from '../../assets/maps.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const StoreLocation = () => {
  return (
    <section>
      <Container>
        <h2 className="font-Jost font-bold text-[28px] md:text-[35px] text-[#222222]">
          Store Location
        </h2>

        <div className="pt-[30px] md:pt-[49px] pb-[80px] md:pb-[150px] grid grid-cols-1 lg:grid-cols-[468px_930px] gap-[10px]">

          {/* Left Side */}
          <div>

            {/* Input */}
            <div className="relative">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-[20px] top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />

              <input
                type="text"
                placeholder="Enter your Country or city"
                className="border border-[#E4E4E4] font-Jost text-[14px] text-[#767676] w-full px-[20px] pr-[50px] py-[16px]"
              />
            </div>

            {/* Store Item */}
            <div className="mt-[30px]">
              <h3 className="font-Jost font-medium text-[18px] text-[#222222]">
                Store in London
              </h3>

              <p className="text-[14px] mt-[11px]">
                1418 River Drive, Suite 35 Cottonhall, CA 9622
              </p>
              <p className="text-[14px]">United States</p>
              <p className="text-[14px]">+1 246-345-0695</p>
              <p className="text-[14px]">10 am - 10 pm EST, 7 days a week</p>

              <button className="mt-[20px] text-[13px] font-medium">
                SEE ON THE MAP
              </button>

              <div className="mt-[30px] border border-[#E4E4E4] w-full"></div>
            </div>

            {/* Store Item */}
            <div className="mt-[30px]">
              <h3 className="font-Jost font-medium text-[18px] text-[#222222]">
                Store in Istanbul
              </h3>

              <p className="text-[14px] mt-[11px]">
                1418 River Drive, Suite 35 Cottonhall, CA 9622
              </p>
              <p className="text-[14px]">United States</p>
              <p className="text-[14px]">+1 246-345-0695</p>
              <p className="text-[14px]">10 am - 10 pm EST, 7 days a week</p>

              <button className="mt-[20px] text-[13px] font-medium">
                SEE ON THE MAP
              </button>

              <div className="mt-[30px] border border-[#E4E4E4] w-full"></div>
            </div>

            {/* Store Item */}
            <div className="mt-[30px]">
              <h3 className="font-Jost font-medium text-[18px] text-[#222222]">
                Store in New York
              </h3>

              <p className="text-[14px] mt-[11px]">
                1418 River Drive, Suite 35 Cottonhall, CA 9622
              </p>
              <p className="text-[14px]">United States</p>
              <p className="text-[14px]">+1 246-345-0695</p>
              <p className="text-[14px]">10 am - 10 pm EST, 7 days a week</p>

              <button className="mt-[20px] text-[13px] font-medium">
                SEE ON THE MAP
              </button>

              <div className="mt-[30px] border border-[#E4E4E4] w-full"></div>
            </div>

          </div>

          {/* Right Side Image */}
          <div>
            <Image imgSrc={StoreMap} className="w-full h-[752px] overflow-hidden" />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default StoreLocation