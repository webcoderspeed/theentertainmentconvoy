import React from 'react'

const EditProfileForm = ({
  handleSubmit,
  name, 
  email,
  mobileNumber,
  gender,
  location,
  setName,
  setEmail,
  setGender,
  setMobileNumber,
  setLocation
}) => {
  return (
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
  )
}

export default EditProfileForm
