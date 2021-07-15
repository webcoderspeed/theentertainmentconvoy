
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { Link, useHistory } from 'react-router-dom';

const ProfileScreen = () => {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[mobileNumber, setMobileNumber] = useState('');
  const[gender, setGender] = useState('');
  const[location, setLocation] = useState('');

  const dispatch = useDispatch()
  const history = useHistory()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin;

  console.log(user)

    useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email) 
        setGender(user.gender) 
        setLocation(user.location)
        setMobileNumber(user.mobileNumber) 
      }
    }
  }, [dispatch, history, userInfo, user])




  return (
    <div className='bg-gray-100 gap-5 flex flex-col justify-center items-center md:grid md:grid-cols-5'>
      {/* User Info */}
      <div className='p-4 col-span-2'>
        <p className='text-xl font-bold text-xl text-emerald-400'>{ loading && 'Loading...' }</p>
        <p className='text-xl font-bold text-xl text-red-800'>{ error }</p>
        <table>
        <caption className='px-4 p-1 rounded-md font-bold rounded-b-none text-2xl md:text-4xl mb-6'>User Info</caption>
          <tbody>
            <tr>
            <td className='px-4 py-2 font-bold text-lg md:text-xl '>Name:</td>
            <td className='px-4 py-2 bg-white text-sm md:text-md'>{name}</td>
            </tr>
            <tr>
            <td className='px-4 py-2 font-bold text-lg md:text-xl '>Email:</td>
            <td className='px-4 py-2 bg-white text-sm md:text-md'>{email}</td>
            </tr>
            <tr>
            <td className='px-4 py-2 font-bold text-lg md:text-xl '>Mobile Number:</td>
            <td className='px-4 py-2 bg-white text-sm md:text-md'>{mobileNumber || 'Add your mobile number'}</td>
            </tr>
            <tr>
            <td className='px-4 py-2 font-bold text-lg md:text-xl '>Gender:</td>
            <td className='px-4 py-2 bg-white text-sm md:text-md'>{gender || 'Add your gender'}</td>
            </tr>
            <tr>
            <td className='px-4 py-2 font-bold text-lg md:text-xl '>Location:</td>
            <td className='px-4 py-2 bg-white text-sm md:text-md'>{location || 'Add your location'}</td>
            </tr>
          </tbody>
        </table>
        <div className='flex w-full justify-center items-center mt-6 mb-6 gap-5'>
          <Link to={`/user/edit/${userInfo.name}/${userInfo._id}`} className='px-4 py-1 rounded-md font-bold bg-yellow-400'>Edit Profile</Link>
        </div>
      </div>

      {/* User Posts */}

      <div className='bg-purple-800 p-4 col-span-3 w-full'>

      </div>
    </div>
  )
}

export default ProfileScreen
