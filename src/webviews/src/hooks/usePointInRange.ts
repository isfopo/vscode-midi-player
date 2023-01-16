import { useCallback, useEffect, useState } from 'react'

export interface PointInRangeOptions {
  min?: number
  initial?: number
  step?: number
  box?: boolean
  update?: (point: number) => number
  deps?: any[]
}

export const usePointInRange = (
  max: number,
  {
    min = 0,
    initial = min,
    step = 1,
    box = false,
    update,
    deps = [],
  }: PointInRangeOptions = {}
) => {
  const [point, _setPoint] = useState<number>(initial)

  const increase = useCallback(() => {
    if (point + step < max) {
      _setPoint(point + step)
    } else if (box) {
      _setPoint(max)
    }
  }, [point, step, max])

  const decrease = useCallback(() => {
    if (point - step >= min) {
      _setPoint(point - step)
    } else if (box) {
      _setPoint(min)
    }
  }, [point, step, min, box])

  useEffect(() => {
    if (update) {
      _setPoint(update(point))
    }
  }, deps)

  return {
    point,
    increase,
    decrease,
  }
}
