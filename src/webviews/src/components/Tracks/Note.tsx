import { Note as INote } from '@tonejs/midi/dist/Note'
import React from 'react'

export interface NoteProps {
  note: INote
}

export const Note: React.FC<NoteProps> = ({ note }) => {
  return (
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke-width="4"
      stroke="tomato"
      fill="none"
    />
  )
}
