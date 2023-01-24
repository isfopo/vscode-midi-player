import * as Tone from 'tone'
import { noteUrls } from '../helpers'

export class Piano extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: noteUrls([
        'A0',
        'C1',
        'D#1',
        'F#1',
        'A1',
        'C2',
        'D#2',
        'F#2',
        'A2',
        'C3',
        'D#3',
        'F#3',
        'A3',
        'C4',
        'D#4',
        'F#4',
        'A4',
        'C5',
        'D#5',
        'F#5',
        'A5',
        'C6',
        'D#6',
        'F#6',
        'A6',
        'C7',
        'D#7',
        'F#7',
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
