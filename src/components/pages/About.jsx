import React from "react";
import Container from "../Container";
import Image from "../Image";
import FooterTop from "../layouts/FooterTop";

import topImage from "../../assets/images/images_top.png";
import img1 from "../../assets/images/images_1.png";
import mango from "../../assets/images/mango.png";
import zara from "../../assets/images/zara.png";
import reebok from "../../assets/images/reebok.png";
import asos from "../../assets/images/asos.png";
import stradivarius from "../../assets/images/stradivarius.png";
import adidas from "../../assets/images/adidas.png";
import bershka from "../../assets/images/bershka.png";

const About = () => {
  return (
    <>
      <section className="py-16 font-Jost">
        <Container>
          <div className="max-w-[960px] mx-auto">
            <h2 className=" text-[20px] text-center md:text-left md:text-[35px] font-bold tracking-[3px] mb-12 uppercase">
              ABOUT UOMO
            </h2>
          </div>

          <div className="mb-12.5">
            <Image imgSrc={topImage} className="w-full h-auto" />
          </div>
          {/* our story */}
          <div className="max-w-[960px] mx-auto">
            <div className="mb-10">
              <h3 className="text-base md:text-[26px] font-medium text-[#222222] mb-[15px] uppercase">OUR STORY</h3>
              <p className="text-[#222222] font-medium text-[14px] md:text-base leading-7.5 mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-[#222222] text-[12px] md:text-[14px] leading-7.5 md:w-[930px]">
                Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth air grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air saw it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-40 mt-[33px] mb-[29px]">
              <div className="flex-1">
                <h4 className="text-base text-[#222222] font-medium mb-5">Our Mission</h4>
                <p className="text-[#222222] text-[14px] leading-relaxed">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="flex-1">
                <h4 className="text-base text-[#222222] font-medium mb-5">Our Vision</h4>
                <p className="text-[#222222] text-[14px] leading-relaxed">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          {/* THE COMPANY SECTION - Updated to match new screenshots */}
          <div className="max-w-[1170px] mx-auto mt-[29px]">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-[45px] items-center ">
              <div className="w-full h-full">
                <Image imgSrc={img1} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-base font-medium text-[#767676] mb-4 uppercase">
                  THE COMPANY
                </h4>
                <p className="text-[#222222] text-[14px] leading-7 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. 
                </p>
                <p className="text-[#222222] text-[14px] leading-7">
                Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FooterTop />

      <section className="py-12 border-t border-[#f0f0f0]">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-10">
            <Image imgSrc={mango} className="h-5 w-auto" />
            <Image imgSrc={zara} className="h-4 w-auto" />
            <Image imgSrc={reebok} className="h-5 w-auto" />
            <Image imgSrc={asos} className="h-4 w-auto" />
            <Image imgSrc={stradivarius} className="h-5 w-auto" />
            <Image imgSrc={adidas} className="h-6 w-auto" />
            <Image imgSrc={bershka} className="h-4 w-auto" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;