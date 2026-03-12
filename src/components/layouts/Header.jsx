<<<<<<< HEAD
import React, { useState } from 'react'
import Container from '../Container'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { CiUser } from 'react-icons/ci'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'


const Header = () => {
    let [show, setshow] = useState(true) 
    return (
        <>
         <div className=''>
    <Container>
        <div className="relative main md:py-7 py-4  flex items-center justify-between bg-white ">
            <div className="logo">
                <img src={logo} alt={{logo}} />
            </div>

           {
            show && (
               <ul className=' md:static flex absolute left-0 top-full md:items-center w-full  gap-x-15 justify-center flex-col md:flex-row bg-green-100 md:bg-transparent p-5 md:p-0'>
           <li>
            <Link className='relative  font-Jost uppercase text-[#222222] text-sm font-medium  pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 
         hover:after:w-[50%]'>Home</Link>
           </li>
           <li>
            <Link className='relative font-Jost uppercase text-[#222222] text-sm font-medium  pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 
         hover:after:w-[50%]'>shop</Link>
           </li>
           <li>
            <Link className='relative font-Jost uppercase text-[#222222] text-sm font-medium  pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 
         hover:after:w-[50%]'>COLLECTION</Link>
           </li>
            <li>
            <Link className='relative font-Jost uppercase text-[#222222] text-sm font-medium  pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 
         hover:after:w-[50%]'>Journal</Link>
           </li>
           <li>
            <Link className='relative font-Jost uppercase text-[#222222] text-sm font-medium  pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 
         hover:after:w-[50%]'>lookbook</Link>
           </li>
           <li>
            <Link className='relative font-Jost uppercase text-[#222222] text-sm font-medium  pb-2 
          after:content-[] after:absolute after:left-0 after:bottom-0 
          after:h-[2px] after:w-0 after:bg-black 
        after:transition-all after:duration-300 
         hover:after:w-[50%]'>pages</Link>
           </li>
            </ul>
            )
           }

            <div className="icon flex">

              <div className='md:flex hidden items-center  gap-8'>
                <Link className='text-[#222222]  w-5 h-5 hidden md:block '>
              <IoSearch  />
              </Link>
              
              <Link>
              <CiUser className='text-[#222222] w-5 h-5'/>
              </Link>
              <Link>
              <IoMdHeartEmpty className='text-[#222222] w-5 h-5'/>
              </Link>

              <Link className='relative'>
                <MdOutlineShoppingBag className='text-[#222222] w-6 h-5 '/>
                <span class="absolute bottom-0 right-0 
               bg-[#B9A16B] text-white 
               text-xs font-bold 
               w-3 h-3 flex items-center justify-center 
               rounded-full">
              3
           </span>
            </Link>
              </div>
           <div onClick={()=> setshow(!show)} className='ml-8 w-6 h-5 block '>
            <Link>
            <HiMiniBars3CenterLeft />
            </Link>
           </div>
            </div>
            
             
        </div>
        
        
    </Container>
    </div>
=======
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
                                        <li className="font-Jost font-medium text-[14px] beforeAfterBlack">
                                            <Link to={'/lookbook'}>
                                                LOOKBOOK
                                            </Link>
                                        </li>
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
>>>>>>> 99813c21e7e5df96a960dc8ddaf3533eae0e2642
        </>
    )
}

export default Header