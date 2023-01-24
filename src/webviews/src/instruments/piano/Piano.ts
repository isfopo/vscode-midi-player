import * as Tone from 'tone'
import { noteUrls } from '../helpers'

export class Piano extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: noteUrls([
        'A0',
        'C1',
        'Ds1',
        'Fs1',
        'A1',
        'C2',
        'Ds2',
        'Fs2',
        'A2',
        'C3',
        'Ds3',
        'Fs3',
        'A3',
        'C4',
        'Ds4',
        'Fs4',
        'A4',
        'C5',
        'Ds5',
        'Fs5',
        'A5',
        'C6',
        'Ds6',
        'Fs6',
        'A6',
        'C7',
        'Ds7',
        'Fs7',
        'A7',
        'C8',
      ]),
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/piano/acoustic-grand-piano/',
      onload,
    })
  }
}
