import { IoSearch } from "react-icons/io5";
import Container from "../Container";
import Image from "../Image";
import logo from "/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaRegHeart,
  FaRegUser,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import dropDownShop from "../../assets/dropDownShop.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const [activeMenu, setActiveMenu] = useState("main");

  const [showShop, setShowShop] = useState(false);

  const [showJournal, setShowJournal] = useState(false);

  const [showPage, setShowPage] = useState(false);

  const handleShop = () => {
    setShowShop(!showShop);
    setShowJournal(false);
  };

  const handleJournal = () => {
    setShowJournal(!showJournal);
    setShowShop(false);
  };

  const handlePage = () => {
    setShowPage(!showPage);
    setShowShop(false);
    setShowJournal(false);
  };

  return (
    <>
      <header>
        <div className="pt-[29px] pb-[19px]">
          <Container>
            {/* large device header */}
            <div className="hidden md:block ">
              <div className="flex justify-between items-center">
                {/* right side */}
                <div className="logoandNav flex gap-x-14 items-center">
                  {/* logo */}
                  <div className="logo">
                    <Link to={"/"}>
                      <Image imgSrc={logo} />
                    </Link>
                  </div>
                  {/* navbar */}
                  <nav>
                    <ul className="flex gap-x-10  items-center mt-px">
                      <li className="font-Jost font-medium text-[14px] beforeAfterBlack">
                        <Link to={"/"}>HOME</Link>
                      </li>
                      <div className="shop">
                        <li
                          onClick={handleShop}
                          className="font-Jost font-medium text-[14px] beforeAfterBlack"
                        >
                          SHOP
                        </li>
                        {showShop && (
                          <div className="absolute top-19 left-0 p-10 w-full bg-white z-99 border-t border-b border-[#E4E4E4]">
                            <Container>
                              <div className="flex justify-between">
                                <div className="shopandpages">
                                  <div className="shop">
                                    <h4 className="text-sm font-Jost font-medium text-[#767676]">
                                      SHOP PAGES
                                    </h4>
                                    <div className="flex flex-col gap-y-5 items-start mt-3">
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Default
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Topbar
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Collapse
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Simple
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Masonry
                                      </button>
                                    </div>
                                  </div>
                                  <div className="page mt-7.5">
                                    <h4 className="text-sm font-Jost font-medium text-[#767676]">
                                      SHOP PAGES
                                    </h4>
                                    <div className="flex flex-col gap-y-5 items-start mt-3">
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Default
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Topbar
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Collapse
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Simple
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Masonry
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="product">
                                  <h4 className="text-sm font-Jost font-medium text-[#767676]">
                                    OTHER PAGES
                                  </h4>
                                  <div className="flex flex-col gap-y-5 items-start mt-3">
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Collection
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      LookBook
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Categories Page
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Shopping Cart
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Wishlist
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Order Tracking
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Checkout
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Checkout – 2 Columns
                                    </button>
                                  </div>
                                </div>
                                <div className="elements">
                                  <h4 className="text-sm font-Jost font-medium text-[#767676]">
                                    ELEMENTS
                                  </h4>
                                  <div className="flex flex-col gap-y-5 items-start mt-3">
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Accordion
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Pricing Table
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Google Maps
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Message Box
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Progress Bars
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Charts
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Icon Box
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Product Tabs
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Products Grid
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Tabs
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Video Players
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Team
                                    </button>
                                  </div>
                                </div>
                                <div className="elements">
                                  <h4 className="text-sm font-Jost font-medium text-[#767676] opacity-0">
                                    ELEMENTS
                                  </h4>
                                  <div className="flex flex-col gap-y-5 items-start mt-3">
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Buttons
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Testimonials
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Social Icons
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Blog Posts
                                    </button>
                                  </div>
                                </div>
                                <div className="">
                                  <Image imgSrc={dropDownShop} />
                                </div>
                              </div>
                            </Container>
                          </div>
                        )}
                      </div>
                      <li className="font-Jost font-medium text-[14px] beforeAfterBlack">
                        COLLECTION
                      </li>
                      <div className="journal">
                        <li
                          onClick={handleJournal}
                          className="font-Jost font-medium text-[14px] beforeAfterBlack"
                        >
                          JOURNAL
                        </li>
                        {showJournal && (
                          <div className="absolute top-19 left-1/2 -translate-x-1/2 p-10  w-[795px] bg-white z-99 border-t border-b border-[#E4E4E4]">
                            {/* <Container> */}
                            <div className="flex justify-between">
                              <div className="blgstyle">
                                <div className="blgstyle">
                                  <h4 className="text-sm font-Jost font-medium text-[#767676]">
                                    BLOG STYLES
                                  </h4>
                                  <div className="flex flex-col gap-y-5 items-start mt-3">
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Alternative
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Small images
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Blog chess
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Masonry grid
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Infinit scrollingFEATURE
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      With background
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Blog flat
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Default flat
                                    </button>
                                    <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                      Blog mask
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product">
                                <h4 className="text-sm font-Jost font-medium text-[#767676]">
                                  SINGLE POST
                                </h4>
                                <div className="flex flex-col gap-y-5 items-start mt-3">
                                  <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                    Standard Post
                                  </button>
                                  <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                    Image Post
                                  </button>
                                  <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                    Video Post
                                  </button>
                                  <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                    Audio Post
                                  </button>
                                  <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                    Gallery Post
                                  </button>
                                </div>
                              </div>
                              <div className="elements">
                                <h4 className="text-sm font-Jost font-medium text-[#767676]">
                                  NAVIGATION
                                </h4>
                                <div className="flex flex-col gap-y-5 items-start mt-3">
                                  <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                    Simple
                                  </button>
                                  <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                    Image Background
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* </Container> */}
                          </div>
                        )}
                      </div>
                      <li className="font-Jost font-medium text-[14px] beforeAfterBlack">
                        <Link to={"/lookbook"}>LOOKBOOK</Link>
                      </li>
                      <div className="pages">
                        <li
                          onClick={handlePage}
                          className="font-Jost font-medium text-[14px] beforeAfterBlack relative"
                        >
                          PAGES
                        </li>
                        {showPage && (
                          <div className="absolute top-19 left-1/2 -translate-x-1/2 p-10  w-[260px] bg-white z-99 border-t border-b border-[#E4E4E4]">
                            <div className="product">
                              <div className="flex flex-col gap-y-5 items-start mt-3">
                                <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                  About
                                </button>
                                <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                  Contact Us
                                </button>
                                <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                  Store Locator
                                </button>
                                <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                  FAQ
                                </button>
                                <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                  Coming Soon
                                </button>
                                <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                  404
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </ul>
                  </nav>
                </div>
                {/* right side */}
                <div className="icons">
                  <div className="flex gap-x-8 items-center">
                    <IoSearch size={20} className="cursor-pointer" />
                    <div className="">
                      <FaRegUser size={20} className="cursor-pointer" onClick={() => setShowLogin(!showLogin)}/>
                      {showLogin && (
                        <>
                          <div
                            onClick={() => setShowLogin(false)}
                            className="fixed inset-0 bg-black/30 z-999"
                          />
                          <div className="fixed top-0 right-0 h-full w-[420px] bg-white px-10 py-[33px] shadow-lg z-1000 overflow-y-auto animate-slideIn">
                            <div className="flex justify-between items-center mb-[31px]">
                              <h2 className="font-Jost font-medium text-[16px] text-[#222222] uppercase">
                                Login
                              </h2>
                              <IoMdClose
                                size={20}
                                className="cursor-pointer"
                                onClick={() => setShowLogin(false)}
                              />
                            </div>
                            <form>
                                <div className="flex flex-col items-center gap-7.5">
                                    {/* name */}
                                    <div className="input-container w-full ">
                                        <input type="text" id="" placeholder=" " className="input"/>
                                        <label className="label">Username or email address *</label>
                                    </div>
                                    {/* pass */}
                                    <div className="input-container w-full ">
                                        <input type="password" id="" placeholder=" " className="input"/>
                                        <label className="label">Password *</label>
                                    </div>
                                </div>
                            </form>
                            <div className="flex justify-between items-center my-7.5">
                              <div className="flex items-center gap-2">
                                <input type="checkbox" id="remember" className="w-4 h-4" />
                                <label
                                  htmlFor="remember"
                                  className="font-Jost text-[14px] leading-[26px] text-[#767676]"
                                >
                                  Remember me
                                </label>
                              </div>
                              <button className="font-Jost text-[14px] leading-6 text-[#222222] underline cursor-pointer">
                                Lost password?
                              </button>
                            </div>
                            <button className="w-full cursor-pointer bg-[#222222] text-white font-Jost font-medium text-[14px] py-[18px] hover:bg-[#333333] transition-colors uppercase mb-6">
                              Log In
                            </button>
                            <p className="font-Jost text-[14px] leading-6 text-[#767676] text-center">
                              No account yet?{" "}
                              <button className="text-[#222222] underline cursor-pointer">
                                Create Account
                              </button>
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                    <FaRegHeart size={20} className="cursor-pointer" />
                    <div className="relative">
                      <AiOutlineShopping size={20} className="cursor-pointer" />
                      <div className="absolute top-3 left-2 ">
                        <div className="h-4 w-4 text-center bg-[#B9A16B] rounded-full">
                          <p className="text-white font-medium font-Jost text-[10px]">
                            3
                          </p>
                        </div>
                      </div>
                    </div>
                    <HiMiniBars3CenterLeft
                      size={20}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* small device header */}
            <div className="fixed top-0 left-0 w-full z-99">
              <div className="md:hidden w-full relative bg-white p-4 md:p-0">
                <div className="flex justify-between items-center ">
                  <div className="nav">
                    {show ? (
                      <IoMdClose
                        onClick={() => {
                          handleShow();
                          setActiveMenu("main");
                        }}
                        size={20}
                        className="cursor-pointer"
                      />
                    ) : (
                      <HiMiniBars3CenterLeft
                        onClick={handleShow}
                        size={20}
                        className="cursor-pointer"
                      />
                    )}

                    <nav
                      className={`absolute top-12 left-0 w-full min-h-screen z-50 py-5 bg-white origin-top transition-all duration-300 ease-in-out ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"} px-3.5`}
                    >
                      {/* Search Bar */}
                      <div className="flex justify-between items-center relative mt-2">
                        <input
                          type="text"
                          placeholder="Search products..."
                          className="pt-2.5 pb-2 px-3.5 border border-[#E4E4E4] w-full mx-auto outline-none text-[14px]"
                        />
                        <IoSearch
                          size={18}
                          className="absolute top-3 right-4 text-[#222222]"
                        />
                      </div>
                      <div className="pb-[293px] border-b border-[#E4E4E4]">
                        {/* main menu */}
                        {activeMenu === "main" && (
                          <ul className="flex flex-col gap-y-5 mt-4">
                            <li className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">
                              HOME <MdKeyboardArrowRight size={18} />
                            </li>
                            <li
                              onClick={() => setActiveMenu("shop")}
                              className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer"
                            >
                              SHOP <MdKeyboardArrowRight size={18} />
                            </li>
                            <li className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">
                              COLLECTION <MdKeyboardArrowRight size={18} />
                            </li>
                            <li className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">
                              JOURNAL <MdKeyboardArrowRight size={18} />
                            </li>
                            <li className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">
                              LOOKBOOK <MdKeyboardArrowRight size={18} />
                            </li>
                            <li
                              onClick={() => setActiveMenu("pages")}
                              className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer"
                            >
                              PAGES <MdKeyboardArrowRight size={18} />
                            </li>
                          </ul>
                        )}
                        {/* shop sub menu */}
                        {activeMenu === "shop" && (
                          <div className="mt-4">
                            <div
                              onClick={() => setActiveMenu("main")}
                              className="flex items-center gap-x-2 mb-5 cursor-pointer text-[#222222] pb-2 border-b border-[#E4E4E4]"
                            >
                              <MdKeyboardArrowLeft size={22} />
                              <p className="font-Jost font-bold text-[13px] tracking-wide">
                                SHOP
                              </p>
                            </div>
                            <ul className="flex flex-col gap-y-4">
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                <Link to={"/shop/men"}>Men's Fashion</Link>
                              </li>
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                <Link to={"/shop/women"}>Women's Fashion</Link>
                              </li>
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                <Link to={"/shop/accessories"}>
                                  Accessories
                                </Link>
                              </li>
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                <Link to={"/shop/sale"}>Sale & Offers</Link>
                              </li>
                            </ul>
                          </div>
                        )}
                        {/* pages sub menu */}
                        {activeMenu === "pages" && (
                          <div className="mt-4">
                            <div
                              onClick={() => setActiveMenu("main")}
                              className="flex items-center gap-x-2 mb-5 cursor-pointer text-[#222222] pb-2 border-b border-[#E4E4E4]"
                            >
                              <MdKeyboardArrowLeft size={22} />
                              <p className="font-Jost font-bold text-[13px] tracking-wide">
                                PAGES
                              </p>
                            </div>
                            <ul className="flex flex-col gap-y-4">
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                About
                              </li>
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                <Link to={"/contact"}>Contact Us</Link>
                              </li>
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                <Link to={"/locator"}>Store Locator</Link>
                              </li>
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                FAQ
                              </li>
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                <Link to={"/comingSoon"}>Coming Soon</Link>
                              </li>
                              <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">
                                <Link to={"/notFound"}>404</Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      {/* icons */}
                      <div className=" mt-7.5">
                        <button className="text-sm font-Jost font-bold text-[#222222] flex gap-x-[13px] items-center">
                          <FaRegUser size={16} /> MY ACCOUNT
                        </button>
                      </div>

                      <div className="mt-5 flex gap-x-[27px] items-center">
                        <p className="text-sm font-Jost text-[#767676]">
                          Language
                        </p>
                        <div className="flex items-center gap-x-4 cursor-pointer">
                          <h4 className="text-[13px] font-Jost text-[#222222]">
                            United Kingdom | English
                          </h4>
                          <IoIosArrowDown size={14} />
                        </div>
                      </div>

                      <div className="mt-4 flex gap-x-[31px] items-center">
                        <p className="text-sm font-Jost text-[#767676]">
                          Currency
                        </p>
                        <div className="flex items-center gap-x-4 cursor-pointer">
                          <h4 className="text-[13px] font-Jost text-[#222222]">
                            $ USD
                          </h4>
                          <IoIosArrowDown size={14} />
                        </div>
                      </div>

                      <div className="mt-8 flex items-center gap-x-8 text-[#222222]">
                        <FaFacebookF size={15} className="cursor-pointer" />
                        <FaTwitter size={15} className="cursor-pointer" />
                        <FaInstagram size={15} className="cursor-pointer" />
                        <FaYoutube size={15} className="cursor-pointer" />
                        <FaPinterest size={15} className="cursor-pointer" />
                      </div>
                    </nav>
                  </div>

                  {/* logo */}
                  <div className="logo">
                    <Link to={"/"}>
                      <Image imgSrc={logo} />
                    </Link>
                  </div>

                  {/* Cart Icon */}
                  <div className="relative">
                    <AiOutlineShopping size={24} className="cursor-pointer" />
                    <div className="absolute -top-1 -right-2 ">
                      <div className="h-4 w-4 flex justify-center items-center bg-[#B9A16B] rounded-full">
                        <p className="text-white font-medium font-Jost text-[10px]">
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
