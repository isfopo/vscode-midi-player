import React, { useMemo } from 'react'
import { Range } from '../../../classes/Range'

export interface VerticalLineProps {
  index: number
  range: Range
  divisions: number
  boxWidth: number
  boxHeight: number
}

export const VerticalLine: React.FC<VerticalLineProps> = ({
  index,
  range,
  divisions,
  boxWidth,
  boxHeight,
}) => {
  const x = useMemo<number>(() => {
    return index * (boxWidth / divisions)
  }, [index, boxHeight, divisions])

  const height = useMemo<number>(() => {
    return boxHeight
  }, [boxHeight])

  return <rect x={x} y={0} width={0.02} height={height} />
}
