import React, { useMemo, useState } from 'react'
import { Note as INote } from '@tonejs/midi/dist/Note'
import { Range } from '../../classes/Range'
import { Note } from './Note'
import { Grid } from './Grid'
import { useStyleVariable } from '../../../hooks/useStyleVariable'

export interface NotesProps {
  notes: INote[]
  duration: number
}

export const Notes: React.FC<NotesProps> = ({ notes, duration }) => {
  const [width, setWidth] = useState<number>(128)
  const [height, setHeight] = useState<number>(12)
  const range = useMemo<Range>(() => new Range(notes.map(n => n.midi)), [notes])
  const color = useStyleVariable(
    '--vscode-activityBarItem-profilesHoverForeground'
  )

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="<http://www.w3.org/2000/svg>"
    >
      <Grid
        range={range}
        duration={duration}
        boxWidth={width}
        boxHeight={height}
        disabled
      />
      {notes.map(note => (
        <Note
          note={note}
          range={range}
          duration={duration}
          boxWidth={width}
          boxHeight={height}
          color={color}
        />
      ))}
    </svg>
  )
}
