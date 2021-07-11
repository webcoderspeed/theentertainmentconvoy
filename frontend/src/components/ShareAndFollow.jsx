import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../actions/userActions';

const ShareAndFollow = ({author}) => {

  const [alreadyFollow, setAlreadyFollow] = useState(false)

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { following } = userInfo;

  const userToFollow = author.id;

  const handleFollow = (e) => {
      e.preventDefault()
        dispatch(followUser(userToFollow))
        setAlreadyFollow(true)
  }


  const handleUnFollow = (e) => {
    e.preventDefault()
        dispatch(unFollowUser(userToFollow))
        setAlreadyFollow(false)
  }

  useEffect(() => {
    if(following && following.includes(userToFollow)){
      setAlreadyFollow(true)
    } else {
      setAlreadyFollow(false)
    }
  }, [following])

  return (
      <div className="flex justify-between items-center w-full gap-5 p-4 mt-4 mb-4">
        <div className='flex gap-3 items-center'>
          <Avatar src='' />
        <div>
          <h4 className='font-bold text-gray-700 text-sm'>{author.name}</h4>
          <span className='text-gray-500 text-xs md:text-sm'>{new Date().toUTCString().substring(0,16)}</span>
        </div>
        </div>
        {
        alreadyFollow ? (
        <button onClick={handleUnFollow} className='font-bold px-4 py-1 bg-yellow-400'>UnFollow</button>
        ) : (
        <button onClick={handleFollow} className='font-bold px-4 py-1 bg-yellow-400'>Follow</button>
        )
      }
      </div>
  )
}

export default ShareAndFollow
