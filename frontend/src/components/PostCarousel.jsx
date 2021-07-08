import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';


const PostCarousel = ({posts}) => {

  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false}  showStatus={false} showArrows={false} className='w-full rounded-2xl overflow-hidden' >
                {
                  posts && posts.map(post => {
                    return (
                      <NavLink to={`/post/${post.title.toLowerCase().replaceAll(' ','-')}/${post.id}`} key={post.id}>
                        <div className='h-72 md:h-96'>
                        <img className='h-full w-full' src={post.src} alt={post.title} />
                      </div>
                      </NavLink>
                    )
                  })
                }
      </Carousel> 
    </>
  )
}

export default PostCarousel
