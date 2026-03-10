import { useState } from "react";
import Container from "../Container";

export default function PromoBannerShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center mt-[40px] sm:mt-[70px] lg:mt-[100px] mb-[10px] sm:mb-[20px] lg:mb-[44px]">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7.5 w-full">

            {/* Card 1 */}
            <div
              className="relative overflow-hidden cursor-pointer select-none bg-[#D6001C] flex flex-row items-end justify-between"
              style={{
                aspectRatio: "16/9",
                transform: hoveredIndex === 0 ? "scale(1.015)" : "scale(1)",
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >

              {/* Text content */}
              <div className="flex flex-col justify-end p-4 sm:p-4 md:p-6 z-10 lg:p-12">
                <p className="text-[12px] sm:text-[10px] md:text-[12px] lg:text-[18px] font-medium tracking-widest uppercase mb-1 sm:mb-2 font-Jost text-red-100 truncate">
                  Starting at $19
                </p>

                <h2 className="text-[12px] sm:text-[12px] md:text-[18px] lg:text-[26px] font-medium mb-3 sm:mb-5 md:mb-6 font-Jost text-white leading-tight">
                  Women's T-Shirts
                </h2>

                <div className="flex items-center gap-2">
                  <button className="font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-Jost relative pb-1 tracking-widest uppercase cursor-pointer duration-300 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[75%] after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                    SHOP NOW
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="h-full flex items-end shrink-0">
                <img
                  src="/src/assets/productImage.png"
                  alt="Women's T-Shirts"
                  className="h-full w-auto object-contain object-bottom opacity-30"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative overflow-hidden cursor-pointer select-none"
              style={{
                aspectRatio: "16/9",
                backgroundImage: "url('/src/assets/productImage.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: hoveredIndex === 1 ? "scale(1.015)" : "scale(1)",
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-white/30" />

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12 z-10">
               <p className="text-[12px] sm:text-[10px] md:text-[12px] lg:text-[18px] font-medium uppercase mb-1 sm:mb-2 ">
                  Starting at $39
                </p>

                <h2 className="w-full text-[12px] sm:text-[12px] md:text-[18px] lg:text-[26px] font-medium mb-3 sm:mb-5 md:mb-6 lg:mb-8 font-Jost text-black leading-tight">
                  Man's Sportswear
                </h2>

                <div className="flex items-center gap-2">
                  <button className="font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-Jost beforeAfterBlack">
                    SHOP NOW
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}