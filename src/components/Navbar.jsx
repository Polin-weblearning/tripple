import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='relative container py-4 flex items-center justify-center'>
        
        {/* Logo Always Center */}
        <div className='text-2xl font-bold absolute left-1/2 transform -translate-x-1/2'>
          TRIPPLE
        </div>

    
      </div>
    </div>
  )
}

export default Navbar;
