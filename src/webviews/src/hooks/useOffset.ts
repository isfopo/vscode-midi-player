import { useState, useRef, useCallback } from 'react'

const TRACK_WIDTH = 256

export const useOffset = (zoom: number) => {
  // const {
  //   point: offset,
  //   increase: increaseOffset,
  //   decrease: decreaseOffset,
  // } = usePointInRange(TRACK_WIDTH * zoom, {
  //   step: 1,
  //   box: true,
  //   update: useCallback(offset => offset + zoom, [zoom]),
  //   deps: [zoom],
  // })

  const offset = useRef<number>(1)

  const [mouseDown, _setMouseDown] = useState<boolean>(false)
  const lastPosition = useRef<number | undefined>()

  const setMouseDown = useCallback(
    (mouseDown: boolean) => {
      lastPosition.current = undefined
      _setMouseDown(mouseDown)
    },
    [_setMouseDown, lastPosition.current]
  )

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
      if (mouseDown) {
        if (lastPosition.current) {
          if (event.clientX < lastPosition.current) {
            offset.current += lastPosition.current - event.clientX
          } else if (event.clientX > lastPosition.current) {
            offset.current -= event.clientX - lastPosition.current
          }
        }

        lastPosition.current = event.clientX
      }
    },
    [mouseDown, lastPosition.current, offset.current]
  )

  return {
    offset: offset.current,
    width: TRACK_WIDTH,
    setMouseDown,
    onMouseMove,
  }
}
