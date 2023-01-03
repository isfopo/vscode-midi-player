import React from 'react'
import { Track as ITrack } from '@tonejs/midi'
import { Track } from './Track'
import styles from './index.module.css'

export interface TracksProps {
  tracks: ITrack[]
}

export const Tracks: React.FC<TracksProps> = ({ tracks }) => {
  return (
    <div className={styles['container']}>
      {tracks.map((track, index) => (
        <Track index={index} track={track} />
      ))}
    </div>
  )
}
