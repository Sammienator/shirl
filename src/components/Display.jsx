import React from 'react'
import pic6 from '../assets/pic6.jpg'
import pic2 from '../assets/pic2.jpg'
import pic5 from '../assets/pic5.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'

const Display = () => {
  return (
    <div className=' w-full mx-auto py-16 px-4 text-center bg-white font-bold uppercase border-b'>
        <h1> Samples of My Work and Art</h1>
        <p className='py-4'> some of my features and collaborations, i hope you enjoy....</p>

        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={pic2} alt="/" />
            <img className='w-full h-full object-cover' src={pic4} alt="/" />
            <img className='w-full h-full object-cover' src={pic5} alt="/" />
            <img className='w-full h-full object-cover' src={pic6} alt="/" />
            <img className='w-full h-full object-cover' src={pic3} alt="/" />

        </div>


    </div>
  )
}

export default Display