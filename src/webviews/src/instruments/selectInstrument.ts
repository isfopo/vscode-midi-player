import { Track } from '@tonejs/midi'
import { Piano } from './Piano'

export const selectInstrument = (track: Track, onload: () => void) => {
  switch (track.instrument.number) {
    case 0:
      return new Piano(onload)
    default:
      return new Piano(onload)
  }
}
