import React, { useState } from 'react';

export default function Watch() {

    const [video, setVideo] = useState(false)

    const getStarted = () => {
        setVideo(true)
    }
        return (
            <div>
                <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
                    {/* left */}
                    <div className='left mb-10 lg:mb-0 md:mb-0 sm:mb-0'>
                        <h2 className='text-white text-center text-3xl lg:text-5xl md:text-5xl 
                        font-bold mb-5 lg:text-start md:text-start sm:text-start md:text-2xl'>
                            Watch everywhare
                        </h2>
                        <p className='text-white lg:text-2xl md:text-2xl text-center 
                        text-lg lg:text-start md:text-start sm:text-start'>
                            Stream unlimited movies and TV shows on your
                            <br className='hidden lg:block md:block sm:block' />
                            phone, tablet, laptop and TV.
                        </p>
                    </div>
                    {/* right */}
                    <div className='right'>
                        <video onClick={getStarted} className="lg:w-[35em] md:w-[35em]"
                        controls
                        >
                            <source src="/video/V3.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='hr_line' />
            </div>
        );
    }
