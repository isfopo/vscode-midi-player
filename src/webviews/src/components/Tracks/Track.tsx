import React from 'react'
import { Track as ITrack } from '@tonejs/midi'

export interface TrackProps {
  track: ITrack
}

export const Track: React.FC<TrackProps> = ({ track }) => {
  return <p>{track.instrument.name}</p>
}
