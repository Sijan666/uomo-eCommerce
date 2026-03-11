
import React from "react";
import bg from "../../assets/error.png";

const Error = () => {
  return (
    <section
      className="w-full pt-[319px] pb-[319px] flex items-center justify-center bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
          OOPS!
        </h1>

        <p className="text-xl text-gray-600 mb-2">Page not found.</p>

        <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
          Sorry, we couldn’t find the page you were looking for. We suggest
          that you return to home page.
        </p>

        <button
          onClick={() => window.history.back()}
          className="bg-black text-white px-8 py-3 text-sm tracking-widest hover:bg-gray-800 transition"
        >
          GO BACK
        </button>
      </div>
    </section>
  );
};

export default Error;