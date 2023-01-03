import React, { useMemo } from 'react'
import { Time } from 'tone/build/esm/core/type/Units'
import { parsePosition } from '../../helpers/position'
import { ForegroundBox } from '../boxes/ForegroundBox'

export interface PositionDisplayProps {
  position: Time
}

export const PositionDisplay: React.FC<PositionDisplayProps> = ({
  position,
}) => {
  const { bars, beats, subdivisions } = useMemo(
    () => parsePosition(position),
    [position]
  )

  return (
    <ForegroundBox>
      <p>
        {bars}.{beats}.{subdivisions}
      </p>
    </ForegroundBox>
  )
}
