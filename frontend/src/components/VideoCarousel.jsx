import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';


const VideoCarousel = ({videos: videosPost}) => {



  const videos = videosPost.filter(video => video.type === 'video')

  console.log(videos)

  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false}  showStatus={false} showArrows={false} className='w-full rounded-2xl overflow-hidden' >
                {
                  videos && <ReactPlayer url={videos[0].src} />
                }
      </Carousel> 
    </>
  )
}

export default VideoCarousel
