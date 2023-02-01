import React from 'react'

const Cta = () => {
  return (
    <div id='cta' className='bg-[#610300]'>
        <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>

            <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left capitalize italic'>

                Simplify how you do things today!!


            </h2>
            <div>
            <a href="/"> 
                        <button className=' p-3 px-6 pt-2 bg-white font-bold text-[#610300] rounded-full baseline hover:bg-blue-400'>

                        Get Started.

                    </button>
                        </a>

            </div>

        </div>

    </div>
  )
}

export default Cta