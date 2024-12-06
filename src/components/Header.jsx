import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";


export default function Header() {
  const [toggle, setToggle] = useState(false);

  const ShowSideMenu = () =>{
    setToggle(true);
  }

  const hideShowSideMenu = () =>{
    setToggle(false);
  }


  const links = [
    {
      icon: <IoIosSearch className='inline mr-1'/>,
      name: "Search"
    },
    {
      icon: <CiDiscount1 className='inline mr-1'/>,
      name: "Offers",
      sup: "new"
    },
    {
      icon: <IoMdHelpCircleOutline className='inline mr-1'/>,
      name: "Help"
    },
    {
      icon: <CiUser className='inline mr-1'/>,
      name: "Sign In"
    },
    {
      icon: <BsCart2  className='inline mr-1'/>,
      name: "Cart"
    },
  ]

  return (
    <>
      <div onClick={hideShowSideMenu} className='black-overlay w-full h-full fixed duration-500' style={{
        opacity : toggle ? 1 : 0,
        visibility : toggle ? "visible" : "hidden",
        }}>
          <div onClick={(e) => {
            e.stopPropagation();
          }} className='bg-white w-[300px] h-full absolute duration-700' style={{
            left : toggle ? '0%' : '-100%',
          }} >
            <RxCrossCircled onClick={hideShowSideMenu} className='absolute right-2 top-2 text-2xl cursor-pointer' />
          </div>
        </div>
      <header className="p-[15px] shadow-xl">
      <div className="container mxauto max-w-[1200px] flex items-center">
        <div className='w-[90px]'>
          <img className='w-full' src="images/logo.png" alt></img>
        </div>
        <div className=''>
          <span className='font-bold border-b-2 border-black mr-2'>Ratanda</span>Jodhpur, Rajasthan, India <RxCaretDown onClick={ShowSideMenu} className='cursor-pointer font-bold inline text-[1.3rem] text-[#ff5200]' />
        </div>
        <nav className='list-none flex gap-5 ml-auto'>
          {links.map(
            (link, index) =>{

              return <li className='hover:text-[#ff5200] cursor-pointer' key={index}>{link.icon}{link.name}<sup className='pl-1 text-[#ff5200]'>{link.sup}</sup></li>

            }
          )}



          

        </nav>
        </div>   
      </header>
    </>
  )
}
