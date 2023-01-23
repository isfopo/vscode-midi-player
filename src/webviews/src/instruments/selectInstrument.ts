import { Track } from '@tonejs/midi'
import * as Tone from 'tone'
import { AcousticGuitarNylon } from './guitar/AcousticGuitarNylon'
import { Piano } from './piano/Piano'
import { Vibraphone } from './chromatic-percussion/Vibraphone'
import { AcousticBass } from './bass/AcousticBass'

export const selectInstrument = (track: Track, onload: () => void) => {
  switch (track.instrument.family) {
    case 'piano':
      switch (track.instrument.number) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          return new Piano(onload)
        default:
          return new Piano(onload)
      }
    case 'chromatic percussion':
      switch (track.instrument.number) {
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
          return new Vibraphone(onload)
        case 13:
        case 14:
        case 15:
          return new Piano(onload)
        default:
          return new Piano(onload)
      }
    case 'organ':
      switch (track.instrument.number) {
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
          return new Piano(onload)
        default:
          return new Piano(onload)
      }
    case 'guitar':
      switch (track.instrument.number) {
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
          return new AcousticGuitarNylon(onload)
        default:
          return new AcousticGuitarNylon(onload)
      }
    case 'bass':
      switch (track.instrument.number) {
        case 32:
          return new AcousticBass(onload)
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        default:
          return new AcousticBass(onload)
      }
    case 'strings':
      switch (track.instrument.number) {
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
          return new Piano(onload)
        default:
          return new Piano(onload)
      }
    case 'ensemble':
      switch (track.instrument.number) {
        case 48:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
          return new Piano(onload)
        default:
          return new Piano(onload)
      }
    case 'brass':
      switch (track.instrument.number) {
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
          return new Piano(onload)
        default:
          return new Piano(onload)
      }
    case 'reed':
      switch (track.instrument.number) {
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
          return new Piano(onload)
        default:
          return new Piano(onload)
      }
    case 'pipe':
      switch (track.instrument.number) {
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
          return new Piano(onload)
        default:
          return new Piano(onload)
      }
    case 'drums':
      switch (track.instrument.number) {
        case 0: // standard kit
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          return new Tone.Sampler()
        default:
          return new Tone.Sampler()
      }
    default:
      return new Piano(onload)
  }
}
