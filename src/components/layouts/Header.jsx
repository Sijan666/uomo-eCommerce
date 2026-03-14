import { IoSearch } from "react-icons/io5"
import Container from "../Container"
import Image from "../Image"
import logo from '/logo.png'
import { FaFacebookF, FaInstagram, FaPinterest, FaRegHeart, FaRegUser, FaTwitter, FaYoutube } from "react-icons/fa"
import { AiOutlineShopping } from "react-icons/ai"
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { useState } from "react"
import { Link } from "react-router-dom"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { IoIosArrowDown, IoMdClose } from "react-icons/io"

const Header = () => {
    const [show , setShow] = useState(false)
    
    const handleShow =()=>{
        setShow(!show)
    }

    const [activeMenu, setActiveMenu] = useState("main");

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
                                    <Link to={'/'}>
                                        <Image imgSrc={logo}/>
                                    </Link>
                                </div>
                                {/* navbar */}
                                <nav>
                                    <ul className="flex gap-x-10  items-center mt-px">
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack">
                                            <Link to={'/'}>
                                                HOME
                                            </Link>
                                        </li>
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack">
                                            <Link to={'/shop'}>
                                                SHOP
                                            </Link>
                                        </li>
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack">COLLECTION</li>
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack">JOURNAL</li>
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack">
                                            <Link to={'/lookbook'}>
                                                LOOKBOOK
                                            </Link>
                                        </li>
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack">PAGES</li>
                                    </ul>
                                </nav>
                            </div>
                            {/* right side */}
                            <div className="icons">
                                <div className="flex gap-x-8 items-center">
                                    <IoSearch  size={20} className="cursor-pointer"/>
                                    <FaRegUser  size={20} className="cursor-pointer"/>
                                    <FaRegHeart  size={20} className="cursor-pointer"/>
                                    <div className="relative">
                                        <AiOutlineShopping  size={20} className="cursor-pointer"/>
                                        <div className="absolute top-3 left-2 ">
                                            <div className="h-4 w-4 text-center bg-[#B9A16B] rounded-full">
                                                <p className="text-white font-medium font-Jost text-[10px]">3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <HiMiniBars3CenterLeft   size={20} className="cursor-pointer"/>
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
                                        <IoMdClose onClick={() => { handleShow(); setActiveMenu("main"); }} size={20} className="cursor-pointer"/>
                                    ) : (
                                        <HiMiniBars3CenterLeft onClick={handleShow} size={20} className="cursor-pointer"/>
                                    )}
                                    
                                    <nav className={`absolute top-12 left-0 w-full min-h-screen z-50 py-5 bg-white origin-top transition-all duration-300 ease-in-out ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"} px-3.5`}>
                                        {/* Search Bar */}
                                        <div className="flex justify-between items-center relative mt-2">
                                            <input type="text" placeholder="Search products..." className="pt-2.5 pb-2 px-3.5 border border-[#E4E4E4] w-full mx-auto outline-none text-[14px]"/>
                                            <IoSearch size={18} className="absolute top-3 right-4 text-[#222222]"/>
                                        </div>
                                        <div className="pb-[293px] border-b border-[#E4E4E4]">
                                            {/* main menu */}
                                            {activeMenu === "main" && (
                                                <ul className="flex flex-col gap-y-5 mt-4">
                                                    <li className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">HOME <MdKeyboardArrowRight size={18} /></li>
                                                    <li onClick={() => setActiveMenu("shop")} className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">
                                                        SHOP <MdKeyboardArrowRight size={18} />
                                                    </li>
                                                    <li className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">COLLECTION <MdKeyboardArrowRight size={18} /></li>
                                                    <li className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">JOURNAL <MdKeyboardArrowRight size={18} /></li>
                                                    <li className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">LOOKBOOK <MdKeyboardArrowRight size={18} /></li>
                                                    <li onClick={() => setActiveMenu("pages")} className="font-Jost font-medium text-[14px] beforeAfterBlack flex justify-between items-center cursor-pointer">
                                                        PAGES <MdKeyboardArrowRight size={18} />
                                                    </li>
                                                </ul>
                                            )}
                                            {/* shop sub menu */}
                                            {activeMenu === "shop" && (
                                                <div className="mt-4">
                                                    <div onClick={() => setActiveMenu("main")} className="flex items-center gap-x-2 mb-5 cursor-pointer text-[#222222] pb-2 border-b border-[#E4E4E4]">
                                                        <MdKeyboardArrowLeft size={22} />
                                                        <p className="font-Jost font-bold text-[13px] tracking-wide">SHOP</p>
                                                    </div>
                                                    <ul className="flex flex-col gap-y-4">
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer"><Link to={'/shop/men'}>Men's Fashion</Link></li>
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer"><Link to={'/shop/women'}>Women's Fashion</Link></li>
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer"><Link to={'/shop/accessories'}>Accessories</Link></li>
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer"><Link to={'/shop/sale'}>Sale & Offers</Link></li>
                                                    </ul>
                                                </div>
                                            )}
                                            {/* pages sub menu */}
                                            {activeMenu === "pages" && (
                                                <div className="mt-4">
                                                    <div onClick={() => setActiveMenu("main")} className="flex items-center gap-x-2 mb-5 cursor-pointer text-[#222222] pb-2 border-b border-[#E4E4E4]">
                                                        <MdKeyboardArrowLeft size={22} />
                                                        <p className="font-Jost font-bold text-[13px] tracking-wide">PAGES</p>
                                                    </div>
                                                    <ul className="flex flex-col gap-y-4">
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">About</li>
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer"><Link to={'/contact'}>Contact Us</Link></li>
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer"><Link to={'/locator'}>Store Locator</Link></li>
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer">FAQ</li>
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer"><Link to={'/comingSoon'}>Coming Soon</Link></li>
                                                        <li className="font-Jost font-normal text-[14px] text-[#222222] cursor-pointer"><Link to={'/notFound'}>404</Link></li>
                                                    </ul>
                                                </div>
                                            )}
                                            
                                        </div>
                                        {/* icons */}
                                        <div className=" mt-7.5">
                                            <button className="text-sm font-Jost font-bold text-[#222222] flex gap-x-[13px] items-center">
                                                <FaRegUser size={16}/> MY ACCOUNT
                                            </button>
                                        </div>
                                        
                                        <div className="mt-5 flex gap-x-[27px] items-center">
                                            <p className="text-sm font-Jost text-[#767676]">Language</p>
                                            <div className="flex items-center gap-x-4 cursor-pointer">
                                                <h4 className="text-[13px] font-Jost text-[#222222]">United Kingdom  |  English</h4>
                                                <IoIosArrowDown size={14}/>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 flex gap-x-[31px] items-center">
                                            <p className="text-sm font-Jost text-[#767676]">Currency</p>
                                            <div className="flex items-center gap-x-4 cursor-pointer">
                                                <h4 className="text-[13px] font-Jost text-[#222222]">$ USD</h4>
                                                <IoIosArrowDown size={14}/>
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
                                    <Link to={'/'}>
                                        <Image imgSrc={logo}/>
                                    </Link>
                                </div>
                                
                                {/* Cart Icon */}
                                <div className="relative">
                                    <AiOutlineShopping  size={24} className="cursor-pointer"/>
                                    <div className="absolute -top-1 -right-2 ">
                                        <div className="h-4 w-4 flex justify-center items-center bg-[#B9A16B] rounded-full">
                                            <p className="text-white font-medium font-Jost text-[10px]">3</p>
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
    )
}

export default Header