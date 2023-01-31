import * as Tone from 'tone'

export class Timpani extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: {
        A2: 'A2.mp3',
        A3: 'A3.mp3',
        Ab2: 'Ab2.mp3',
        Ab3: 'Ab3.mp3',
        Bb2: 'Bb2.mp3',
        Bb3: 'Bb3.mp3',
        C2: 'C2.mp3',
        C3: 'C3.mp3',
        D2: 'D2.mp3',
        D3: 'D3.mp3',
        E2: 'E2.mp3',
        F2: 'F2.mp3',
        G3: 'G3.mp3',
        Gb3: 'Gb3.mp3',
      },
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/strings/timpani/',
      onload,
    })
  }
}
