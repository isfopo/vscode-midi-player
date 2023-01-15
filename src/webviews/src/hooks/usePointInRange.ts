import { useCallback, useEffect, useState } from 'react'

export interface PointInRangeOptions {
  min?: number
  initial?: number
  step?: number
  update?: (point: number) => number
  deps?: any[]
}

export const usePointInRange = (
  max: number,
  {
    min = 0,
    initial = min,
    step = 1,
    update,
    deps = [],
  }: PointInRangeOptions = {}
) => {
  const [point, _setPoint] = useState<number>(initial)

  const increase = useCallback(() => {
    if (point + step < max) {
      _setPoint(point + step)
    }
  }, [point, step, max])

  const decrease = useCallback(() => {
    if (point - step >= min) {
      _setPoint(point - step)
    }
  }, [point, step, min])

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
