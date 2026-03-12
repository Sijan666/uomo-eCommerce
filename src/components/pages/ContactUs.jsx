import React from "react";
import Image from "../Image";
import img from "../../assets/contact/img.png";
import Button from "../Button";

const ContactUs = () => {
  return (
    <>
      <div className="max-w-[930px] mx-auto pt-[50px] md:pt-[70px] lg:pt-24 mb-8 px-4 lg:px-0">
        <h1 className="font-Jost font-bold text-[22px] md:text-[28px] lg:text-[35px] text-[#222222]">
          Contact Us
        </h1>
      </div>

      <div>
        <Image imgSrc={img} className="h-full w-full mx-auto" />
      </div>

      <div className="max-w-[930px] mx-auto mt-[50px] mb-[100px] px-4 lg:px-0">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10 md:gap-25 lg:gap-[198px]">
          <div className="text-center md:text-left">
            <h1 className="font-Jost font-medium text-[20px] md:text-[22px] lg:text-[26px] text-[#222222]">
              Store in London
            </h1>
            <h2 className="font-Jost text-[13px] md:text-[14px] text-[#767676] mt-[23px]">
              1418 River Drive, Suite 35 Cottonhall, CA 9622
            </h2>
            <h3 className="font-Jost text-[13px] md:text-[14px] text-[#767676]">
              United States
            </h3>
            <h4 className="font-Jost text-[13px] md:text-[14px] text-[#767676] mt-[23px]">
              sale@uomo.com
            </h4>
            <h4 className="font-Jost text-[13px] md:text-[14px] text-[#767676]">
              +1 246-345-0695
            </h4>
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-Jost font-medium text-[20px] md:text-[22px] lg:text-[26px] text-[#222222]">
              Store in Istanbul
            </h1>
            <h2 className="font-Jost text-[13px] md:text-[14px] text-[#767676] mt-[23px]">
              1418 River Drive, Suite 35 Cottonhall, CA 9622
            </h2>
            <h3 className="font-Jost text-[13px] md:text-[14px] text-[#767676]">
              United States
            </h3>
            <h4 className="font-Jost text-[13px] md:text-[14px] text-[#767676] mt-[23px]">
              sale@uomo.com
            </h4>
            <h4 className="font-Jost text-[13px] md:text-[14px] text-[#767676]">
              +1 246-345-0695
            </h4>
          </div>
        </div>

        <div className="mt-[62px]">
          <h1 className="font-Jost font-bold text-[20px] md:text-[22px] lg:text-[24px] text-[#222222]">
            Get In Touch
          </h1>
          <div className="relative border border-[#E4E4E4] mt-[27px] mb-[30px]">
            <span className="absolute -top-2.5 left-3 bg-white px-1 font-Jost text-[13px] md:text-[14px] text-[#222222] leading-6">
              Name *
            </span>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 font-Jost text-[13px] md:text-[14px] text-[#222222] outline-[#222222]"
            />
          </div>
          <input
            type="email"
            placeholder="Email address *"
            className="w-full border border-[#E4E4E4] p-4 font-Jost text-[13px] md:text-[14px] text-[#767676] outline-[#222222] mb-[27px]"
          />
          <textarea
            placeholder="Your Review"
            className="w-full border border-[#E4E4E4] p-4 font-Jost text-[13px] md:text-[14px] text-[#767676] h-[150px] md:h-[180px] lg:h-[213px] resize-none outline-[#222222] mb-[30px]"
          />
          <Button
            className="bg-[#222222] text-white font-Jost font-medium leading-6 text-[13px] md:text-[14px] py-[18px] md:py-[22px] px-[50px] md:px-[74px] hover:bg-[#333333] transition-colors uppercase"
            btnText="submit"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;