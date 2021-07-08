import React from 'react';
import PostCard from '../components/PostCard';
import { useHistory  } from 'react-router';
import { posts } from '../api/posts';

const PostPage = () => {

    const history = useHistory();

    const category = history.location.pathname.split('/')[2]

    const capitalize = (word) => {
      const lower = word.toLowerCase();
      return word.charAt(0).toUpperCase() + lower.slice(1);
    }
      

  return (
    <div className='p-4'>
      <div className='w-full mx-auto md:px-12 mt-12 border-t-4 border-yellow-400 pt-4'>
        <div className='w-full'>
          <h1 className='font-bold text-xl md:text-4xl mb-6 mt-6'>{capitalize(category)}</h1>
          <div className='flex flex-wrap justify-center items-center gap-4 '>
            <PostCard posts={posts.filter(post => post.category === capitalize(category))} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage
