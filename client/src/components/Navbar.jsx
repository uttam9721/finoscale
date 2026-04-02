import React from 'react'
import logo from '../assets/logo.jpg'
import { Menu } from 'lucide-react'


const Navbar = () => {
  return (
    <div className='bg-[#3C1C5F] gap-3 flex items-center'>
        <div className='ml-8 flex items-center gap-3'>
              <Menu className="text-white" />
     <div className='w-15 h-15 flex items-center gap-2 p-3'>
        <img src={logo} alt="Logo" />
        <div>
        <p className='font-bold text-white text-xl'>finoscale</p>
        </div>
        </div>
        </div> 
    </div>
  )
}

export default Navbar
