import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt=""
            className='w-full h-full object-cover'
        />

        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Plan your vacation</h1>
                <h2 className='text-4xl py-4 italic'>With TravelAura</h2>
                <p>
                a period during which activity (as of a school) is stopped for a time. 2. : a period spent away from home or business in travel or amusement. vacation.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
