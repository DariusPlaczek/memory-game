import React from 'react'
import AudioPlayer from "react-modular-audio-player";

import {playlist} from './playlist'

function Musikplayer() {
  return (
    <div className="musik-player">
      <AudioPlayer hideForward={true} hideRewind={true} audioFiles={playlist} />
    </div>
  )
}

export default Musikplayer
