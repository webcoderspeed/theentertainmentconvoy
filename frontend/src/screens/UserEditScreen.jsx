import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../actions/userActions';

const UserEditScreen = () => {

  const { userId } = useParams();
  const history = useHistory();

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[mobileNumber, setMobileNumber] = useState('');
  const[gender, setGender] = useState('');
  const[location, setLocation] = useState('');

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
        setName(user.name)
        setEmail(user.email)
        setGender(user.gender)
        setLocation(user.location)
        setMobileNumber(user.mobileNumber)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUserProfile({ _id: userId, name, email, gender, location, mobileNumber })) 
    history.push('/profile')
  }

  return (
    <div className='flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <p className='text-xl font-bold text-xl text-emerald-400'>{ loading && 'Loading...' }</p>
        <p className='text-xl font-bold text-xl text-red-400'>{ error }</p>
        <h1 className='font-bold text-xl mt-6 mb-4'>Update your profile</h1>
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
