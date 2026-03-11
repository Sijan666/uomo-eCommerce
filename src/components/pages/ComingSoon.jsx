import React from "react";
import CountdownTimer from "../../npm/CountdownTimer";
import comingSoonImage from "../../assets/images/coming_soon_background.jpg";

const ComingSoon = () => {
  return (
    <section
      id="coming_soon"
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${comingSoonImage})` }}
    >
      <div className="bg-white max-w-[771px] w-full">

        {/* Heading */}
        <h1 className="font-Jost w-[771px] text-[100px] font-black uppercase text-[#222222] leading-none tracking-tighter font-Jost mb-[34px]">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="font-Jost text-[14px] font-normal text-[#222222] text-center leading-[24px]  mb-[30px]">
          Sorry, we couldn't find the page you where looking for. We suggest that you<br />
          return to home page.
        </p>

        {/* Countdown */}
        <div className="flex justify-center font-Jost mb-[54px]">
          <CountdownTimer />
        </div>

        {/* Email + Join */}
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 border border-[#ddd] border-r-0 text-sm text-[#aaa] bg-[#fafafa] outline-none font-Jost font-normal font-[14px] w-[720px] h-[60px]"
          />
          <button className="bg-black text-white px-7 py-3 text-[14px] font-medium tracking-widest uppercase font-Jost hover:bg-[#333] transition-colors w-[150px] h-[60px]">
            Join
          </button>
        </div>

      </div>
    </section>
  );
};

export default ComingSoon;