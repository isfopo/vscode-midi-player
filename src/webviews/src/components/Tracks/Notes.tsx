import { Note as INote } from '@tonejs/midi/dist/Note'
import React, { useMemo, useState } from 'react'
import { Note } from './Note'

export interface NotesProps {
  notes: INote[]
}

export const Notes: React.FC<NotesProps> = ({ notes }) => {
  const [width, setWidth] = useState<number>(128)
  const [height, setHeight] = useState<number>(12)
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="<http://www.w3.org/2000/svg>"
    >
      {notes.map(note => (
        <Note note={note} />
      ))}
    </svg>
  )
}
