import React from 'react'
import { Track as ITrack } from '@tonejs/midi'

export interface TrackProps {
  index: number
  track: ITrack
}

export const Track: React.FC<TrackProps> = ({ index, track }) => {
  return (
    <span>
      <p>{index + 1}</p>
      <span>
        <p>{track.instrument.name}</p>
      </span>
    </span>
  )
}
