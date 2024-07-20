import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='container mx-auto max-w-6xl w-lg lg:py-20 md:py-20 py-10 px-3'>
                <p className='text-gray-300 mb-5'>Question? Call <span color='underline'>
                    000-800-919-1694</span></p>
                <div className='main text-gray-300 flex flex-wrap justify-between mb-4 cursor-pointer'>
                    <div className="one">
                        <ul className='underline'>
                            <li className='mb-3'>Faq</li>
                            <li className='mb-3'>Investor Relations</li>
                            <li className='mb-3'>Privacy</li>
                            <li className='mb-3'>Speed Test</li>
                        </ul>
                    </div>
                    <div className="two">
                        <ul className='underline'>
                            <li className='mb-3'>Help Center</li>
                            <li className='mb-3'>Jobs</li>
                            <li className='mb-3'>Cookie Preferences</li>
                            <li className='mb-3'>Legal Notices</li>
                        </ul>
                    </div>
                    <div className="three">
                        <ul className='underline'>
                            <li className='mb-3'>Account</li>
                            <li className='mb-3'>Ways to Watch</li>
                            <li className='mb-3'>Corporate Information</li>
                            <li className='mb-3'>Only on Netflix</li>
                        </ul>
                    </div>
                    <div className="four">
                        <ul className='underline'>
                            <li className='mb-3'>Media Center</li>
                            <li className='mb-3'>Terms of Use</li>
                            <li className='mb-3'>Contact Us</li>
                        </ul>
                    </div>
                </div>
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
                <p className='text-gray-300 mb-5'>Netflix India</p>
                <div className='netflix_logo flex justify-evenly text-center items-center'>
                    <img className="lg:w-40 md:w-40 w-14 rounded-xl" src="./ms-logo.png" alt="" />
                    <h1 className='text-white'>Mahendra Singh Gajraj <span>© 2024 </span></h1>
                </div>

            </div>
            <div>

            </div>
        </div>
    )
}
