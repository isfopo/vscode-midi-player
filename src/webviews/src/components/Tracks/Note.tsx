import { Note as INote } from '@tonejs/midi/dist/Note'
import React, { useMemo } from 'react'
import { Range } from '../classes/Range'

export interface NoteProps {
  note: INote
  range: Range
  duration: number
  boxWidth: number
  boxHeight: number
}

export const Note: React.FC<NoteProps> = ({
  note,
  range,
  duration,
  boxWidth,
  boxHeight,
}) => {
  const x = useMemo<number>(() => {
    return boxWidth * (note.ticks / duration)
  }, [note.midi])

  const y = useMemo<number>(() => {
    return (-note.midi + range.max) * (boxHeight / range.distance)
  }, [note.midi])

  const width = useMemo<number>(() => {
    return boxWidth * (note.durationTicks / duration)
  }, [note.midi])

  const height = useMemo<number>(() => {
    return 10 / range.distance
  }, [range])

  return <rect x={x} y={y} width={width} height={height} />
}
