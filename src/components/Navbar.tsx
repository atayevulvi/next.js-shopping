import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
function Navbar() {
  return (
    <div className='bg-white py-4 sticky top-0 z-10'>
        <div className='container flex justify-between items-center'>
           <AiOutlineMenu className="sm:hidden text-[26px]"/>
           <Link href='/' className='text-4xl font-sembolid hover:text-red-400'>
            Logo
            </Link>

            <ul className='gap-6 hidden sm:flex cursor-pointer'>
                <Link href='/' className='navLink'>Home</Link>
                <li>Shop</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>Contact</li>
            </ul>

            <div className="flex gap-6 text-[26px]">
                <div className="relative cursor-pointer">
                  <AiOutlineShoppingCart/>
                  <div className="absolute top-[-15px] right-[-10px] bg-red-500 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                    0
                  </div>
                </div>
                <BsSearch className="text-[16px]"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar