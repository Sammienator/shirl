import React from 'react'
import pic3 from '../assets/pic3.jpg'
const Features = () => {
  return (
    <div id='features' className='bg-white'>


            <h2 className=' flex justify-center mx-16 text-5xl font-bold  uppercase underline '>
                                My Services.

                            </h2>
       
        <div className='container flex flex-col p-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        

            <div className='flex flex-col space-y-12 md:w-1/2'>


                <img className='m-6 rounded-lg shadow-xl' src={pic3} alt="" />

               

                <p className='max-w-md items-center mx-auto text-center text-darkGraymd:text-left'>
                   I love Art. I have always seen the world from a different perspective, and i try to showcase what i see,projecting it to society and the world itself.
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quibusdam eum dolores distinctio corrupti! Possimus commodi aut consectetur?
                </p>

            </div>

            <div className=' flex flex-col space-y-8 md:w-1/2'>

                <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                    <div className='rounded-l-full bg-[#610300] md:bg-transparent'>
                        <div className='flex items-center space-x-2'>
                            <div className='px-4 py-2 text-white rounded-full md:py-1 bg-[#610300]'> 01

                            </div>
                            <h3 className='text-white font-bold md:mb-4 md:hidden'>
                               Art Design and Curation

                            </h3>


                        </div>

                    </div>

                    <div >
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>
                        Art Design and Curation
                        

                        </h3>
                        <p className='text-darkGray'>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto libero magni sit iste ipsa incidunt, hic eaque quod dolores aspernatur, ab cumque inventore modi? Ex totam eius ut provident id?

                        </p>
                   

                    </div>

                </div>



                <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                    <div className='rounded-l-full bg-[#610300] md:bg-transparent'>
                        <div className='flex items-center space-x-2'>
                            <div className='px-4 py-2 text-white rounded-full md:py-1 bg-[#610300]'> 02

                            </div>
                            <h3 className='text-white font-bold md:mb-4 md:hidden'>
                            Art and Interior Design

                            </h3>


                        </div>

                    </div>

                    <div >
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>
                        Art and Interior Design

                        </h3>
                        <p className='text-darkGray'>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto libero magni sit iste ipsa incidunt, hic eaque quod dolores aspernatur, ab cumque inventore modi? Ex totam eius ut provident id?

                        </p>
                   

                    </div>

                </div>





                <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                    <div className='rounded-l-full bg-[#610300] md:bg-transparent'>
                        <div className='flex items-center space-x-2'>
                            <div className='px-4 py-2 text-white rounded-full md:py-1 bg-[#610300]'> 03

                            </div>
                            <h3 className='text-white font-bold md:mb-4 md:hidden'>
                                General Art Consultancy

                            </h3>


                        </div>

                    </div>

                    <div >
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>
                        General Art Consultancy.

                        </h3>
                        <p className='text-darkGray'>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto libero magni sit iste ipsa incidunt, hic eaque quod dolores aspernatur, ab cumque inventore modi? Ex totam eius ut provident id?

                        </p>
                   

                    </div>

                </div>




            </div>

        </div>

    </div>
  )
}

export default Features