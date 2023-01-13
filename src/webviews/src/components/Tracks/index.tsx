import React, { useMemo } from 'react'
import { Track as ITrack } from '@tonejs/midi'
import { Track } from './Track'
import styles from './index.module.css'

export interface TracksProps {
  tracks: ITrack[]
}

export const Tracks: React.FC<TracksProps> = ({ tracks }) => {
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
        <Track index={index} track={track} duration={duration} />
      ))}
    </table>
  )
}
