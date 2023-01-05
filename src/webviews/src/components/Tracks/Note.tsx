import { Note as INote } from '@tonejs/midi/dist/Note'
import React, { useMemo } from 'react'

export interface NoteProps {
  note: INote
}

export const Note: React.FC<NoteProps> = ({ note }) => {
  const y = useMemo<number>(() => {
    return note.midi / -10 + 12.7
  }, [note.midi])

  return (
    <rect
      x={note.ticks / 1000}
      y={y}
      width={note.durationTicks / 1000}
      height=".5"
    />
  )
}
