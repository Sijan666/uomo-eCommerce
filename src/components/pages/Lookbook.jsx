import React from "react";
import Container from "../Container";
import productImage from "/src/assets/productImage.png";

const Lookbook = () => {
  return (
    <Container>
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
                <h2 className="text-[26px] text-white font-Jost">
                  Women's T-Shirts
                </h2>
              </div>

              <img
                src={productImage}
                alt=""
                className="absolute top-[1px] right-[10px] w-[433px]  mix-blend-multiply border-[1px] border-black "
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
              src={productImage}
              alt=""
              className="absolute -top-[64px] right-[20px] w-[350px] h-[526px] "
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
              src={productImage}
              alt=""
              className="absolute  w-[903px] h-[1129px] "
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
              src={productImage}
              alt=""
              className="absolute left-[165px] w-[618px] h-[837px]"
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
              src={productImage}
              alt=""
              className="absolute -top-[64px] left-[304px] w-[344px] h-[605px]"
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
              src={productImage}
              alt=""
              className="absolute -top-[103px] left-[233px] w-[448px] h-[605px]"
            />
          </div>
        </div>
      </div>
      <div className="group inline-flex flex-col items-center mt-[50px] mb-[101px] cursor-pointer">
        <a className="text-[#222222] font-medium text-[14px] leading-10">
          SHOW MORE
        </a>

        <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </Container>
  );
};

export default Lookbook;
