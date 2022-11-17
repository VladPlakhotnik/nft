import React from 'react'
import { Video } from './BgVideo.styles'
import Azuki from '../../assets/video/name.mp4'

export const BgVideo: React.FC = () => {
  return (
    <Video muted loop autoPlay>
      <source src={Azuki} type='video/mp4' />
      Your browser does not support the video tag.
    </Video>
  )
}
