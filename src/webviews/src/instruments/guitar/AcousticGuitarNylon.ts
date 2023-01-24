import * as Tone from 'tone'
import { noteUrls } from '../helpers'

export class AcousticGuitarNylon extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: noteUrls([
        'A2',
        'A3',
        'A4',
        'A#3',
        'A#4',
        'B2',
        'B3',
        'B4',
        'C3',
        'C4',
        'C#3',
        'C#4',
        'D3',
        'D4',
        'D5',
        'D#3',
        'D#4',
        'D#5',
        'E3',
        'E4',
        'E5',
        'F3',
        'F4',
        'F#2',
        'F#3',
        'F#4',
        'G2',
        'G3',
        'G4',
        'G5',
        'G#2',
        'G#3',
        'G#4',
        'G#5',
      ]),
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/guitar/acoustic-guitar-nylon/',
      onload,
    })
  }
}
