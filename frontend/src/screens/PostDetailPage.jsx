import React from 'react';
import { useParams } from 'react-router-dom';
import ShareAndFollow from '../components/ShareAndFollow';
import { posts } from '../api/posts';

const PostDetailPage = () => {

  const { id } = useParams();

  const clickedPost = posts.filter(post => post.id === id)

  console.log(clickedPost)

  return (
    <div className='p-4 md:px-32'>
      {
        clickedPost && 
        <div>
          <img src={clickedPost[0].src} alt={clickedPost[0].title} className='w-full h-96 rounded-xl' />
          <div className='mt-4 mb-4'>
            <h1 className='text-xl sm:text-2xl md:text-4xl md:text-center mt-4 mb-4 font-bold'>{clickedPost[0].title}</h1>
            <ShareAndFollow author={clickedPost[0].author}/>
            <p className='text-justify'>{clickedPost[0].description}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default PostDetailPage
