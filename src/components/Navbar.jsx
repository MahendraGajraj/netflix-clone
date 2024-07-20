import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <div className='mata-logo flex justify-evenly bg-[#2d2d2d] text-center items-center ml-5 mt-2 opacity-60'>
                <img className="lg:w-40 md:w-40 w-10 mb-2" src="./mata-logo.png" alt="" />
           
            <h1 className='bg-[#2d2d2d] lg:text-center md:text-center text-center 
        items-center rounded-lg px-5 py-3 text-3xl
        text-white font-bold'>GAJRAJ ENTERTAINMENT</h1>
        </div>
            <div className='main flex justify-between lg:justify-around
             md:justify-around items-center py-2 px-5 lg:mb-28 md:mb-28 mb-12 '>

                {/* left */}
                <div className='left'>
                    <div className='netflix_logo'>
                    <img className="lg:w-35 md:w-35 w-12 " src="./netflix-logo.png" alt="" />
                    </div>
                </div>
                {/* right */}
                <div className=''>
                    <div className='main flex items-center '>
                        <div className='selector bg-[#111112] text-white mx-4 px-3 lg:px-5 md:px-5 py-1 
                        rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80'>
                            <select
                                name=""
                                id=""
                                className='bg-transparent outline-none cursor-pointer'
                            >
                                <option value="English">English</option>
                                <option value="हिंदी">हिंदी</option>
                            </select>
                        </div>
                        <Link to={"/signin"}>
                            <button type='button'
                                className='bg-[#e50815] hover:bg-[#d80c1a]
                 text-white px-3 py-1.5 rounded-lg
                  font-bold'>
                                Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
