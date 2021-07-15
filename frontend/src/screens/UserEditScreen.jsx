import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { BsCloudUpload } from 'react-icons/bs';
import axios from 'axios';

const UserEditScreen = () => {

  const { userId } = useParams();
  const history = useHistory();

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[mobileNumber, setMobileNumber] = useState('');
  const[gender, setGender] = useState('');
  const[location, setLocation] = useState('');
  const [file, setFile] = useState('')
  const [fileName, setFileName] = useState('')
  const [fileUploadError, setFileUploadError] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile


  useEffect(() => {
     if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: 'USER_UPDATE_PROFILE_RESET' })
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name || '')
        setEmail(user.email || '')
        setGender(user.gender || '')
        setLocation(user.location || '')
        setMobileNumber(user.mobileNumber || '')
        setFile(userInfo.file || '')
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const uploadFileHandler = async (e) => {

    const formData = new FormData()
    formData.append('file', e.target.files[0])
    setFileName(e.target.files[0].name)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/uploads', formData, config)

      if(data.message === 'MimeType : image/png,image/jpeg,video/mp4,image/png') {
        setFileUploadError(true)
      } else {
        setFileUploadError(false)
        setFile(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUserProfile({ _id: userId, name, email, gender, location, mobileNumber, file })) 
    history.push('/profile')
  }

  return (
    <div className='flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <p className='text-xl font-bold text-xl text-emerald-400'>{ loading && 'Loading...' }</p>
        <p className='text-xl font-bold text-xl text-red-400'>{ error }</p>
        <h1 className='font-bold text-xl md:mt-6 mb-4'>Update your profile</h1>
        <div className='grid grid-cols-2 gap-2 md:gap-4 flex'>
          <label className='font-bold'>Avatar:</label>
          <div className='px-2 py-1 rounded-md border col-span-2'>
          <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
          <div className="absolute">
            <div className="flex flex-col items-center">
              <BsCloudUpload className="fa fa-cloud-upload fa-3x text-gray-200 text-4xl"/>
              <span className="block text-gray-400 font-normal">Attach you files here</span> <span className="block text-gray-400 font-normal">or</span> <span className="block text-yellow-400 font-normal">Browse files</span> </div>
          </div><input type="file" className="h-full w-full opacity-0" name="file" onChange={uploadFileHandler} />
          </div>    
          <p className='text-center p-2  text-xs font-bold'>{ fileName }</p>
          {fileUploadError ? <p className='w-50 text-xs text-red-400'>
             Accepted FileType : image/png,image/jpeg,video/mp4,image/png
          </p> : <></>}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 md:gap-4'>
          <label className='font-bold'>Name:</label>
          <input 
          className='px-2 py-1 rounded-md border col-span-2'
          type="text" 
          value={name} 
          required 
          onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='grid grid-cols-2 gap-2 md:gap-4'>
          <label>Email:</label>
          <input 
          className='px-2 py-1 rounded-md border col-span-2'
          type="email" 
          value={email} 
          required 
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='grid grid-cols-2 gap-2 md:gap-4'>
          <label>Gender:</label>
          <select 
          className='px-2 py-1 rounded-md border col-span-2'
          value={gender}
          required
          onChange={(e) => setGender(e.target.value)}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          </select>
        </div>
        <div className='grid grid-cols-2 gap-2 md:gap-4'>
          <label>Location:</label>
          <input 
          className='px-2 py-1 rounded-md border col-span-2'
          type="text" 
          value={location} 
          required 
          onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className='grid grid-cols-2 gap-2 md:gap-4'>
          <label>Mobile Number:</label>
          <input 
          className='px-2 py-1 rounded-md border col-span-2'
          type="text" 
          value={mobileNumber} 
          required 
          onChange={(e) => setMobileNumber(e.target.value)} />
        </div>
        <button type='submit'
        className='rounded-md px-4 py-1 bg-yellow-400 font-bold'
        >Update</button>
      </form>
    </div>
  )
}

export default UserEditScreen
