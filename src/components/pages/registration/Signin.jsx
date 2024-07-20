import React from 'react'

export default function Signin() {
    return (
        <div style={{
            background: "linear-gradient(80deg, black, transparent), url(/netflix-background-image.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover"
        }}>
            <div className='main flex justify-center items-center h-screen'>
                <div className='sub_main bg-black bg-opacity-75 p-20 text-white rounded-lg'>
                    <h2 className='text-3xl font-bold mb-7'>Sign In</h2>
                    {/* email input */}
                    <div className='mb-7'>
                        <input
                            type='email'
                            placeholder='Email or phone number'
                            className='w-full px-3 py-3 rounded-md bg-[#333333] outline-none'
                        />
                    </div>
                    {/* password input */}
                    <div className='mb-7'>
                        <input
                            type='password'
                            placeholder='password'
                            className='w-full px-3 py-3 rounded-md bg-[#333333] outline-none'
                        />
                    </div>

                    {/* Button */}

                    <div className='mb-2'>
                        <button type='button' className='bg-[#e50815] w-full py-3 rounded-md'>Signin</button>
                    </div>
                    {/* checkbox */}
                    <div className='mb-10'>
                        <div className='main flex justify-between items-center'>
                            {/* left */}
                            <div className='flex items-center gap-1'>
                                <input type='checkbox' className='w-4 h-4' />
                                <label className='text-gray-400 folt-light text-sm'>Remember</label>
                            </div>
                            {/* right */}
                            <p className='font-light text-sm text-gray-400'>Need helf?</p>
                        </div>
                    </div>
                    {/* Signup text */}
                    <div className='mb-5'>
                        <p> <span className='font-light text-gray-400'>New to Netflix?</span>
                            <span className=' font-light 
                    hover:underline cursor-pointer'> {""}Sign up now.</span></p>
                    </div>
                    {/* Small text */}
                    <div className='mb-20'>
                        <p className='tetx-xs text-gray-400'>This page is protected by Google reCAPTCHA to <br />ensure yor are not a robot.
                            <span className='text-blue-600'>Learn more.</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
