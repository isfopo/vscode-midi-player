import React, { useCallback, useMemo, useState } from 'react'
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
  onMouseMove: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => void
  setMouseDown: (mouseDown: boolean) => void
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
  setMouseDown,
  onMouseMove,
}) => {
  const name = useMemo<string>(
    () => (track.name !== '' ? track.name : track.instrument.name),
    [track]
  )

  const onDoubleClick = useCallback(() => {
    setExpandedTrack(index)
  }, [index, setExpandedTrack])

  if (track.notes.length === 0) {
    // TODO: have toggle to show hidden tracks
    return <></>
  }

  return (
    <tr
      onDoubleClick={onDoubleClick}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseMove={onMouseMove}
    >
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
