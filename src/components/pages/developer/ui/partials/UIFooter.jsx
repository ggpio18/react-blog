import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const UIFooter = () => {
  return (
    <footer className='pt-12  pb-6 bg-header text-white text-center px-2 mt-5'>
        <h2 className='text-white text-5xl'>BLOG</h2>
        <h4 className='text-white text-2xl'>Subscribe to our Newletter</h4>
        <p> Be the first to get notified about new posts subscribe our newsletter.</p>

        <form action="" className='relative max-w-[700px] mx-auto my-5'>
            <input type="text" className='p-4 rounded-xl placeholder:opacity-60 w-full' placeholder='Your Email Address'/>
            <button className='text-white bg-accent p-3 rounded-xl absolute top-1 right-1'>Subscribe</button>
        </form>

        <ul className='flex justify-center gap-4'>
            <li><Link className='text-2xl'><FaFacebook/></Link></li>
            <li><Link className='text-2xl'><FaTwitter/></Link></li>
            <li><Link className='text-2xl'><FaInstagram/></Link></li>
            <li><Link className='text-2xl'><FaYoutube/></Link></li>
        </ul>

        <div className='pt-6 mt-6 border-t border-line border-content'>
            <p className='mb-0'>© Copyright 2024 Bloge All rights reserved.</p>
        </div>
    </footer>
  )
}

export default UIFooter
