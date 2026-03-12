import React, { useState } from "react";

const FloatingInput = ({ type, label }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const active = focus || value;

  return (
    <div className="relative w-full mb-6 font-jost">
      <input
        type={type}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full h-[48px] px-4 text-sm outline-none border transition
          ${active ? "border-black" : "border-gray-300"}`}
        style={{ paddingTop: "16px", paddingBottom: "12px" }}
      />
      <label
        className={`absolute left-3 px-1 bg-white transition-all duration-200
          ${active ? "-top-2 text-xs text-black" : "top-1/2 -translate-y-1/2 text-sm text-gray-400"}`}
      >
        {label}
      </label>
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex justify-center py-20 bg-[#f3f3f3] font-jost">
      <div className="w-[651px]">

        {/* LOGIN TAB */}
        <div className="flex justify-center gap-10 mb-8 text-base font-bold tracking-widest text-gray-500">
          <span className="border-b-2 border-black pb-1 text-black">LOGIN</span>
          <span className="hover:text-black cursor-pointer border-b-2 border-transparent pb-1">REGISTER</span>
        </div>

        {/* LOGIN FORM */}
        <div className="border border-gray-200 p-8 bg-white shadow-sm">
          <FloatingInput type="text" label="Username or email address *" />
          <FloatingInput type="password" label="Password *" />

          <div className="flex justify-between items-center text-sm mb-6">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="underline text-gray-600">Lost password?</a>
          </div>

          <button className="w-full h-[50px] bg-[#1f1f1f] text-white tracking-widest text-sm hover:bg-gray-900 transition">
            LOG IN
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            No account yet?
            <span className="underline cursor-pointer text-black ml-1">Create Account</span>
          </p>
        </div>

        {/* REGISTER TAB */}
        <div className="flex justify-center gap-10 mt-14 mb-8 text-sm tracking-widest text-gray-500">
          <span className="hover:text-black cursor-pointer">LOGIN</span>
          <span className="border-b-2 border-black pb-1 text-black text-base font-bold">REGISTER</span>
        </div>

        {/* REGISTER FORM */}
        <div className="border border-gray-200 p-8 bg-white shadow-sm">
          <FloatingInput type="text" label="Username" />
          <FloatingInput type="email" label="Email address *" />
          <FloatingInput type="password" label="Password *" />

          <p className="text-xs text-gray-500 leading-5 mb-6">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account,
            and for other purposes described in our privacy policy.
          </p>

          <button className="w-full h-[50px] bg-[#1f1f1f] text-white tracking-widest text-sm hover:bg-gray-900 transition">
            REGISTER
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;