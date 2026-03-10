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
        </>
    )
}

export default Header