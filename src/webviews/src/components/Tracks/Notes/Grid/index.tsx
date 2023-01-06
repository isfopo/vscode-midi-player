import { Note as INote } from '@tonejs/midi/dist/Note'
import React, { useMemo } from 'react'
import { Range } from '../../../classes/Range'
import { HorizontalLine } from './HorizontalLine'

export interface GridProps {
  range: Range
  duration: number
  boxWidth: number
  boxHeight: number
}

export const Grid: React.FC<GridProps> = ({
  range,
  duration,
  boxWidth,
  boxHeight,
}) => {
  return (
    <>
      {Array.from(Array(range.distance).keys()).map(i => (
        <HorizontalLine
          index={i}
          range={range}
          duration={duration}
          boxWidth={boxWidth}
          boxHeight={boxHeight}
        />
      ))}
    </>
  )
}
