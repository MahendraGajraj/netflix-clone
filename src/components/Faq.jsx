import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Faq({title, desc}) {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='faq_main container mx-auto lg:max-w-2xl md:max-w-2xl text-white px-5'>
        <div className='mb-2'>
          <div className='main top bg-[#2d2d2d] hover:bg[#414141]
           flex justify-between items-center px-5 py-4 cursor-pointer mb-2' onClick={() => setOpen(!open)}>
            {/* left */}
            <div className='left'>
              <h1 className='lg:text-2xl md:text-2xl text-xl'>{title}</h1>
            </div>
            {/* right */}
            <div className='right'>
              {open ? <AiOutlineMinus className='lg:text-4xl md:text-4xl text-2xl' />
                : <AiOutlinePlus className='lg:text-4xl md:text-4xl text-2xl' />}
            </div>
          </div>
          {open && <div className='main bottom bg-[#2d2d2d] px-5 py-4 my-[1px]'>
            <p className='text-2xl cursor-pointer text-justify lg:text-start md:text-start'>{desc}</p>
          </div>}
        </div>
      </div>
    </div>

  )
}
