import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { FaPhone, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";




import image from "../../constants/image";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between px-[5vw] py-4 hero-content">
                {/* Left Section */}
                <div className="flex items-center space-x-[4vw]">
                    <img
                        src={image.logo2}
                        alt="Logo"
                        className="lg:w-[4vw] md:w-[8vw] w-[15vw]"
                    />
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 font-baloo">
                        <li className="font-semibold text-[15px] text-likeblack hover:text-secondary transition duration-300 cursor-pointer">
                            <a href="">Home</a>
                        </li>
                        <li className="font-semibold text-[15px] text-likeblack hover:text-secondary transition duration-300 cursor-pointer">
                            <a href="">About</a>
                        </li>
                        <li className="font-semibold text-[15px] text-likeblack hover:text-secondary transition duration-300 cursor-pointer">
                            <a href="">Services</a>
                        </li>
                        <li className="font-semibold text-[15px] text-likeblack hover:text-secondary transition duration-300 cursor-pointer">
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <button className="hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] relative  bg-likeblack/15 hover:bg-secondary text-likeblack  px-5 py-[2vh]  rounded-full font-semibold text-[14px] overflow-hidden group transition duration-300">
                        <span className="relative z-10">
                            <a
                                href="tel:+212745026956"
                                className="flex gap-2 items-center font-baloo"
                            >
                                <FaPhone size={14} />
                                <span className="hidden lg:block">06 74 50 26 95</span>
                            </a>
                        </span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-likeblack transition duration-300"
                    >
                        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`side fixed top-0 right-0 h-screen w-[75%] bg-white shadow-lg z-40 transform transition-transform duration-300 ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-4 right-4 text-black hover:text-primary transition duration-300"
                >
                    <FaTimes size={24} />
                </button>

                {/* Mobile Menu Links */}
                <div className="flex flex-col space-y-6 pt-16 px-6">
                    <a
                        href=""
                        className="flex items-center gap-5 text-[18px] font-semibold text-likeblack hover:text-primary transition duration-300"
                    >
                        {/* <IoHome size={24} className="inline-block" /> */}
                        Home
                    </a>
                    <a
                        href=""
                        className="flex items-center gap-5 text-[18px] font-semibold text-likeblack hover:text-primary transition duration-300"
                    >
                        {/* <FaInfoCircle size={24} className="inline-block" /> */}
                        About
                    </a>
                    <a
                        href=""
                        className="flex items-center gap-5 text-[18px] font-semibold text-likeblack hover:text-primary transition duration-300"
                    >
                        {/* <MdMiscellaneousServices size={24} className="inline-block" /> */}
                        Services
                    </a>
                    <a
                        href=""
                        className="flex items-center gap-5 text-[18px] font-semibold text-likeblack hover:text-primary transition duration-300"
                    >
                        {/* <FaAddressBook size={24} className="inline-block" /> */}
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;
