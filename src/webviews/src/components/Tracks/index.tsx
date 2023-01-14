import React, { useCallback, useMemo, useState } from 'react'
import { Track as ITrack } from '@tonejs/midi'
import { Track } from './Track'
import styles from './index.module.css'
import { usePointInRange } from '../../hooks/usePointInRange'

export interface TracksProps {
  tracks: ITrack[]
}

export const Tracks: React.FC<TracksProps> = ({ tracks }) => {
  const [expandedTrack, setExpandedTrack] = useState<number>(-1)
  const {
    point: offset,
    increase: increaseOffset,
    decrease: decreaseOffset,
  } = usePointInRange(128)

  const {
    point: zoom,
    increase: increaseZoom,
    decrease: decreaseZoom,
  } = usePointInRange(128, { min: 1, initial: 1 })

  const onClick = useCallback((index: number) => {
    setExpandedTrack(index)
  }, [])

  const duration = useMemo<number>(() => {
    return Math.max(
      ...tracks.map(track =>
        Math.max(...track.notes.map(note => note.ticks + note.durationTicks))
      )
    )
  }, [tracks])

  return (
    <table className={styles['container']}>
      {tracks.map((track, index) => (
        <Track
          index={index}
          track={track}
          duration={duration}
          isExpanded={index === expandedTrack}
          setExpandedTrack={setExpandedTrack}
        />
      ))}
    </table>
  )
}
