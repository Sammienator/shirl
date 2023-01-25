import React from 'react'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'

const Testimonial = () => {
  return (
    <div id='testimonials'>
        {/* container to heading and testimonial blocks */}

        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>

            <h2 className='text-4xl font-bold text-center'>
                Whats different about Shirley

            </h2>

            {/* container testimonial */}

            <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                <div className='flex flex-col items-center p-6 space-y-6 bg-gray-100 rounded-lg md:w-1/3'>
                    <img className='w-16 -mt-14 rounded-full' src={avatar1} alt="/" />
                    <h5 className='text-lg font-bold'>
                        Samuel Klaus

                    </h5>
                    <p className='text-sm text-darkGray'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate fugit aliquam voluptates consequatur repellendus provident dolor voluptatum ipsum veritatis, laudantium esse cum praesentium nobis id? Fuga odit aspernatur corrupti?

                    </p>
                </div>



                <div className='flex flex-col items-center p-6 space-y-6 bg-gray-100 rounded-lg md:w-1/3'>
                    <img className='w-16 -mt-10 rounded-full' src={avatar2} alt="/" />
                    <h5 className='text-lg font-bold'>
                        Samuel Klaus

                    </h5>
                    <p className='text-sm text-darkGray'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate fugit aliquam voluptates consequatur repellendus provident dolor voluptatum ipsum veritatis, 

                    </p>
                </div>



                <div className='flex flex-col items-center p-6 space-y-6 bg-gray-100 rounded-lg md:w-1/3'>
                    <img className='w-16 -mt-10 rounded-full' src={avatar3} alt="/" />
                    <h5 className='text-lg font-bold'>
                        Samuel Klaus

                    </h5>
                    <p className='text-sm text-darkGray'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate fugit aliquam voluptates consequatur repellendus provident dolor voluptatum ipsum veritatis, 

                    </p>
                </div>

            </div>

            <div className='my-16'>
            <a href="/"> 
                        <button className=' p-3 px-6 pt-2 bg-[aqua] text-black rounded-full baseline hover:bg-blue-600 font-bold'>

                        Get Started.

                    </button>
                        </a>


            </div>

        </div>

    </div>
  )
}

export default Testimonial