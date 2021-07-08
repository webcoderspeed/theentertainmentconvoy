import React from 'react'
import { Link } from 'react-router-dom';

const PostCard = ({posts}) => {
  
  return (
    <>
    {
      posts && posts.map(post => {
        return (
          <Link to={`/post/${post.title.toLowerCase().replaceAll(' ','-')}/${post.id}`} key={post.id} >
            <div className='bg-white rounded-xl h-auto w-full md:w-96 h-96 card-img-hover hover:shadow-lg shadow-md '>
             <div className='h-60 overflow-hidden rounded-xl rounded-b-none'>
                <img src={post.src} alt={post.title} className='h-full w-full' />
             </div>
              <div className='p-4'>
                <p className='text-sm mb-2 mt-2'>{post.category}</p>
                <h1 className='font-bold'>{post.title.substring(0,36) + '...'}</h1>
                <div className='flex flex-wrap items-center justify-between mt-4'>
                  <Link to={`/user/${post.author.name.replace(' ', '-')}`}><h4 className='hover:text-yellow-400 text-gray-700 font-bold'>{post.author.name}</h4></Link>
                  <p className='text-xs'>{post.postedOn.substring(0,16)}</p>
                </div>
              </div>
          </div>
          </Link>
        )
      })
    } 
    </>
  )
}

export default PostCard
