import React from "react";
import Container from "../Container";
import Image from "../Image";
import card1 from '../../assets/Lookbook/card1.png'
import card2 from '../../assets/Lookbook/card2.png'
import card3 from '../../assets/Lookbook/card3.png'
import card4 from '../../assets/Lookbook/card4.png'
import card5 from '../../assets/Lookbook/card5.png'
import card6 from '../../assets/Lookbook/card6.png'


const Lookbook = () => {
  return (
    <Container className="pt-24 pb-25">
      <h1 className="text-[35px] font-Jost font-bold">LOOKBOOK</h1>

      <div className=" md:grid lg:grid-cols-2 md:gap-[30px] mt-[42px]">
        {/* 1st div (two small cards) */}
        <div className="flex flex-col gap-[30px]">
          <div className="">
            <div className="relative lg:w-[690px] h-[398px] overflow-hidden cursor-pointer bg-[#D6001C] flex items-end justify-between ">
              <div className="p-12 z-10">
                <p className="text-[18px] text-red-100 font-Jost">
                  Starting at $19
                </p>
                <h2 className="text-[26px] mt-2 text-white font-Jost beforeAfter2">
                  Women's T-Shirts
                </h2>
              </div>

              {/* <img
                src="/src/assets/Lookbook/card1.png"
                src="/src/assets/Lookbook/card1.png"
                src="/src/assets/Lookbook/card1.png"
                alt=""
                className="absolute  right-2.5 mix-blend-multiply "
              /> */}
              <Image imgSrc={card1} className={'absolute  right-2.5 mix-blend-multiply'}/>
            </div>
          </div>

          <div className="group relative lg:w-[690px] h-[398px] overflow-hidden cursor-pointer bg-[#EBE6E0] flex items-end justify-between">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-Jost">
                STARTING AT $21
              </p>
              <h2 className="text-[26px] text-[#222222] font-medium font-Jost beforeAfter3">
                Slim Fit Cotton Shorts
              </h2>
            </div>

            {/* <img
              src="/src/assets/Lookbook/card2.png"
              alt=""
              className="absolute  right-5 "
            /> */}
            <Image imgSrc={card2} className={'absolute  right-5'}/>
          </div>
        </div>

        {/* 2nd div (big card) */}
        <div className="">
          <div className="group relative lg:w-[690px] h-[398px] md:h-[826px] overflow-hidden cursor-pointer flex items-end justify-between">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-medium font-Jost">
                STARTING AT $39
              </p>
              <h2 className="text-[26px] text-[#000000] font-medium font-Jost beforeAfter3">
                Men’s Sportswear
              </h2>
            </div>

            {/* <img
              src="/src/assets/Lookbook/card3.png"
              alt=""
              className="absolute"
            /> */}
            <Image imgSrc={card3} className={'absolute w-full'}/>
          </div>
        </div>

        {/* 3rd div (big card) */}
        <div className="my-8 md:my-0">
          <div className="group relative lg:w-[690px] md:h-[826px] overflow-hidden cursor-pointer bg-[#F4F3F8] flex items-end justify-between">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-medium font-Jost">
                STARTING AT $39
              </p>
              <h2 className="text-[26px] text-[#000000] font-medium font-Jost beforeAfter3">
                Knee-length Cotton Shorts
              </h2>
            </div>

            {/* <img
              src="/src/assets/Lookbook/card4.png"
              alt=""
              className="absolute left-[165px] "
            /> */}
            <Image imgSrc={card4} className={'absolute left-[165px]'}/>
          </div>
        </div>

        {/* 4th div (two small cards) */}
        <div className="flex flex-col gap-[30px]">
          <div className="group relative lg:w-[690px] h-[398px] overflow-hidden cursor-pointer bg-[#EAE9E7] flex items-end justify-between">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-medium font-Jost">
                STARTING AT $19
              </p>
              <h2 className="text-[26px] text-[#000000] font-medium font-Jost beforeAfter3">
                Canvas Trainers
              </h2>
            </div>

            {/* <img
              src="/src/assets/Lookbook/card5.png"
              alt=""
              className="absolute left-[304px] "
            /> */}
            <Image imgSrc={card5} className={'absolute left-[304px]'}/>
          </div>

          <div className="group relative lg:w-[690px] h-[398px] overflow-hidden cursor-pointer bg-[#EBF4EC] flex items-end justify-between">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-medium font-Jost">
                STARTING AT $21
              </p>
              <h2 className="text-[26px] text-[#000000] font-medium font-Jost beforeAfter3">
                Slim Fit Cotton Shorts
              </h2>
            </div>

            {/* <img
              src="/src/assets/Lookbook/card6.png"
              alt=""
              className="absolute  left-[233px] "
            /> */}
            <Image imgSrc={card6} className={'absolute  left-[233px]'}/>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center cursor-pointer mt-10 ">
        <a className=" text-[#222222] font-medium text-[14px] leading-10 beforeAfter3">SHOW MORE </a>
        
      </div>

    </Container>
  );
};

export default Lookbook;
