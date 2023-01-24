import * as Tone from 'tone'
import { noteUrls } from '../helpers'

export class AcousticBass extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: noteUrls([
        'A1',
        'A2',
        'A3',
        'B1',
        'B2',
        'B3',
        'Bb1',
        'Bb2',
        'C2',
        'C3',
        'D2',
        'Db2',
        'Db3',
        'E2',
        'Eb1',
        'Eb2',
        'F1',
        'F2',
        'F3',
        'G2',
        'Gb2',
        'Gb3',
      ]),
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/bass/acoustic-bass/',
      onload,
    })
  }
}
