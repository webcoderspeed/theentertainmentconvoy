import React from 'react'
import VideoCarousel from '../components/VideoCarousel';
import { posts as videos } from '../api/posts';

const VideoPage = () => {
  return (
    <div>
      <VideoCarousel videos = {videos}/>
    </div>
  )
}

export default VideoPage
