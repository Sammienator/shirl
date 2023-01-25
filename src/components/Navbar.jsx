import React from 'react'
import shirley from '../assets/shirley.png'
const Navbar = () => {
  return (
    <div className='bg-white'>
        {/* the hamburger menu will be absolute positioned, and we make the nav relative first */}
        <nav className='relative container mx-auto p-6 border-b shadow-xl'>

            {/* this div will hold our nav items */}
            <div className='flex items-center justify-between '>

                <div>
                    {/* logo */}
                <img className='w-35 h-20 shadow-lg pt-2 ' src={shirley} alt="/"  />


                </div>
                

                <div className=' md:flex justify-between items-center space-x-6 '>
                <a href="/" className='hover:text-[aqua] underline '> About Me.</a>
                <a href="/" className='hidden md:flex hover:text-[aqua] underline'> Pricing</a>
                <a href="/"className='hidden md:flex hover:text-[aqua] underline'> Contacts</a>
                <a href="/"className='hidden md:flex hover:text-[aqua] underline'> Careers</a>
                </div>

                <div>
                    
                        <a href="/"> 
                        <button className=' block p-3 px-6 pt-2 bg-[aqua] text-white rounded-full baseline hover:bg-blue-600'>

                        Get started

                    </button>
                        </a>
                </div>

            </div>

            
        

        </nav>
    </div>
  )
}

export default Navbar