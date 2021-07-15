import React, { useEffect } from 'react';
import PostCarousel from '../components/PostCarousel';
import PostCard from '../components/PostCard';
import { posts as textPost} from '../api/posts';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGoogle } from '../actions/userActions';


const HomePage = () => {

  const posts = textPost.filter(post => post.type === 'text')
  const user = useSelector(state => state.userloginWithGoogle)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loginWithGoogle())
  }, [])
  

  return (
    <div className='p-4'>
      <div className='md:px-48'><PostCarousel posts = {posts} /></div>
      <div className='w-full mx-auto md:px-12 mt-12 border-t-4 border-yellow-400 pt-4'>
        <div className='w-full'>
          <h1 className='font-bold text-3xl capitalize mb-6 mt-6'>Latests posts</h1>
          <div className='flex flex-wrap justify-center items-center gap-4 '>
            <PostCard posts = {posts} />
          </div>
        </div>
      </div>
      <div className='w-full mt-12 border-t-4 border-yellow-400 pt-4'>
        <div className='w-full'>
          <h1 className='font-bold text-3xl capitalize mb-6 mt-6'>Health</h1>
          <div className='flex flex-wrap justify-center items-center gap-4 '>
            <PostCard posts={posts.filter(post => post.category === 'Health')} />
          </div>
        </div>
      </div>
      <div className='w-full mt-12 border-t-4 border-yellow-400 pt-4'>
        <div className='w-full'>
          <h1 className='font-bold text-3xl capitalize mb-6 mt-6'>Technology</h1>
          <div className='flex flex-wrap justify-center items-center gap-4 '>
            <PostCard posts={posts.filter(post => post.category === 'Technology')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
