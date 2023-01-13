import React, { useMemo } from 'react'
import { Note as INote } from '@tonejs/midi/dist/Note'
import { Range } from '../../classes/Range'
import { darken } from 'polished'

const contrast = 1.5

export interface NoteProps {
  note: INote
  range: Range
  duration: number
  boxWidth: number
  boxHeight: number
  color: string
}

export const Note: React.FC<NoteProps> = ({
  note,
  range,
  duration,
  boxWidth,
  boxHeight,
  color,
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
    return boxHeight / range.distance
  }, [range])

  const fill = useMemo<string>(() => {
    return darken(Math.abs(note.velocity * contrast - 1), color)
  }, [color])

  return <rect x={x} y={y} width={width} height={height} fill={fill} />
}
