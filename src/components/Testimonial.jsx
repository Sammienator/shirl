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
                <div className='flex flex-col p-4 mb-4 items-center p-6 space-y-6 bg-gray-100 rounded-lg md:w-1/3  '>
                    <img className='w-16 -mt-14 rounded-full' src={avatar1} alt="/" />
                    <h5 className='text-lg font-bold'>
                        Samuel Kimanthi.

                    </h5>
                    <p className='text-sm text-darkGray italic'>
                    "The Rural Couple from Bungoma is even more gorgeous than the picture that was posted online. I absolutely LOVE it! The details in the jewellery and the colours that she has used absolutely takes your breath away.  Also loved the vibrant colours, the unusual style of painting. I love the expression of the oxen as he brings home the man and his lover. The man so protective of the woman he brings with him, the joy on everyone's face - it is beautiful. Thank you Shirley's."

                    </p>
                </div>



                <div className='flex flex-col p-4 mb-4 items-center p-6 space-y-6 bg-gray-100 rounded-lg md:w-1/3'>
                    <img className='w-16 -mt-10 rounded-full' src={avatar2} alt="/" />
                    <h5 className='text-lg font-bold'>
                        Annestella Githinji.

                    </h5>
                    <p className='text-sm text-darkGray  italic'>
                    "The two pieces of art I purchased are placed in my bedroom, a wall that has been bare forever. But now they are just so amazing that I keep gazing at them and they seem to be giving me bursts of energy.Without Shirley's superpower for attracting exquisite art this waould genuinely not have been possible" 

                    </p>
                </div>



                <div className='flex flex-col  p-4 mb-4 items-center p-6 space-y-6 bg-gray-100 rounded-lg md:w-1/3'>
                    <img className='w-16 -mt-10 rounded-full' src={avatar3} alt="/" />
                    <h5 className='text-lg font-bold'>
                        Vincent Akireply.

                    </h5>
                    <p className='text-sm text-darkGray'>
                    I wanted to gift something different for my friend's office opening. Shirley's magical creativity made me a lovely gifting option. I just loved the texturing, the colours, the choice of material putting together the structure and everything else about out sculpture . I'm glad that it's now adorning his office wall Thank You Shirley's. 

                    </p>
                </div>

            </div>

            <div className='my-16'>
            <a href="/"> 
                        <button className=' p-3 px-6 pt-2 bg-[#610300] text-white rounded-full baseline hover:bg-blue-600 font-bold'>

                        Get Started.

                    </button>
                        </a>


            </div>

        </div>

    </div>
  )
}

export default Testimonial