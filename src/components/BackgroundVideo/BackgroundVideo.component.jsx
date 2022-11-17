import React from "react";
import { Video } from './BackgroundVideo.styles'

export const BackgroundVideo = () => {
  return (
        <Video muted loop autoPlay>
          <source src='/content/video/name.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
  );
}