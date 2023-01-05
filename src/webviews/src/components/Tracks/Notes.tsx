import { Note as INote } from '@tonejs/midi/dist/Note'
import React, { useMemo, useState } from 'react'
import { Range } from '../classes/Range'
import { Note } from './Note'

export interface NotesProps {
  notes: INote[]
  duration: number
}

export const Notes: React.FC<NotesProps> = ({ notes, duration }) => {
  const [width, setWidth] = useState<number>(128)
  const [height, setHeight] = useState<number>(12)
  const range = useMemo<Range>(() => new Range(notes.map(n => n.midi)), [notes])

  return (
    <svg
      viewBox={`0 0 ${duration / 1000} ${height}`}
      xmlns="<http://www.w3.org/2000/svg>"
    >
      {notes.map(note => (
        <Note note={note} />
      ))}
    </svg>
  )
}
