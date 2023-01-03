import { Time } from 'tone/build/esm/core/type/Units'

export const parsePosition = (position: Time) => {
  const divisions = position
    .toString()
    .split(':')
    .map(s => parseFloat(s))

  return {
    bars: divisions[0] + 1,
    beats: divisions[1] + 1,
    subdivisions: Math.floor(divisions[2]) + 1,
  }
}
