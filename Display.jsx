import React from 'react'
import pic6 from '../assets/pic6.jpg'
import pic12 from '../assets/pic12.jpg'
import pic3 from '../assets/pic3.jpg'
import pic13 from '../assets/pic13.jpg'

const Display = () => {
  return (
    <div className=' w-full mx-auto py-16 px-4 text-center bg-white font-bold uppercase border-b'>
        <h1 className='text-5xl font-bold  text-center text-black md:text-4xl   Uppercase underline italic'> Samples of My Work and Art</h1>
        <p className='py-4'> some of my features and collaborations, i hope you enjoy....</p>

        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={pic12} alt="/" />
            <img className='w-full h-full object-cover' src={pic13} alt="/" />
            <img className='w-full h-full object-cover' src={pic6} alt="/" />
            <img className='w-full h-full object-cover' src={pic6} alt="/" />
            <img className='w-full h-full object-cover' src={pic3} alt="/" />

        </div>


    </div>
  )
}

export default Display