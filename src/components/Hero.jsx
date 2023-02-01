import React from 'react'
import women from '../assets/women.png'

const Hero = () => {
  return (
    <div id='hero' className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>

        <div className='flex flex-col mb-24 space-y-12  md:w-1/2'>
            <h1 className='max-w-md text-3xl font-bold text-center text-[#610300] md:text-4xl md:text-left uppercase'>
             Creating a life i love,Welcome to my World!
            </h1>
            <p className='max-w-md text-xl text-center text-darkGrayish md:text-left'>
                God's Mess! I am an Art Lover, <br/> <b> Currently pursuing Finance and Enterprenuership. </b>

            </p>
            <p className='max-w-md text-xl text-center text-darkGrayish md:text-left italic capitalize '> "I make  broken look beautiful and strong look invincible" - Shirley Klaus</p>
            <div className='flex justify-center md:justify-start'>
            <a href="/"> 
                        <button className=' p-3 px-6 pt-2 bg-[#610300] text-white rounded-full baseline hover:bg-blue-600 font-bold'>

                        Find Out More.

                    </button>
                        </a>
            </div>


        </div>

        <div className='md:w-1/2 pb-4  '>
          <img className='m-4  rounded ' src={women} alt="" />

        </div>

    </div>
  )
}

export default Hero