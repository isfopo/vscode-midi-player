import { Note as INote } from '@tonejs/midi/dist/Note'
import React from 'react'

export interface NoteProps {
  note: INote
}

export const Note: React.FC<NoteProps> = ({ note }) => {
  return (
    <rect
      x={note.ticks / 1000}
      y={note.midi / 10}
      width={note.durationTicks / 1000}
      height=".5"
    />
  )
}
