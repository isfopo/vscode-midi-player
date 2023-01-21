import React, { useCallback, useMemo, useState } from 'react'
import { Track as ITrack } from '@tonejs/midi'
import { Notes } from './Notes'
import styles from './index.module.css'

export interface TrackProps {
  index: number
  track: ITrack
  duration: number
  width: number
  isExpanded: boolean
  setExpandedTrack: React.Dispatch<React.SetStateAction<number>>
  zoom: number
  offset: number
  mouseDown: boolean
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
  mouseDown,
  setMouseDown,
  onMouseMove,
}) => {
  const name = useMemo<string>(
    () => (track.name !== '' ? track.name : track.instrument.name),
    [track]
  )

  if (track.notes.length === 0) {
    // TODO: have toggle to show hidden tracks
    return <></>
  }

  return (
    <tr
      onDoubleClick={() => setExpandedTrack(index)}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseLeave={() => setMouseDown(false)}
      onMouseMove={onMouseMove}
    >
      <td>
        <p>{index + 1}</p>
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td className={mouseDown ? styles['mouse-down'] : null}>
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
