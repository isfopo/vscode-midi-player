import React, { useMemo } from 'react'
import { Time } from 'tone/build/esm/core/type/Units'
import { ForegroundBox } from '../Boxes/ForegroundBox'

export interface PositionDisplayProps {
  position: Time
}

export const PositionDisplay: React.FC<PositionDisplayProps> = ({
  position,
}) => {
  const divisions = useMemo<number[]>(
    () =>
      position
        .toString()
        .split(':')
        .map(s => parseFloat(s)),
    [position]
  )

  const bars = useMemo<number>(() => divisions[0] + 1, [divisions])
  const beats = useMemo<number>(() => divisions[1] + 1, [divisions])
  const subdivisions = useMemo<number>(
    () => Math.floor(divisions[2]) + 1,
    [divisions]
  )

  return (
    <ForegroundBox>
      <p>
        {bars}.{beats}.{subdivisions}
      </p>
    </ForegroundBox>
  )
}
