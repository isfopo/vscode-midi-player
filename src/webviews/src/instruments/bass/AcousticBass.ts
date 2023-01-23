import * as Tone from 'tone'

export class AcousticBass extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: {
        A1: 'A1.mp3',
        A2: 'A2.mp3',
        A3: 'A3.mp3',
        B1: 'B1.mp3',
        B2: 'B2.mp3',
        B3: 'B3.mp3',
        Bb1: 'Bb1.mp3',
        Bb2: 'Bb2.mp3',
        C2: 'C2.mp3',
        C3: 'C3.mp3',
        D2: 'D2.mp3',
        Db2: 'Db2.mp3',
        Db3: 'Db3.mp3',
        E2: 'E2.mp3',
        Eb1: 'Eb1.mp3',
        Eb2: 'Eb2.mp3',
        F1: 'F1.mp3',
        F2: 'F2.mp3',
        F3: 'F3.mp3',
        G2: 'G2.mp3',
        Gb2: 'Gb2.mp3',
        Gb3: 'Gb3.mp3',
      },
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/bass/acoustic-bass/',
      onload,
    })
  }
}
