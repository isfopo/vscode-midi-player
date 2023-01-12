import React, { useMemo } from 'react'
import * as Tone from 'tone'
import { Range } from '../../../classes/Range'
import { HorizontalLine } from './HorizontalLine'
import { VerticalLine } from './VerticalLine'

export interface GridProps {
  range: Range
  duration: number
  boxWidth: number
  boxHeight: number
  disabled?: boolean
}

export const Grid: React.FC<GridProps> = ({
  range,
  duration,
  boxWidth,
  boxHeight,
  disabled = false,
}) => {
  const divisions = useMemo<number>(
    () => Math.floor(duration / Tone.Transport.PPQ),
    [duration]
  )

  if (disabled) {
    return null
  }

  return (
    <>
      {Array.from(Array(range.distance).keys()).map(i => (
        <HorizontalLine
          index={i}
          range={range}
          boxWidth={boxWidth}
          boxHeight={boxHeight}
        />
      ))}
      {Array.from(Array(divisions).keys()).map(i => (
        <VerticalLine
          index={i}
          range={range}
          divisions={divisions}
          boxWidth={boxWidth}
          boxHeight={boxHeight}
        />
      ))}
    </>
  )
}
