import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Track as ITrack } from '@tonejs/midi'
import { Track } from './Track'
import styles from './index.module.css'
import { usePointInRange } from '../../hooks/usePointInRange'
import { ButtonBase } from '../buttons/ButtonBase'
import {
  VscZoomIn,
  VscZoomOut,
  VscArrowLeft,
  VscArrowRight,
} from 'react-icons/vsc'
import { useOffset } from '../../hooks/useOffset'

export interface TracksProps {
  tracks: ITrack[]
}

const MAX_ZOOM = 128

export const Tracks: React.FC<TracksProps> = ({ tracks }) => {
  const [expandedTrack, setExpandedTrack] = useState<number>(-1)

  const duration = useMemo<number>(() => {
    return Math.max(
      ...tracks.map(track =>
        Math.max(...track.notes.map(note => note.ticks + note.durationTicks))
      )
    )
  }, [tracks])

  const {
    point: zoom,
    increase: increaseZoom,
    decrease: decreaseZoom,
  } = usePointInRange(MAX_ZOOM, { min: 1, initial: 1 })

  const { offset, width, mouseDown, onMouseMove, setMouseDown } =
    useOffset(zoom)

  const onClick = useCallback((index: number) => {
    setExpandedTrack(index)
  }, [])

  return (
    <table className={styles['container']}>
      <thead>
        <tr>
          <th>
            <ButtonBase
              icon={<VscZoomIn />}
              onClick={increaseZoom}
              size="small"
            />
            <ButtonBase
              icon={<VscZoomOut />}
              onClick={decreaseZoom}
              size="small"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track, index) => (
          <Track
            index={index}
            track={track}
            duration={duration}
            width={width}
            isExpanded={index === expandedTrack}
            setExpandedTrack={setExpandedTrack}
            zoom={zoom}
            offset={offset}
            mouseDown={mouseDown}
            setMouseDown={setMouseDown}
            onMouseMove={onMouseMove}
          />
        ))}
      </tbody>
    </table>
  )
}
