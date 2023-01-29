import * as Tone from 'tone'

export class AcousticKit extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: {
        C2: 'kick.mp3',
        D2: 'snare.mp3',
        'F#2': 'hihat.mp3',
        G2: 'tom1.mp3',
        A2: 'tom2.mp3',
        B2: 'tom3.mp3',
        'C#3': 'crash.mp3',
        'D#3': 'ride.mp3',
      },
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/drums/acoustic-kit/',
      onload,
    })
  }
}
