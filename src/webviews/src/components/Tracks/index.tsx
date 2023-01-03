import React from 'react'
import { Track as ITrack } from '@tonejs/midi'
import { Track } from './Track'

export interface TracksProps {
  tracks: ITrack[]
}

export const Tracks: React.FC<TracksProps> = ({ tracks }) => {
  return (
    <div>
      {tracks.map(track => (
        <Track track={track} />
      ))}
    </div>
  )
}
