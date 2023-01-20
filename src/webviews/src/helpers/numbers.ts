export const limitMax = (value: number, max: number) => {
  return value < max ? value : max
}

export const limitMin = (value: number, min: number) => {
  return value > min ? value : min
}
