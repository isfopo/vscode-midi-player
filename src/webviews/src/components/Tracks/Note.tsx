import { Note as INote } from '@tonejs/midi/dist/Note'
import React, { useMemo } from 'react'

export interface NoteProps {
  note: INote
}

export const Note: React.FC<NoteProps> = ({ note }) => {
  const x = useMemo<number>(() => {
    return note.ticks / 1000
  }, [note.midi])

  const y = useMemo<number>(() => {
    return note.midi / -10 + 12.7
  }, [note.midi])

  const width = useMemo<number>(() => {
    return note.durationTicks / 1000
  }, [note.midi])

  return <rect x={x} y={y} width={width} height=".5" />
}
