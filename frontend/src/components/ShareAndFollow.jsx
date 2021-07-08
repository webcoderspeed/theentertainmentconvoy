import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';

const ShareAndFollow = ({author}) => {

  const [follow, setFollow] = useState(false)
  console.log(author)


  const handleClick = () => setFollow(!follow)

  return (
      <div className="flex justify-between items-center w-full gap-5 p-4 mt-4 mb-4">
        <div className='flex gap-3 items-center'>
          <Avatar src='' />
        <div>
          <h4 className='font-bold text-gray-700'>{author.name}</h4>
          <span className='text-gray-500 text-sm'>{new Date().toUTCString().substring(0,16)}</span>
        </div>
        </div>
        <button onClick={handleClick} className='px-4 py-1 rounded-md font-bold bg-yellow-400 text-gray-800'>
          { follow ? 'Unfollow' : 'Follow' }
        </button>
      </div>
  )
}

export default ShareAndFollow
