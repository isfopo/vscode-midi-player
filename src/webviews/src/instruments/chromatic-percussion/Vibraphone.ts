import * as Tone from 'tone'
import { noteUrls } from '../helpers'

export class Vibraphone extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: noteUrls([
        'A3',
        'A4',
        'A5',
        'B3',
        'B4',
        'B5',
        'C3',
        'C4',
        'C5',
        'C6',
        'D3',
        'D4',
        'D5',
        'D6',
        'E3',
        'E4',
        'E5',
        'E6',
        'F3',
        'F4',
        'F5',
        'F6',
        'G3',
        'G4',
        'G5',
      ]),
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/chromatic-percussion/vibraphone/',
      onload,
    })
  }
}
