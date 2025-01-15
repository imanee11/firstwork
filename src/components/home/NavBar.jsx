import React from 'react';

import { MdOutlineSearch } from "react-icons/md";


const NavBar = () => {
    return (
        <>
            <nav className='flex items-center justify-between px-[3vw] py-4 bg-secondary'>
                {/* left */}
                <div className=''>
                    <h1>Logo</h1>
                </div>

                {/* right */}
                <div className='flex items-center space-x-4'>
                    <MdOutlineSearch size={25} className='text-likeblack' />
                    <button className='hover:shadow-[0px_0px_9px_1px_#669295] relative font-heading  bg-likeblack text-white px-4 py-[1.6vh] rounded-full font-semibold text-[14px]  overflow-hidden group transition duration-300'>
                        <span className='relative z-10'>
                            <a href="tel:+1234567890">
                                12 34 56 78 90
                            </a>
                        </span>
                        <span className="absolute inset-0 bg-primary rounded-full -translate-x-full  group-hover:translate-x-0 transition-transform duration-300"></span>
                    </button>
                </div>
            </nav>

        </>
    );
};

export default NavBar;