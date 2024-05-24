import React from 'react'
import { FaBars, FaFacebook, FaInstagram, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const UIHeader = () => {
   
  const [showNav, setShowNav] = React.useState(false);


  const handleShowNav = () => setShowNav(!showNav);
  
  return (
    <header className='text-primary '>
      <div className='bg-accent'>
         <div className="container">
          <div className="flex justify-between items-center py-2">
            <ul className='flex gap-4'>
              <li><Link className='text-white' to="#"><FaFacebook/></Link></li>
              <li><Link className='text-white' to="#"><FaInstagram/></Link></li>
              <li><Link className='text-white' to="#"><FaTwitter/></Link></li>
              <li><Link className='text-white' to="#"><FaYoutube/></Link></li>
            </ul>
            <ul className='flex gap-4'>
              <li>
                <Link className='text-white' to="/login">Login</Link>
              </li>
              <li>
              <Link className='text-white' to="/register">Register</Link>
              </li>
            </ul>
          </div>
         </div>
         </div>

        <div className="container">
         <div className='relative'>
           <div className='flex justify-between items-center sticky top-0 bg-primary py-4'>
           <h1 className='mb-0'>BLOG</h1>
           <div className='flex gap-5'>
            <button className='size-8 bg-content text-primary flex justify-center items-center rounded-lg text-sm'><FaSearch/></button>
            <button className='text-content text-2xl md:hidden' onClick={handleShowNav}><FaBars/></button>
           </div>
           </div>
           
           <nav className={`${showNav ? "show" : ""} md:!max-h-[30px] md:absolute md:top-5 md:right-16`}>
            <ul className='space-y-5 p-4 md:flex md:gap-5 md:space-y-0 md:p-0'>
              <li><Link  className="font-bold transition-color hover:text-accent active:text-accent" to="/home">Home</Link></li>
              <li><Link  className="font-bold transition-color hover:text-accent" to="#">About</Link></li>
              <li><Link  className="font-bold transition-color hover:text-accent" to="#">Blog</Link></li>
              <li><Link  className="font-bold transition-color hover:text-accent" to="/single">Post</Link></li>
              <li><Link  className="font-bold transition-color hover:text-accent" to="#">Contact</Link></li>
            </ul>
           </nav>
           
         </div>
         </div>
    </header>
  )
}

export default UIHeader