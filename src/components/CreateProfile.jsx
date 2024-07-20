import React from 'react'

export default function CreateProfile() {
    return (
        <div>
            <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
                {/* left */}
                <div className='left order-last lg:order-first md:order-first'>
                    <img className='lg:w-[35em] md:w-[35em] w-[25em]' src="./img-1.jpg" alt="img" />
                </div>

                {/* right */}
                <div className='right mb-10 lg:mb-0 md:mb-0 sm:mb-0'>
                    <h2 className='text-white text-center text-3xl lg:text-5xl md:text-5xl font-bold mb-5
                    lg:text-start md:text-start sm:text-start md:text-2xl'>
                        Create profile for kids</h2>
                    <p className='text-white lg:text-2xl md:text-2xl text-center 
                    text-lg lg:text-start md:text-start sm:text-start'>
                       Send children on adventures with there favourite<br className=
                       'hodden lg:block'/>characters in a space made just for them-free <br className=
                       'hidden lg:block'/>with your membership.
                    </p>
                </div>
            </div>
            <div className='hr_line' />
        </div>
    )
}