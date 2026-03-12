
import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
// import bg from "../../assets/error.png";

const Error = () => {
  return (
    // <section
    //   className="w-full pt-[319px] pb-[319px] flex items-center justify-center bg-center bg-no-repeat"
    //   style={{
    //     backgroundImage: `url(${bg})`,
    //     backgroundSize: "contain",
    //   }}
    // >
    //   <div className="text-center px-4">
    //     <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
    //       OOPS!
    //     </h1>

    //     <p className="text-xl text-gray-600 mb-2">Page not found.</p>

    //     <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
    //       Sorry, we couldn’t find the page you were looking for. We suggest
    //       that you return to home page.
    //     </p>

    //     <button
    //       onClick={() => window.history.back()}
    //       className="bg-black text-white px-8 py-3 text-sm tracking-widest hover:bg-gray-800 transition"
    //     >
    //       GO BACK
    //     </button>
    //   </div>
    // </section>
    <>
    <section id="error">
      <div className="">
        <div className="bg-[url('/src/assets/error2.jpg')] bg-center bg-cover bg-no-repeat w-full py-[319px]">
          <Container>
            <div className="text-center">
              <h3 className="text-[#222222] font-bold font-Jost text-[50px] md:text-[100px]">OOPS!</h3>
              <h4 className="text-[26px] font-Jost text-[#222222]">Page not found.</h4>
              <p className="pt-[13px] pb-6 text-[10px] md:text-[14px] text-[#222222] font-Jost leading-6 md:w-[475px] mx-auto">Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.</p>
              <div className="btn">
                <Link to={'/'}>
                  <button className="md:pr-[137px] px-10 py-4 md:pl-[140px] md:pt-[21px] md:pb-[15px] bg-[#222222] text-white text-[14px] font-Jost font-medium cursor-pointer">GO BACK</button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
    </>
  );
};

export default Error;