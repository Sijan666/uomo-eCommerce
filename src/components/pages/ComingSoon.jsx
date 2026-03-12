import React from "react";
import CountdownTimer from "../../npm/CountdownTimer";
import comingSoonImage from "../../assets/images/coming_soon_background.jpg";

const ComingSoon = () => {
  return (
    <section
      id="coming_soon"
      className="w-full"
      style={{ backgroundImage: `url(${comingSoonImage})` }}
    >
      <div className="min-h-screen max-w-[771px] mx-auto flex justify-center bg-cover bg-center bg-no-repeat relative">
        <div className=" h-[407px] w-full mt-[212px] absolute">
          {/* Heading */}
          <h1 className="w-[771px] h-[145px] text-[100px] flex items-center justify-center font-black uppercase text-[#222222] tracking-tighter font-Jost">
            Coming Soon
          </h1>

          {/* Subtitle */}
          <p className="font-Jost text-[14px] font-normal text-[#222222] text-center leading-[24px]  mb-[45px]">
            Sorry, we couldn't find the page you where looking for. We suggest
            that you
            <br />
            return to home page.
          </p>

          {/* Countdown */}
          <div className="flex justify-center font-Jost mb-[49px]">
            <CountdownTimer />
          </div>

          {/* Email + Join */}
          <div className="flex justify-center gap-x-[20px] w-[720px]">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 pt-[20px] pb-[16px] pl-[21px] box-border border border-[#E4E4E4] border-r-0 text-[14px] text-[#767676] bg-white outline-none font-Jost font-normal font-[14px] w-[550px] h-[60px]"
            />
            <button
              className="bg-black text-white pt-[20px] pb-[16px] pl-[61px] pr-[69px] text-[14px] font-medium  uppercase font-Jost hover:bg-[#767676] transition-colors 
          w-[150px] h-[60px]"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
