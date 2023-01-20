import { useState, useRef, useCallback } from 'react'

const TRACK_WIDTH = 256

export const useOffset = (zoom: number) => {
  const [offset, setOffset] = useState<number>(1)

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
            setOffset(
              offset => (offset += lastPosition.current! - event.clientX)
            )
          } else if (event.clientX > lastPosition.current) {
            setOffset(
              offset => (offset -= event.clientX - lastPosition.current!)
            )
          }
        }

        lastPosition.current = event.clientX
      }
    },
    [mouseDown, lastPosition.current, offset]
  )

  return {
    offset: offset,
    width: TRACK_WIDTH,
    setMouseDown,
    onMouseMove,
  }
}
