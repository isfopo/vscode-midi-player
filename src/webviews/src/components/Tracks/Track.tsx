import React, { useMemo } from 'react'
import { Track as ITrack } from '@tonejs/midi'
import { Notes } from './Notes'

export interface TrackProps {
  index: number
  track: ITrack
  duration: number
}

export const Track: React.FC<TrackProps> = ({ index, track, duration }) => {
  const name = useMemo<string>(
    () => (track.name !== '' ? track.name : track.instrument.name),
    [track]
  )

  return (
    <span>
      <p>{index + 1}</p>
      <span>
        <p>{name}</p>
      </span>
      <Notes notes={track.notes} duration={duration} />
    </span>
  )
}
