import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery'>
        <div id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700 p-4'> Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1688760323395-49f47ab4aebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1688760323395-49f47ab4aebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1611043714658-af3e56bc5299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery