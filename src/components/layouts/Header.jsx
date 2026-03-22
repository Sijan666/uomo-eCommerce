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
import headerCart from '../../assets/headerCart.png'
import Button from "../Button";



const Header = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [showShop, setShowShop] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [count , setCount] = useState(0)

  const handleIncrement = ()=>{
    setCount(count + 1)
  }

  const handleDecrement = ()=>{
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleShow = () => {
    setShow(!show);
  };

  const handleCart = () => {
    setShowCart(!showCart);
  };
  
  const handleShop = () => {
    setShowShop(!showShop);
    setShowJournal(false);
  };

  const handleJournal = () => {
    setShowJournal(!showJournal);
    setShowShop(false);
    setShowPage(false);
  };

  const handlePage = () => {
    setShowPage(!showPage);
    setShowShop(false);
    setShowJournal(false);
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
    setShowShop(false);
    setShowJournal(false);
    setShowPage(false);
  };

  return (
    <>
      <header>
        <div className="pt-[29px] pb-[19px]">
          <Container>
            {/* large device header */}
            <div className="hidden md:block ">
              <div className="flex flex-col lg:flex-row gap-y-5 lg:justify-between items-center">
                {/* right side */}
                <div className="logoandNav flex flex-col lg:flex-row gap-y-5 lg:gap-x-14 items-center">
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
                          <div className="absolute md:top-30 lg:top-19 left-0 p-10 w-full bg-white z-99 border-t border-b border-[#E4E4E4]">
                            <Container>
                              <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-10">
                                <div className="shopandpages">
                                  <div className="shop">
                                    <h4 className="text-sm font-Jost font-medium text-[#767676] pb-3">
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
                                    <h4 className="text-sm font-Jost font-medium text-[#767676] pb-3">
                                      PRODCUT PAGES
                                    </h4>
                                    <div className="flex flex-col gap-y-5 items-start mt-3">
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Default
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Images Left
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Image Grid
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Image Slider
                                      </button>
                                      <button className="text-sm text-[#222222] cursor-pointer beforeAfterBlack">
                                        Images Stacked
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="product">
                                  <h4 className="text-sm font-Jost font-medium text-[#767676] pb-3">
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
                                  <h4 className="text-sm font-Jost font-medium text-[#767676] pb-3">
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
                                  <Image imgSrc={dropDownShop} className={'w-full'}/>
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
                          <div className="absolute md:top-30 lg:top-19 left-1/2 -translate-x-1/2 p-10  w-[795px] bg-white z-99 border-t border-b border-[#E4E4E4]">
                            {/* <Container> */}
                            <div className="grid grid-cols-3 gap-10">
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
                          <div className="absolute md:top-30 lg:top-19 left-1/2 -translate-x-1/2 p-10 w-[420px] bg-white z-99 border-t border-b border-[#E4E4E4] shadow-md">
                            <div className="product">
                              <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-3">
                                
                                <Link to={'/blog'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Blog
                                </Link>
                                <Link to={'/shop'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Shop
                                </Link>
                                <Link to={'/contact'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Contact Us
                                </Link>
                                <Link to={'/about'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  About
                                </Link>
                                <Link to={'/lookbook'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Lookbook
                                </Link>
                                <Link to={'/shopList'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Shop Page
                                </Link>
                                <Link to={'/locator'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Locator
                                </Link>
                                <Link to={'/terms'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Terms & Conditions
                                </Link>
                                <Link to={'/blogList'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Blog List
                                </Link>
                                <Link to={'/comingSoon'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Coming Soon
                                </Link>
                                <Link to={'/cart'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Cart
                                </Link>
                                <Link to={'/shipping'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Shipping
                                </Link>
                                <Link to={'/receivedOrder'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Received Order
                                </Link>
                                <Link to={'/login'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Login
                                </Link>
                                <Link to={'/register'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Register
                                </Link>
                                <Link to={'/tracking'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Tracking
                                </Link>
                                <Link to={'/dashboard'} className="text-sm tracking-wide text-[#222222] font-Jost hover:text-gray-500 transition-colors text-left uppercase beforeAfterBlack">
                                  Dashboard
                                </Link>

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
                    {/* search bar */}
                    <div className="search">
                      <IoSearch onClick={handleSearch} size={20} className="cursor-pointer" />
                        {showSearch && (
                          <div className="absolute md:top-30 lg:top-19 left-0 p-10 w-full bg-white z-99 border-t border-b border-[#E4E4E4]">
                            <Container>
                              <div className="my-15">
                                <h4 className="text-sm font-medium font-Jost text-[#767676]">WHAT ARE YOU LOOKING FOR?</h4>
                                <div className="pt-7.5 flex justify-between items-center">
                                  <input type="text" placeholder="SEARCH PRODUCTS" className="py-2.5 border-b-2 border-[#767676] outline-none w-full text-sm font-medium font-Jost text-[#767676]"/>
                                  <div className="relative ">
                                    <IoSearch onClick={handleSearch} size={20} className="cursor-pointer absolute -top-1.5 right-0" />
                                  </div>
                                </div>
                                <div className="pt-7.5 flex flex-col gap-[9px]">
                                  <h4 className="text-sm font-medium font-Jost text-[#767676]">QUICKLINKS</h4>
                                  <ul className="flex flex-col gap-[9px] text-sm text-[#222222] font-Jost">
                                    <li className="leading-[35px] cursor-pointer">New Arrivals</li>
                                    <li className="leading-[35px] cursor-pointer">Dresses</li>
                                    <li className="leading-[35px] cursor-pointer">Accessories</li>
                                    <li className="leading-[35px] cursor-pointer">Footwear</li>
                                    <li className="leading-[35px] cursor-pointer">Sweatshirt</li>
                                  </ul>
                                </div>
                              </div>
                            </Container>
                          </div>
                        )}
                    </div>
                    {/* login side bar */}
                    <div className="login">
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
                    {/* cart side bar */}
                    <div className="cart">
                      <div className="relative cursor-pointer" onClick={handleCart} >
                        <AiOutlineShopping size={20} className="cursor-pointer" />
                        <div className="absolute top-3 left-2 ">
                          <div className="h-4 w-4 text-center bg-[#B9A16B] rounded-full">
                            <p className="text-white font-medium font-Jost text-[10px]">
                              3
                            </p>
                          </div>
                        </div>
                      </div>
                      {showCart && (
                        <>
                          <div
                            onClick={() => setShowCart(false)}
                            className="fixed inset-0 bg-black/30 z-999"
                          />
                          <div className="fixed top-0 right-0 h-full w-[420px] bg-[#FAF9F8] px-10 py-[33px] shadow-lg z-1000 overflow-y-auto animate-slideIn">
                            <div className="flex justify-between items-center mb-14 ">
                              <h2 className="font-Jost font-medium text-[16px] text-[#222222] uppercase">
                                SHOPPING BAG ( 1 )
                              </h2>
                              <IoMdClose
                                size={20}
                                className="cursor-pointer"
                                onClick={() => setShowCart(false)}
                              />
                            </div>
                            {/* product */}
                            <div className="flex flex-col gap-y-5 pb-[155px] border-b border-[#E4E4E4]">
                              {/* first item */}
                              <div className="pb-5 border-b border-[#E4E4E4]">
                                <div className="flex justify-between">
                                  <div className="left">
                                    <div className="flex gap-x-5">
                                      <div className="left">
                                        <Image imgSrc={headerCart}/>
                                      </div>
                                      <div className="right">
                                        <h4 className="text-base font-Jost text-[#222222] pb-05">Zessi Dresses</h4>
                                        <p className="text-sm font-Jost text-[#767676]">Color:  Yellow</p>
                                        <p className="text-sm font-Jost text-[#767676]">Size: L</p>
                                        <div className="flex gap-x-2.5 items-center mt-2">
                                          <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleDecrement}>-</button>
                                          <p className="text-sm font-Jost text-[#767676]">{count}</p>
                                          <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleIncrement}>+</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="right flex flex-col gap-y-[70px]">
                                    <IoMdClose size={20} className="cursor-pointer"/>
                                    <h4 className="text-[18px] font-Jost text-[#222222]">$99</h4>
                                  </div>
                                </div>
                              </div>
                              {/* second item */}
                              <div className="pb-5 border-b border-[#E4E4E4]">
                                <div className="flex justify-between">
                                  <div className="left">
                                    <div className="flex gap-x-5">
                                      <div className="left">
                                        <Image imgSrc={headerCart}/>
                                      </div>
                                      <div className="right">
                                        <h4 className="text-base font-Jost text-[#222222] pb-05">Kirby T-Shirt</h4>
                                        <p className="text-sm font-Jost text-[#767676]">Color:  Yellow</p>
                                        <p className="text-sm font-Jost text-[#767676]">Size: L</p>
                                        <div className="flex gap-x-2.5 items-center mt-2">
                                          <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleDecrement}>-</button>
                                          <p className="text-sm font-Jost text-[#767676]">{count}</p>
                                          <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleIncrement}>+</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="right flex flex-col gap-y-[70px]">
                                    <IoMdClose size={20} className="cursor-pointer"/>
                                    <h4 className="text-[18px] font-Jost text-[#222222]">$99</h4>
                                  </div>
                                </div>
                              </div>
                              {/* third item */}
                              <div className="pb-5 border-b border-[#E4E4E4]">
                                <div className="flex justify-between">
                                  <div className="left">
                                    <div className="flex gap-x-5">
                                      <div className="left">
                                        <Image imgSrc={headerCart}/>
                                      </div>
                                      <div className="right">
                                        <h4 className="text-base font-Jost text-[#222222] pb-05">Cableknit Shawl</h4>
                                        <p className="text-sm font-Jost text-[#767676]">Color:  Yellow</p>
                                        <p className="text-sm font-Jost text-[#767676]">Size: L</p>
                                        <div className="flex gap-x-2.5 items-center mt-2">
                                          <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleDecrement}>-</button>
                                          <p className="text-sm font-Jost text-[#767676]">{count}</p>
                                          <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleIncrement}>+</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="right flex flex-col gap-y-[70px]">
                                    <IoMdClose size={20} className="cursor-pointer"/>
                                    <h4 className="text-[18px] font-Jost text-[#222222]">$99</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-y-5">
                              <div className="flex justify-between">
                                <h4 className="text-sm font-Jost font-medium text-[#222222]">SUBTOTAL:</h4>
                                <h4 className="text-sm font-Jost font-medium text-[#222222]">$176.00</h4>
                              </div>
                              <Button btnText={'View Cart'} className={'uppercase text-sm font-Jost font-medium hover:text-[#222222] text-white bg-[#222222] hover:bg-[#E4E4E4] pt-[22px] pb-3.5'}/>
                              <Button btnText={'Checkout'} className={'uppercase text-sm font-Jost font-medium hover:text-[#222222] text-white bg-[#222222] hover:bg-[#E4E4E4] pt-[22px] pb-3.5'}/>
                            </div>
                          </div>
                        </>
                      )}
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
                    <AiOutlineShopping onClick={handleCart} size={24} className="cursor-pointer" />
                    <div className="absolute -top-1 -right-2 ">
                      <div className="h-4 w-4 flex justify-center items-center bg-[#B9A16B] rounded-full">
                        <p className="text-white font-medium font-Jost text-[10px]">
                          3
                        </p>
                      </div>
                    </div>
                    {showCart && (
                      <>
                        {/* Overlay */}
                        <div
                          onClick={() => setShowCart(false)}
                          className="fixed inset-0 bg-black/30 z-999"
                        />
                        <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#FAF9F8] px-5 sm:px-10 py-6 sm:py-[33px] shadow-lg z-1000 overflow-y-auto animate-slideIn">
                          {/* Header */}
                          <div className="flex justify-between items-center mb-8 sm:mb-14">
                            <h2 className="font-Jost font-medium text-[16px] text-[#222222] uppercase">
                              SHOPPING BAG ( 1 )
                            </h2>
                            <IoMdClose
                              size={20}
                              className="cursor-pointer"
                              onClick={() => setShowCart(false)}
                            />
                          </div>
                          {/* Product List */}
                          <div className="flex flex-col gap-y-5 pb-[100px] sm:pb-[155px] border-b border-[#E4E4E4]">
                            {/* First item */}
                            <div className="pb-5 border-b border-[#E4E4E4]">
                              <div className="flex justify-between">
                                <div className="left flex-1">
                                  <div className="flex gap-x-3 sm:gap-x-5">
                                    <div className="left shrink-0">
                                      <Image imgSrc={headerCart} />
                                    </div>
                                    <div className="right">
                                      <h4 className="text-base font-Jost text-[#222222] pb-0.5">Zessi Dresses</h4>
                                      <p className="text-sm font-Jost text-[#767676]">Color:  Yellow</p>
                                      <p className="text-sm font-Jost text-[#767676]">Size: L</p>
                                      <div className="flex gap-x-2.5 items-center mt-2">
                                        <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleDecrement}>-</button>
                                        <p className="text-sm font-Jost text-[#767676]">{count}</p>
                                        <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleIncrement}>+</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="right flex flex-col justify-between items-end gap-y-8 sm:gap-y-[70px] pl-2">
                                  <IoMdClose size={20} className="cursor-pointer" />
                                  <h4 className="text-[18px] font-Jost text-[#222222]">$99</h4>
                                </div>
                              </div>
                            </div>
                            {/* Second item */}
                            <div className="pb-5 border-b border-[#E4E4E4]">
                              <div className="flex justify-between">
                                <div className="left flex-1">
                                  <div className="flex gap-x-3 sm:gap-x-5">
                                    <div className="left shrink-0">
                                      <Image imgSrc={headerCart} />
                                    </div>
                                    <div className="right">
                                      <h4 className="text-base font-Jost text-[#222222] pb-0.5">Kirby T-Shirt</h4>
                                      <p className="text-sm font-Jost text-[#767676]">Color:  Yellow</p>
                                      <p className="text-sm font-Jost text-[#767676]">Size: L</p>
                                      <div className="flex gap-x-2.5 items-center mt-2">
                                        <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleDecrement}>-</button>
                                        <p className="text-sm font-Jost text-[#767676]">{count}</p>
                                        <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleIncrement}>+</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="right flex flex-col justify-between items-end gap-y-8 sm:gap-y-[70px] pl-2">
                                  <IoMdClose size={20} className="cursor-pointer" />
                                  <h4 className="text-[18px] font-Jost text-[#222222]">$99</h4>
                                </div>
                              </div>
                            </div>
                            {/* Third item */}
                            <div className="pb-5 border-b border-[#E4E4E4]">
                              <div className="flex justify-between">
                                <div className="left flex-1">
                                  <div className="flex gap-x-3 sm:gap-x-5">
                                    <div className="left shrink-0">
                                      <Image imgSrc={headerCart} />
                                    </div>
                                    <div className="right">
                                      <h4 className="text-base font-Jost text-[#222222] pb-0.5">Cableknit Shawl</h4>
                                      <p className="text-sm font-Jost text-[#767676]">Color:  Yellow</p>
                                      <p className="text-sm font-Jost text-[#767676]">Size: L</p>
                                      <div className="flex gap-x-2.5 items-center mt-2">
                                        <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleDecrement}>-</button>
                                        <p className="text-sm font-Jost text-[#767676]">{count}</p>
                                        <button className="text-sm font-Jost text-[#767676] cursor-pointer" onClick={handleIncrement}>+</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="right flex flex-col justify-between items-end gap-y-8 sm:gap-y-[70px] pl-2">
                                  <IoMdClose size={20} className="cursor-pointer" />
                                  <h4 className="text-[18px] font-Jost text-[#222222]">$99</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Footer / Subtotal */}
                          <div className="mt-4 flex flex-col gap-y-5">
                            <div className="flex justify-between">
                              <h4 className="text-sm font-Jost font-medium text-[#222222]">SUBTOTAL:</h4>
                              <h4 className="text-sm font-Jost font-medium text-[#222222]">$176.00</h4>
                            </div>
                            <Button 
                              btnText={'View Cart'} 
                              className={'uppercase text-sm font-Jost font-medium hover:text-[#222222] text-white bg-[#222222] hover:bg-[#E4E4E4] pt-[18px] pb-3 sm:pt-[22px] sm:pb-3.5'}
                            />
                            <Button 
                              btnText={'Checkout'} 
                              className={'uppercase text-sm font-Jost font-medium hover:text-[#222222] text-white bg-[#222222] hover:bg-[#E4E4E4] pt-[18px] pb-3 sm:pt-[22px] sm:pb-3.5'}
                            />
                          </div>
                          
                        </div>
                      </>
                    )}
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
