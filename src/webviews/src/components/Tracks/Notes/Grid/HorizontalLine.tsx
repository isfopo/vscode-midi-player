import React, { useMemo } from 'react'
import { Range } from '../../../classes/Range'

export interface HorizontalLineProps {
  index: number
  range: Range
  boxWidth: number
  boxHeight: number
}

export const HorizontalLine: React.FC<HorizontalLineProps> = ({
  index,
  range,
  boxWidth,
  boxHeight,
}) => {
  const y = useMemo<number>(() => {
    return index * (boxHeight / range.distance)
  }, [index, boxHeight, range])

  const width = useMemo<number>(() => {
    return boxWidth
  }, [boxWidth])

  return <rect x={0} y={y} width={width} height={0.01} />
}
