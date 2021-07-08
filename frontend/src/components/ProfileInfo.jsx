import React from 'react';
import { Avatar } from '@material-ui/core';

const ProfileInfo = ({
  handleEdit,
  name, 
  email,
  mobileNumber,
  gender,
  location
}) => {
  return (
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
  )
}

export default ProfileInfo
