import React, { useCallback, useMemo } from 'react'
import { Track as ITrack } from '@tonejs/midi'
import { Notes } from './Notes'

export interface TrackProps {
  index: number
  track: ITrack
  duration: number
  width: number
  isExpanded: boolean
  setExpandedTrack: React.Dispatch<React.SetStateAction<number>>
  zoom: number
  offset: number
}

export const Track: React.FC<TrackProps> = ({
  index,
  track,
  duration,
  width,
  isExpanded,
  setExpandedTrack,
  zoom,
  offset,
}) => {
  const name = useMemo<string>(
    () => (track.name !== '' ? track.name : track.instrument.name),
    [track]
  )

  if (track.notes.length === 0) {
    // TODO: have toggle to show hidden tracks
    return <></>
  }

  const onDoubleClick = useCallback(() => {
    setExpandedTrack(index)
  }, [index, setExpandedTrack])

  return (
    <tr onDoubleClick={onDoubleClick}>
      <td>
        <p>{index + 1}</p>
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <Notes
          notes={track.notes}
          duration={duration}
          width={width}
          isExpanded={isExpanded}
          zoom={zoom}
          offset={offset}
        />
      </td>
    </tr>
  )
}
