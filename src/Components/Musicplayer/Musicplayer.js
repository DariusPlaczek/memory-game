import React from 'react'
import AudioPlayer from "react-modular-audio-player";

import {playlist} from '../../Data/playlist'

function Musicplayer() {
  return (
    <div className="musik-player">
      <AudioPlayer hideForward={true} hideRewind={true} audioFiles={playlist} />
    </div>
  )
}

export default Musicplayer
