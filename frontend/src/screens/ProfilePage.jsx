import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { posts } from '../api/posts';
import { TiEdit } from 'react-icons/ti';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const ProfilePage = () => {


  const[name, setName] = useState('Sanjeev Sharma');
  const[email, setEmail] = useState('sanjeev.sharma@acem.edu.in');
  const[mobileNumber, setMobileNumber] = useState('5545487457');
  const[gender, setGender] = useState('Male');
  const[location, setLocation] = useState('Delhi');

  const textPost = posts.filter(post => post.type === 'text')
  const videoPost = posts.filter(post => post.type === 'video')

  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    setIsEditing(true)
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      mobileNumber,
      gender,
      location
    })
    setIsEditing(false)
  }

    const EditProfileForm = 
    <form onSubmit={handleSubmit} className='pl-6 p-4 border w-full mx-auto md:px-12 mt-12 border-t-4 border-yellow-400 pt-4'>
      <h1 className='font-bold text-gray-800 text-xl md:text-4xl mb-4'>Editing Profile Info</h1>
      <div className='mt-4 flex flex-col items-start gap-4'>
        <div  className='flex items-center gap-10 flex-wrap'>
          <label className='font-bold text-gray-600 text-md md:text-xl' htmlFor="name">Name:</label>
          <input required type="text"  value={name} onChange={e => setName(e.target.value)} className='
          shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2  focus:ring-purple-600 focus:ring-opacity-50
          '/>
        </div>
        <div  className='flex items-center gap-11 flex-wrap'>
          <label className='font-bold text-gray-600 text-md md:text-xl' htmlFor="email">Email:</label>
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className='
          shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 
          '/>
        </div>
        <div  className='flex items-center gap-9 flex-wrap'>
          <label className='font-bold text-gray-600 text-md  md:text-xl' htmlFor="mobile">Mobile:</label>
          <input required type="text" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)}className='
          shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 
          '/>
        </div>
        <div  className='flex items-center gap-7 flex-wrap'>
          <label className='font-bold text-gray-600 text-md md:text-xl' htmlFor="gender">Gender:</label>
          <input required type="text" value={gender} onChange={e => setGender(e.target.value)} className='
          shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 
          '/>
        </div>
        <div  className='flex items-center gap-4 flex-wrap'>
          <label className='font-bold text-gray-600 text-md md:text-xl' htmlFor="location">Location:</label>
          <input required type="text" value={location} onChange={e => setLocation(e.target.value)} className='
          shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 
          '/>
        </div>
        <button className='px-4 py-1 rounded-md bg-yellow-400 font-bold'
        >Update Profile</button>
        </div>
    </form>

    const ProfileInfo = 
    <div className='pl-6 p-4 border w-full mx-auto md:px-12 mt-12 border-t-4 border-yellow-400 pt-4'>
      <h1 className='font-bold text-gray-800 text-xl md:text-4xl mb-4'>Profile Info</h1>
      <div className='mt-4 flex flex-col items-start gap-4'>
        <Avatar src='' />
        <span className='flex items-center gap-2 flex-wrap'>
          <h1 className='font-bold text-gray-600 text-md md:text-xl'>Name:</h1> <span className='text-sm md:text-lg'>{name}</span>
        </span>
        <span className='flex items-center gap-2 flex-wrap'>
          <h1 className='font-bold text-gray-600 text-md md:text-xl'>Email:</h1> <span className='text-sm md:text-lg'>{email}</span>
        </span>
        <span className='flex items-center gap-2 flex-wrap'>
          <h1 className='font-bold text-gray-600 text-md md:text-xl'>Mobile:</h1> <span className='text-sm md:text-lg'>
          {mobileNumber}</span>
        </span>
        <span className='flex items-center gap-2 flex-wrap'>
          <h1 className='font-bold text-gray-600 text-md md:text-xl'>Gender:</h1><span className='text-sm md:text-lg'> 
          {gender}</span>
        </span>
        <span className='flex items-center gap-2 flex-wrap'>
          <h1 className='font-bold text-gray-600 text-md md:text-xl'>Location:</h1><span className='text-sm md:text-lg'> 
          {location}</span>
        </span>
      </div>
      <form className='mt-4'>
        <button className='px-4 py-1 rounded-md bg-yellow-400 font-bold' 
        onClick={handleEdit}>Edit</button>
      </form>
    </div>

    const TextPost = 
    <div>
      <div>
        <h1 className='text-2xl md:text-4xl font-bold mb-4'>Text Post</h1>
        {
          textPost && textPost.map(post => {
            return (
             <NavLink to={`/post/${post.title.toLowerCase().replaceAll(' ','-')}/${post.id}`} key={post.id}>
                <div className='flex flex-wrap md:flex-nowrap justify-between mt-6 '>
                <div className='w-40 md:w-60 h-24 md:h-32'>
                  <img className='rounded-md h-full w-full' src={post.src} alt={post.title} />
                </div>
                <div className='flex flex-col gap-2 pt-4 pb-4 md:p-4'>
                  <h1 className='text-xs md:text-xl font-bold'>{post.title}</h1>
                  <p className='text-sm'>{post.postedOn.substring(0,16)}</p>
                </div>
                <div className='flex md:flex-col gap-4 items-center
                justify-center'>
                  <NavLink to={`/edit/:id`}  className='px-2 py-2 rounded-md text-white bg-blue-600  hover:bg-blue-400  font-bold'>
                    <TiEdit />
                  </NavLink>
                  <NavLink to={`/delete/:id`}  className='px-2 py-2 text-white bg-red-600 hover:bg-red-400 rounded-md   font-bold'>
                    <RiDeleteBin6Fill />
                  </NavLink>
                </div>
              </div>
             </NavLink>
            )
          })
        }
      </div>
      <div>
         <h1 className='text-2xl md:text-4xl font-bold mb-4 mt-6'>Video Post</h1>
        {
          videoPost && videoPost.map(video => {
            return (
             <NavLink to={`/video/${video.title.toLowerCase().replaceAll(' ','-')}/${video.id}`} key={video.id}>
                <div className='flex flex-wrap md:flex-nowrap justify-between mt-6'>
                <div className='w-40 md:w-60 h-24 md:h-32'>
                  <img className='rounded-md h-full w-full' src={video.thumbnail} alt={video.title} />
                </div>
                <div className='flex flex-col gap-2 pt-4 pb-4 md:p-4'>
                  <h1 className='text-xs md:text-xl font-bold'>{video.title}</h1>
                  <p className='text-sm'>{video.postedOn.substring(0,16)}</p>
                </div>
                <div className='flex md:flex-col gap-4 items-center
                justify-center'>
                  <NavLink to={`/edit/:id`}  className='px-2 py-2 rounded-md text-white bg-blue-600  hover:bg-blue-400 font-bold'>
                    <TiEdit />
                  </NavLink>
                  <NavLink to={`/delete/:id`}  className='px-2 py-2 rounded-md text-white bg-red-600 hover:bg-red-400 font-bold'>
                    <RiDeleteBin6Fill />
                  </NavLink>
                </div>
              </div>
             </NavLink>
            )
          })
        }
      </div>
    </div>

  return (
    <div className='md:grid grid-cols-5 p-4 bg-gray-100'>
      <div className='col-span-2 p-4'>
        {
          isEditing ? EditProfileForm : ProfileInfo
        }
      </div>
      <div className='col-span-3 p-6'>
        <span className='flex items-center justify-center md:justify-end w-full h-12' ><NavLink to='/createpost' className='px-4 py-1 rounded-md bg-yellow-400 font-bold'>Create Post</NavLink></span>
        <div className='mt-12 w-full'>
         {
            posts ? <div className='m-2 md:mt-4 p-4 border w-full border-t-4 border-yellow-400 border w-full'>
              { TextPost }
            </div> : <h1 className='text-2xl text-center md:text-6xl mt-4'>It's seems you have created no post yet!</h1> 
         }
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
