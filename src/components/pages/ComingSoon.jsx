import React from "react";
import CountdownTimer from "../../npm/CountdownTimer";
import comingSoonImage from "../../assets/images/coming_soon_background.jpg";

const ComingSoon = () => {
  return (
    <section
      id="coming_soon"
      className="w-full object-cover aspect-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${comingSoonImage})` }}
    >
      <div className="min-h-screen max-w-[771px] mx-auto md:mx-auto lg:mx-auto flex justify-center bg-cover bg-center bg-no-repeat relative md:px-0 lg:px-0">
        <div className=" lg:h-[407px] w-full mt-[120px] md:mt-40 lg:mt-[212px] absolute">
          {/* Heading */}
          <h1 className="lg:w-[771px] lg:h-[145px] text-[30px] mb-5 md:mb-0 md:text-[70px] lg:text-[100px]  flex items-center justify-center uppercase text-[#222222] tracking-tighter font-Jost font-bold">
            Coming Soon
          </h1>

          {/* Subtitle */}
          <p className="font-Jost text-[14px] font-normal text-[#222222] text-center leading-6  mb-[45px] px-4 md:px-0 lg:px-0">
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
          <div className="flex flex-col md:flex-row lg:flex-row mx-auto justify-center gap-x-5 w-full md:w-[520px] lg:w-[720px] lg:ml-3 gap-y-5 px-4 md:px-0 lg:px-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 pt-5 pb-4 pl-[21px] box-border border border-[#E4E4E4]  text-[14px] text-[#767676] bg-white outline-none
               font-Jost font-normal w-full md:w-[400px] lg:w-[550px] h-[60px] "
            />

            <button
              className="bg-black text-white pt-5 pb-4 pl-[61px] pr-[69px] text-[14px] font-medium uppercase font-Jost hover:bg-[#767676] transition-colors
               w-full md:w-[150px] h-[60px] cursor-pointer duration-300"
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
