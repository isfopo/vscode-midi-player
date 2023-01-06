import React, { useMemo } from 'react'
import { Range } from '../../../classes/Range'

export interface HorizontalLineProps {
  index: number
  range: Range
  duration: number
  boxWidth: number
  boxHeight: number
}

export interface Coordinates {
  x: number
  y: number
}

export const HorizontalLine: React.FC<HorizontalLineProps> = ({
  range,
  duration,
  boxWidth,
  boxHeight,
}) => {
  const start = useMemo<Coordinates>(() => {
    return { x: 0, y: 6 }
  }, [])

  const end = useMemo<Coordinates>(() => {
    return { x: boxWidth, y: 6 }
  }, [])

  return <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="black" />
}
