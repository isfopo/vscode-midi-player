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
    <tr>
      <td>
        <p>{index + 1}</p>
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <Notes notes={track.notes} duration={duration} />
      </td>
    </tr>
  )
}
