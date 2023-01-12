import { useMemo } from 'react'

export const useStyleVariable = (name: string) => {
  const style = getComputedStyle(document.body)
  return useMemo(() => style.getPropertyValue(name), [name])
}
