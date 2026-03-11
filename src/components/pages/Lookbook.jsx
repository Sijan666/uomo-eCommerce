import React from "react";
import Container from "../Container";


const Lookbook = () => {
  return (
    <Container className="mt-[96px]">
      <h1 className="text-[35px] font-Jost font-bold">LOOKBOOK</h1>

      <div className=" grid grid-cols-2 gap-[30px] mt-[42px]">
        {/* 1st div (two small cards) */}
        <div className="flex flex-col gap-[30px]">
          <div className="">
            <div className="relative w-[690px] h-[398px] overflow-hidden cursor-pointer bg-[#D6001C] flex items-end justify-between hover:scale-[1.015] transition-transform duration-500">
              <div className="p-12 z-10">
                <p className="text-[18px] text-red-100 font-Jost">
                  Starting at $19
                </p>
                <h2 className="text-[26px] mt-[8px] text-white font-Jost">
                  Women's T-Shirts
                </h2>
              </div>

              <img
                src="/src/assets/Lookbook/card1.png"
                alt=""
                className="absolute  right-[10px] mix-blend-multiply "
              />
            </div>
          </div>

          <div className="group relative w-[690px] h-[398px] overflow-hidden cursor-pointer bg-[#EBE6E0] flex items-end justify-between hover:scale-[1.015] transition-transform duration-500">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-Jost">
                STARTING AT $21
              </p>
              <h2 className="text-[26px] text-[#222222] font-medium font-Jost">
                Slim Fit Cotton Shorts
              </h2>
            </div>

            <img
              src="/src/assets/Lookbook/card2.png"
              alt=""
              className="absolute  right-[20px] "
            />
          </div>
        </div>

        {/* 2nd div (big card) */}
        <div>
          <div className="group relative w-[690px] h-[826px] overflow-hidden cursor-pointer flex items-end justify-between hover:scale-[1.015] transition-transform duration-500">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-medium font-Jost">
                STARTING AT $39
              </p>
              <h2 className="text-[26px] text-[#000000] font-medium font-Jost">
                Men’s Sportswear
              </h2>
            </div>

            <img
              src="/src/assets/Lookbook/card3.png"
              alt=""
              className="absolute"
            />
          </div>
        </div>

        {/* 3rd div (big card) */}
        <div>
          <div className="group relative w-[690px] h-[826px] overflow-hidden cursor-pointer bg-[#F4F3F8] flex items-end justify-between hover:scale-[1.015] transition-transform duration-500">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-medium font-Jost">
                STARTING AT $39
              </p>
              <h2 className="text-[26px] text-[#000000] font-medium font-Jost">
                Knee-length Cotton Shorts
              </h2>
            </div>

            <img
              src="/src/assets/Lookbook/card4.png"
              alt=""
              className="absolute left-[165px] "
            />
          </div>
        </div>

        {/* 4th div (two small cards) */}
        <div className="flex flex-col gap-[30px]">
          <div className="group relative w-[690px] h-[398px] overflow-hidden cursor-pointer bg-[#EAE9E7] flex items-end justify-between hover:scale-[1.015] transition-transform duration-500">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-medium font-Jost">
                STARTING AT $19
              </p>
              <h2 className="text-[26px] text-[#000000] font-medium font-Jost">
                Canvas Trainers
              </h2>
            </div>

            <img
              src="/src/assets/Lookbook/card5.png"
              alt=""
              className="absolute left-[304px] "
            />
          </div>

          <div className="group relative w-[690px] h-[398px] overflow-hidden cursor-pointer bg-[#EBF4EC] flex items-end justify-between hover:scale-[1.015] transition-transform duration-500">
            <div className="p-12 z-10">
              <p className="text-[18px] text-[#222222] font-medium font-Jost">
                STARTING AT $21
              </p>
              <h2 className="text-[26px] text-[#000000] font-medium font-Jost">
                Slim Fit Cotton Shorts
              </h2>
            </div>

            <img
              src="/src/assets/Lookbook/card6.png"
              alt=""
              className="absolute  left-[233px] "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center cursor-pointer mt-[40px] mb-[101px]">
        <a className="group text-[#222222] font-medium text-[14px] leading-10">SHOW MORE 
          <div className="w-full h-[2px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </a>
        
      </div>

    </Container>
  );
};

export default Lookbook;
