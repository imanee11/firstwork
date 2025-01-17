import React from 'react';
import image from '../../constants/image';

import { FaCheckCircle, FaClock, FaUserTie, FaTag } from 'react-icons/fa';


const Main = () => {
    return (
        <>
            <div className='pt-[13vh]'>
                {/* hero section */}
                {/* lg:py-[8vh] */}
                <section className='  '>
                    {/* <div className=''>
                        <p className='font-bold lg:text-[40px] text-[32px] lg:w-[80vw] m-auto text-likeblack text-center'>Simplifiez Votre Gestion Comptable avec Notre Expertise <span className='text-primary italic'>Franco-Marocaine</span></p>
                        <p className='lg:w-[60vw] m-auto pt-4 text-center'>Confiez-nous la gestion de votre comptabilité et bénéficiez d'un service personnalisé alliant expertise française et marocaine. Simplifiez vos démarches et concentrez-vous sur l’essentiel.</p>
                        <div className='flex items-center justify-center gap-5 pt-8'>
                            <button className="hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] relative   bg-primary text-white  px-8 py-[1.6vh] border-[1px] border-likeblack rounded-xl font-semibold text-[16px] overflow-hidden group transition duration-300">
                                <span className="relative z-10">
                                    <a href="" className="flex gap-2 items-center">
                                        <p className="hidden lg:block md:block">Comptabilité</p>
                                    </a>
                                </span>
                            </button>

                            <button className="hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] relative font-heading  bg-primary text-white  px-8 py-[1.6vh] border-[1px] border-likeblack rounded-xl font-semibold text-[16px] overflow-hidden group transition duration-300">
                                <span className="relative z-10">
                                    <a href="" className="flex gap-2 items-center">
                                        <p className="hidden lg:block md:block">Social, Pai</p>
                                    </a>
                                </span>
                            </button>

                        </div>

                        <div className="py-10">
                            <div className="max-w-7xl mx-auto">
                                <p className="text-center pb-5 text-likeblack font-medium">Pourquoi choisissent <span className='font-semibold'>AC CENTER</span>?</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-3">

                                    <div className="flex flex-col p-4 rounded-xl bg-accent hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300 ">
                                        <div className=" text-likeblack rounded-full  mb-4 inline-block">
                                            <FaCheckCircle className="text-3xl" />
                                        </div>
                                        <p className="text-lg font-semibold">Simplicité</p>
                                        <p className="text-likeblack mt-2">Toutes vos démarches juridiques et comptables au même endroit.</p>
                                    </div>

                                    <div className="flex flex-col p-4 rounded-xl bg-accent hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300">
                                        <div className="text-likeblack rounded-full  mb-4">
                                            <FaClock className="text-3xl" />
                                        </div>
                                        <p className="text-lg font-semibold">Rapidité</p>
                                        <p className="text-likeblack mt-2">Traitement du dossier en 48h.</p>
                                    </div>

                                    <div className="flex flex-col p-4 rounded-xl bg-accent hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300">
                                        <div className="text-likeblack rounded-full  mb-4">
                                            <FaUserTie className="text-3xl" />
                                        </div>
                                        <p className="text-lg font-semibold">Fiabilité</p>
                                        <p className="text-likeblack mt-2">Plus de 50 juristes diplômés à vos côtés. Basés en France.</p>
                                    </div>

                                    <div className="flex flex-col p-4 rounded-xl bg-accent hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300">
                                        <div className="text-likeblack rounded-full  mb-4">
                                            <FaTag className="text-3xl" />
                                        </div>
                                        <p className="text-lg font-semibold">Prix</p>
                                        <p className="text-likeblack mt-2">Un rapport qualité / prix imbattable.</p>
                                    </div>

                                </div>

                            </div>
                        </div>






                    </div> */}
                    <div className='flex gap-4 items-center '>
                        {/* left */}
                        <div className='lg:w-[60vw]'>
                            <p className='font-bold text-[40px]   text-likeblack'>Simplifiez Votre Gestion Comptable avec Notre Expertise <span className='text-primary italic'>Franco-Marocaine</span></p>
                            <p className=' pt-4'>Confiez-nous la gestion de votre comptabilité et bénéficiez d'un service personnalisé alliant expertise française et marocaine. Simplifiez vos démarches et concentrez-vous sur l’essentiel.</p>
                            <div className='flex items-center  gap-5 pt-8'>
                                <button className="hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]   bg-accent text-likeblack  px-8 py-[1.6vh] border-[1px] border-likeblack rounded-xl font-semibold text-[16px] overflow-hidden group transition duration-300">
                                    <span className="">
                                        <a href="" className="flex gap-2 items-center">
                                            <p className=" lg:block md:block">Comptabilité</p>
                                        </a>
                                    </span>
                                </button>

                                <button className="hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]    bg-secondary text-likeblack  px-8 py-[1.6vh] border-[1px] border-likeblack rounded-xl font-semibold text-[16px] overflow-hidden group transition duration-300">
                                    <span className="">
                                        <a href="" className="flex gap-2 items-center">
                                            <p className=" lg:block md:block">Social, Pai</p>
                                        </a>
                                    </span>
                                </button>
                            </div>

                        </div>

                        {/* right */}
                        <div className='w-[50vw] lg:block hidden'>
                            <img src={image.pic2} alt="" className='w-[100%]' />

                        </div>
                    </div>

                    <div className="py-10">
                        <div className="max-w-7xl mx-auto">
                            <p className=" text-likeblack font-medium border-l-[4px] pl-3 border-primary">Pourquoi choisissent <span className='font-semibold'>AC CENTER</span>?</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-3 pt-5">

                                <div className="flex flex-col p-4 rounded-xl  border-[1px] border-likeblack bg-accent cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300 ">
                                    <div className=" text-likeblack rounded-full  mb-4 inline-block">
                                        <FaCheckCircle className="text-3xl" />
                                    </div>
                                    <p className="text-lg font-semibold">Simplicité</p>
                                    <p className="text-likeblack mt-2">Toutes vos démarches juridiques et comptables au même endroit.</p>
                                </div>

                                <div className="flex flex-col p-4 rounded-xl border-[1px] border-likeblack bg-accent cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300">
                                    <div className="text-likeblack rounded-full  mb-4">
                                        <FaClock className="text-3xl" />
                                    </div>
                                    <p className="text-lg font-semibold">Rapidité</p>
                                    <p className="text-likeblack mt-2">Traitement du dossier en 48h.</p>
                                </div>

                                <div className="flex flex-col p-4 rounded-xl border-[1px] border-likeblack bg-accent cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300">
                                    <div className="text-likeblack rounded-full  mb-4">
                                        <FaUserTie className="text-3xl" />
                                    </div>
                                    <p className="text-lg font-semibold">Fiabilité</p>
                                    <p className="text-likeblack mt-2">Plus de 50 juristes diplômés à vos côtés. Basés en France.</p>
                                </div>

                                <div className="flex flex-col p-4 rounded-xl border-[1px] border-likeblack bg-accent cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300">
                                    <div className="text-likeblack rounded-full  mb-4">
                                        <FaTag className="text-3xl" />
                                    </div>
                                    <p className="text-lg font-semibold">Prix</p>
                                    <p className="text-likeblack mt-2">Un rapport qualité / prix imbattable.</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>

            </div>

        </>
    );
};

export default Main;