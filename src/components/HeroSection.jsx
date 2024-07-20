import React from 'react'
import { Navbar } from './Navbar'

export default function HeroSection() {
    const url = "netflix-background-image"
    return (
        <>
            <div
                className='lg:h-[44.5em] md:h-[44.5em] h-[38em]'

                style={{
                    background: "linear-gradient(80deg, black, transparent), url(/netflix-background-image.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover"
                }}>


                <Navbar />
                {/* HeroSection */}
                <div className='container mx-auto flex justify-center items-center h-96'>
                    <div className=''>
                        <h1 className='text-white text-center text-2xl px-5 lg:text-5xl md:text-5xl font-bold mb-5'>The biggest Indian hits. The best Indian stories.
                            All streaming here.</h1>
                        <p className='text-white 
                        text-center lg:text-2xl md:text-2xl text-xl mb-5'>Watch anywhere. Cancel anytime.</p>
                        <p className='text-white 
                        text-center lg:text-xl 
                        md:text-xl text-lg mb-5'>Ready 
                        to watch? Enter your email to 
                        <br className='lg:hidden 
                        md:hidden sm:hidden' />  create or restart your membership.</p>

                        <div className='flex flex-wrap justify-center items-center space-x-2'>
                            <input type='text' className='bg-[#1d1e1e] text-white text-lg py-3 px-3
                     lg:w-96 md:w-96 w-80 rounded-md opacity-80 border border-gray-300 hover:ring-1
                      hover:ring-gray-50 outline-none mb-5 lg:mb-0 md:mb-0' placeholder='Email address' />

                            <button type='button' className='bg-[#e50815] gap-2 flex items-center py-3 px-5 rounded-lg'>
                                <p className='text-white font-bold text-xl'>Get Started</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hr_line' />
        </>

    )
}
