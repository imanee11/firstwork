import React from 'react';
import image from '../../constants/image';

import { FaCheckCircle, FaClock, FaUserTie, FaTag } from 'react-icons/fa';
import NavBar from './NavBar';


const Main = () => {
    return (
        <>
            <div className=''>
                {/* hero section */}
                <section className="z-10 relative">
                    <div className="relative">
                        {/* Background Image */}
                        <img
                            src={image.bg}
                            alt="Background"
                            className="w-full lg:h-[95vh] h-[60vh] object-cover"
                        />

                        {/* Overlay Content */}
                        <div className="absolute top-0 left-0 right-0">
                            <NavBar />

                            <div className="lg:w-[60vw] px-[5vw] lg:py-[10vh] py-[5vh]">
                                <p className="font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-likeblack">
                                    Simplifiez Votre Gestion Comptable avec Notre Expertise
                                    <span className="text-secondary italic"> Franco-Marocaine</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Section */}
                <section className="absolute bg-white rounded-t-[3rem] lg:top-[75vh] top-[50vh]  left-0 right-0 z-20">
                    <div className="text-black py-[10vh] sm:py-[15vh] md:py-[20vh]">
                        hiigig
                    </div>
                </section>

            </div>

        </>
    );
};

export default Main;