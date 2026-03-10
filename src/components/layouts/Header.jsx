import { IoSearch } from "react-icons/io5"
import Container from "../Container"
import Image from "../Image"
import logo from '/logo.png'
import { FaRegHeart, FaRegUser } from "react-icons/fa"
import { AiOutlineShopping } from "react-icons/ai"
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [show , setShow] = useState(false)
    
    const handleShow =()=>{
        setShow(!show)
    }

    return (
        <>
        <header>
            <div className="pt-[29px] pb-[19px]">
                <Container>
                    {/* large device header */}
                    <div className="hidden md:block">
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
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack">LOOKBOOK</li>
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
                    <div className="md:hidden w-full relative">
                        <div className="flex justify-between items-center">
                            <div className="nav">
                                <HiMiniBars3CenterLeft onClick={handleShow} size={20} className="cursor-pointer"/>
                                <nav className={`absolute top-12 left-0 w-full z-50 py-5 rounded-[10px] bg-white/5 backdrop-blur-[50px] border border-gray-300 shadow-lg origin-top transition-all duration-300 ease-in-out ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"}`}>
                                    <ul className="flex flex-col gap-y-8 items-center mt-px">
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
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack cursor-pointer">COLLECTION</li>
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack cursor-pointer">JOURNAL</li>
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack cursor-pointer">LOOKBOOK</li>
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack cursor-pointer">PAGES</li>
                                    </ul>
                                    <div className="flex justify-between mt-8 px-5">
                                        <FaRegUser size={20} className="cursor-pointer hover:text-gray-500 transition-colors"/>
                                        <IoSearch size={20} className="cursor-pointer hover:text-gray-500 transition-colors"/>
                                        <FaRegHeart size={20} className="cursor-pointer hover:text-gray-500 transition-colors"/>
                                    </div>
                                </nav>
                            </div>
                            {/* logo */}
                            <div className="logo">
                                <Link to={'/'}>
                                    <Image imgSrc={logo}/>
                                </Link>
                            </div>
                            <div className="relative">
                                <AiOutlineShopping  size={20} className="cursor-pointer"/>
                                <div className="absolute top-3 left-2 ">
                                    <div className="h-4 w-4 text-center bg-[#B9A16B] rounded-full">
                                        <p className="text-white font-medium font-Jost text-[10px]">3</p>
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