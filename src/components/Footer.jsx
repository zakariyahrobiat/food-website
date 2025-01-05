import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-white w-full px-3 py-5 md:px-10 lg:px-20 '>
        <div className='flex justify-between'>
         <Link to="/">
       
       <h1 className="text-2xl font-bold">LOGO</h1>
     </Link>
     <div >
        <h1 className='text-blue-500 text-lg font-bold'>Product</h1>
        <p className='text-sm text-neutral-600 font-normal pb-1'>Features</p>
        <p className='text-sm text-neutral-600 font-normal pb-1'>Pricing</p>
     </div>
     <div>
        <h1 className='text-blue-500 text-lg font-bold'>Resources</h1>
        <p className='text-sm text-neutral-600 font-normal pb-1'>Blog</p>
        <p className='text-sm text-neutral-600 font-normal pb-1'>User guides</p>
        <p className='text-sm text-neutral-600 font-normal pb-1'>Webinars</p>
     </div>
     <div>
        <h1 className='text-blue-500 text-lg font-bold pb-1'>Company</h1>
        <p className='text-sm text-neutral-600 font-normal pb-1'>About</p>
        <p className='text-sm text-neutral-600 font-normal pb-1'>Join us</p>
     </div>
     <div>
        <p className='text-blue-500 text-lg font-bold'>Subscribe to our newsletter</p>
        <p className='text-xs text-neutral-600 font-normal'>For product announcements and exclusive insights</p>
        <div className='flex justify-between items-center py-1'><input type="tel" name="" id="" placeholder='Input your email' className='border-2 text-xs px-2 py-1 border-blue-500 bg-transparent rounded-l-md w-2/3' />
        <button className='bg-blue-500  rounded-r-md text-white px-2 py-1 font-bold w-1/3'>Subscribe</button>
        </div>
        </div>
        </div>
        <hr />
        <div className='flex justify-between items-center w-full pt-2'>
            <p className='text-lg font-semibold'>English</p>
            <p className='text-base font-normal'>@2025 Zakariyah Robiah.</p>
            <div className='flex justify-between items-center gap-5'>
            <FaFacebook/>
            <FaTwitter/>
            <FaLinkedin/>
            <FaYoutube/>
            </div>
        </div>
    </div>
  )
}

export default Footer