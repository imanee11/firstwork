import React, { useState } from 'react';
import { MdOutlineSearch } from "react-icons/md";
import { FaPhone, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import image from '../../constants/image';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between px-[3vw] py-3 bg-white fixed left-0 right-0 top-0 z-50 ">
                {/* Left Section */}
                <div className="flex items-center space-x-8">
                    <img src={image.logo} alt="Logo" className="lg:w-[6vw] md:w-[8vw] w-[20vw]" />

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-10">
                        <li className="font-semibold text-[14px] text-likeblack hover:text-primary transition duration-300 cursor-pointer">
                            <a href="">Home</a>
                        </li>
                        <li className="font-semibold text-[14px] text-likeblack hover:text-primary transition duration-300 cursor-pointer">
                            <a href="">About</a>
                        </li>
                        <li className="font-semibold text-[14px] text-likeblack hover:text-primary transition duration-300 cursor-pointer">
                            <a href="">Services</a>
                        </li>
                        <li className="font-semibold text-[14px] text-likeblack hover:text-primary transition duration-300 cursor-pointer">
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <button className="hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] relative font-heading bg-transparent hover:bg-primary hover:text-white text-primary px-4 py-[1.6vh] border-[1px] border-likeblack rounded-xl font-semibold text-[14px] overflow-hidden group transition duration-300">
                        <span className="relative z-10">
                            <a href="tel:+1234567890" className="flex gap-2 items-center">
                                <FaPhone size={14} />
                                <p className="hidden lg:block md:block">12 34 56 78 90</p>
                            </a>
                        </span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-primary transition duration-300"
                    >
                        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white w-full shadow-lg space-y-4 py-4 px-6 fixed top-[4.5rem] left-0 z-40">
                    <a href="" className="block text-[15px] font-semibold text-likeblack hover:text-primary transition duration-300">Home</a>
                    <a href="" className="block text-[15px] font-semibold text-likeblack hover:text-primary transition duration-300">About</a>
                    <a href="" className="block text-[15px] font-semibold text-likeblack hover:text-primary transition duration-300">Services</a>
                    <a href="" className="block text-[15px] font-semibold text-likeblack hover:text-primary transition duration-300">Contact</a>
                </div>
            )}

            {/* Spacer to prevent content overlap */}
            {/* <div className="h-[4.5rem] md:h-[4rem]"></div> */}
        </>
    );
};

export default NavBar;
