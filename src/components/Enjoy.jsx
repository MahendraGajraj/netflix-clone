import React, { useState } from 'react';

export default function Enjoy() {

    const [video, setVideo] = useState(false)

    const getStartedV1 = () => {
        setVideo(true)
    }
    const getStartedV4 = () => {
        setVideo(true)

    }
    const getStartedV5 = () => {
        setVideo(true)

    }
    const getStartedV6 = () => {
        setVideo(true)

    }
    const getStartedV7 = () => {
        setVideo(true)

    }


    return (
        <div>
            <div className="main flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5 ">
                {/* left */}
                <div className='left mb-10 lg:mb-0 md:mb-0 sm:mb-0'>
                    <h2 className='text-white text-center text-3xl lg:text-5xl md:text-5xl font-bold mb-5 lg:text-start md:text-start sm:text-start md:text-2xl'>
                        Enjoy on your TV
                    </h2>
                    <p className='text-white lg:text-2xl md:text-2xl text-center text-lg lg:text-start md:text-start sm:text-start'>
                        Watch on smart TVs, Playstation, Xbox,
                        <br className='hidden lg:block md:block sm:block' />
                        Chromecast, Apple TV, Blu-ray players and more.
                    </p>
                </div>
                {/* right */}
                <div className='right pb-4 bg-black'>
                    <video onClick={getStartedV1} className="lg:w-[35em] md:w-[35em] w-[30em] border-2x-solid-blue"
                        controls

                    >
                        <source src="/video/V1.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='right pb-4 bg-black'>
                    <video onClick={getStartedV4} className="lg:w-[35em] md:w-[35em] w-[30em] border-2x-solid-blue"
                        controls
                    >
                        <source src="/video/V4.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='right pb-4 bg-black'>
                    <video onClick={getStartedV5} className="lg:w-[35em] md:w-[35em] w-[30em] border-2x-solid-blue"
                        controls
                    >
                        <source src="/video/V5.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='right pb-4 bg-black'>
                    <video onClick={getStartedV6} className="lg:w-[35em] md:w-[35em] w-[30em] border-2x-solid-blue"
                        controls
                    >
                        <source src="/video/V6.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='right bg-black'>
                    <video onClick={getStartedV7} className="lg:w-[35em] md:w-[35em] w-[30em] border-2x-solid-blue"
                        controls
                    >
                        <source src="/video/V7.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className='hr_line' />
        </div>
    );
}
