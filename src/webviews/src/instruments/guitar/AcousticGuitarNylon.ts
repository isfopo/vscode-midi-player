import * as Tone from 'tone'
import { noteUrls } from '../helpers'

export class AcousticGuitarNylon extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: noteUrls([
        'A2',
        'A3',
        'A4',
        'As3',
        'As4',
        'B2',
        'B3',
        'B4',
        'C3',
        'C4',
        'Cs3',
        'Cs4',
        'D3',
        'D4',
        'D5',
        'Ds3',
        'Ds4',
        'Ds5',
        'E3',
        'E4',
        'E5',
        'F3',
        'F4',
        'Fs2',
        'Fs3',
        'Fs4',
        'G2',
        'G3',
        'G4',
        'G5',
        'Gs2',
        'Gs3',
        'Gs4',
        'Gs5',
      ]),
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/guitar/acoustic-guitar-nylon/',
      onload,
    })
  }
}
