import React from 'react';

import { MdOutlineSearch } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import image from '../../constants/image';



const NavBar = () => {
    return (
        <>
            <nav className='flex items-center justify-between px-[3vw] py-4'>
                {/* left */}
                <div className='flex space-x-8 items-center'>
                    {/* <h1 className='text-primary font-semibold'><span className=''>AC</span> centre</h1> */}
                    <img src={image.logo} alt="" className='w-[6vw]' />
                    <ul className='flex space-x-8'>
                        <li className='font-semibold text-[15px] text-likeblack hover:text-primary transition duration-300 cursor-pointer '><a href="">Home</a></li>
                        <li className='font-semibold text-[15px] text-likeblack hover:text-primary transition duration-300 cursor-pointer'><a href="">About</a></li>
                        <li className='font-semibold text-[15px] text-likeblack hover:text-primary transition duration-300 cursor-pointer'><a href="">Services</a></li>
                        <li className='font-semibold text-[15px] text-likeblack hover:text-primary transition duration-300 cursor-pointer'><a href="">Contact</a></li>
                    </ul>
                </div>

                {/* middle */}
                {/* <div>

                </div> */}

                {/* right */}
                <div className='flex items-center space-x-4'>
                    {/* <MdOutlineSearch size={25} className='text-likeblack hover:text-primary transition duration-300 cursor-pointer' /> */}
                    <button className='hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] relative font-heading  bg-transparent hover:bg-primary hover:text-white text-primary px-4 py-[1.6vh] border-[1px] border-likeblack rounded-xl font-semibold text-[14px]  overflow-hidden group transition duration-300'>
                        <span className='relative z-10 flex gap-2 items-center'>
                            <FaPhone size={14}  />
                            <a href="tel:+1234567890">
                                12 34 56 78 90
                            </a>
                        </span>
                        {/* <span className="absolute inset-0 bg-primary rounded-full -translate-x-full  group-hover:translate-x-0 transition-transform duration-300"></span> */}
                    </button>
                </div>
            </nav>

        </>
    );
};

export default NavBar;