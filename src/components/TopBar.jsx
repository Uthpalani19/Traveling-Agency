import React from "react";
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

const TopBar = () => {
    return(
        <div className='flex justify-between items-center px-4 py-2'>
            <div className = 'flex items-center'>
                <BsChatSquareDots size={30} className='text-[var(--secondary-dark)] mr-2'/>
                <h1 className='text-xl font-bold text-gray-700'>TRAVELAURA</h1>
            </div>
            <div className='flex'>
                <div className='hidden md:flex items-center px-6'>
                    <AiOutlineClockCircle size={20} className='mr-2 text-[var(--secondary-dark)]'/>
                    <p className='text-sm text-gray-700'>8 AM - 5 PM</p>
                </div>
                <div className='hidden md:flex items-center px-6'>
                    <AiFillPhone size={20} className='mr-2 text-[var(--secondary-dark)]'/>
                    <p className='text-sm text-gray-700'>091 - 222 79 60</p>
                </div>
                <button>Get a free quote</button>
            </div>
            
        </div>
    )
}

export default TopBar;