import React from 'react'
import { Track as ITrack } from '@tonejs/midi'

export interface TrackProps {
  index: number
  track: ITrack
}

export const Track: React.FC<TrackProps> = ({ index, track }) => {
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
    </span>
  )
}
