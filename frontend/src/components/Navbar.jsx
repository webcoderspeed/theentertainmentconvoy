import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { Avatar } from '@material-ui/core';

const Navbar = () => {

  const nav = document.querySelector('nav');

  window.onscroll = () => {
    if(window.scrollY){
    nav && nav.classList.add('shadow-md')
  } else {
    nav && nav.classList.remove('shadow-md')
  }
  }

  return (
    <nav className='p-4 md:px-10 flex justify-between items-center flex-wrap sticky top-0 z-50 bg-white shadow-md'>
      <span className='flex gap-5'>
          <NavLink to='/' className='flex items-center'>
          <h1 className="hemi-cube text-2xl md:text-4xl mr-2">TE<span className='text-yellow-400'>C</span></h1>
          <span className='font-bold text-sm'>The Entertainment <span className='text-yellow-400'> Convoy</span></span>
        </NavLink>
          <ul className='hidden md:flex md:items-center md:justify-center'>
            <li><NavLink to='/posts/beauty' className='px-2 py-1 font-bold hover:text-indigo-600'>Beauty</NavLink></li>
            <li><NavLink to='/posts/fashion' className='px-2 py-1 font-bold hover:text-indigo-600'>Fashion</NavLink></li>
            <li><NavLink to='/posts/health' className='px-2 py-1 font-bold hover:text-indigo-600'>Health</NavLink></li>
            <li><NavLink to='/posts/technology' className='px-2 py-1 font-bold hover:text-indigo-600'>Technology</NavLink></li>
            <li><NavLink to='/posts/entertainment' className='px-2 py-1 font-bold hover:text-indigo-600'>Entertainment</NavLink></li>
            <li><NavLink to='/posts/covid19' className='px-2 py-1 font-bold hover:text-indigo-600'>Covid-19</NavLink></li>
            <li><NavLink to='/videos' className='px-2 py-1 font-bold hover:text-indigo-600'>Video</NavLink></li>
          </ul>
      </span>
      <span className='flex items-center gap-4'>
        <NavLink to='/search' className='text-2xl'>
          <BsSearch />
        </NavLink> 
        <NavLink to='/profile'>
          <Avatar src='' />
        </NavLink>
      </span>
    </nav>
  )
}

export default Navbar
