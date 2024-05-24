import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import Logo from './svg/Logo';


const Navigation = ({menu}) => {
  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line sticky top-0'>
      <div className='flex items-center gap-4'>
        <Logo/>
        <h1 className='mb-0'>School</h1>
      </div>
      

      <ul className='nav'>
        <li className='nav-link '><Link to="#"><MdOutlineDashboard />Dashboard</Link></li>
        <li className={`nav-link ${menu === "post" ? "active" : ""}`}><Link to="/dashboard/post"><AiOutlineMessage />Post</Link></li>
        <li className={`nav-link ${menu === "category" ? "active" : ""}`}><Link to="/dashboard/category"><MdOutlineDashboard />Category</Link></li>
        <li className={`nav-link ${menu === "tag" ? "active" : ""}`}><Link to="/dashboard/tag"><MdOutlineDashboard />Tag</Link></li>
      </ul>
    </aside>
  )
}

export default Navigation