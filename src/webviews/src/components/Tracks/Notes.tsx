import { Note as INote } from '@tonejs/midi/dist/Note'
import React from 'react'
import { Note } from './Note'

export interface NotesProps {
  notes: INote[]
}

export const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <svg viewBox="0 0 128 24" xmlns="<http://www.w3.org/2000/svg>">
      {notes.map(note => (
        <Note note={note} />
      ))}
    </svg>
  )
}
