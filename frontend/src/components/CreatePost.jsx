import React, { useState } from 'react'

const CreatePost = () => {


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}
     className='p-4 bg-gray-100 flex flex-col gap-4 md:px-32'>
      <h1 className='px-4 w-32 md:w-full py-2 font-black bg-gray-400 md:text-2xl rounded-md'>Create Post</h1>
      <div  className='flex items-center gap-4 flex-wrap'>
          <label className='font-bold text-gray-600 text-md md:text-xl' htmlFor="title">Title:</label>
          <input required type="text" className='
          shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex-1
          '/>
        </div>
      <div  className='flex items-center gap-4 flex-wrap'>
          <label className='font-bold text-gray-600 text-md md:text-xl' htmlFor="type">Type:</label>
          <div className='flex items-center'>
            <label htmlFor="text" className='font-bold text-gray-600 text-md md:text-xl mr-2'>Text</label>
            <input required type="radio" name='type' value='text' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="text" className='font-bold text-gray-600 text-md md:text-xl mr-2' value='video' >Video</label>
            <input required type="radio" name='type' value='video'/>
          </div>
        </div>
      <div  className='flex items-center gap-4 flex-wrap'>
          <label className='font-bold text-gray-600 text-md md:text-xl' htmlFor="Thumbnail">Thumbnail:</label>
          <input required type="file" className='
          shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex-1
          ' />
        </div>
      <div  className='flex items-center gap-4 flex-wrap'>
          <label className='font-bold text-gray-600 text-md md:text-xl' htmlFor="category">Category:</label>
          <select className='
          shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex-1'>
            <option value="Beauty">Beauty</option>
            <option value="Health">Health</option>
          </select>
        </div>
      <div  className='flex items-center gap-4 flex-wrap'>
          <label className='font-bold text-gray-600 text-md md:text-xl' htmlFor="image">Image:</label>
          <input required type="file" className='
          shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex-1
          '/>
        </div>
        <div className='flex justify-center items-center'>
          <button className='px-4 py-1 rounded-md bg-yellow-400 font-bold'>CreatePost</button>
        </div>
    </form>
  )
}

export default CreatePost
