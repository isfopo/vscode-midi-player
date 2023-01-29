import * as Tone from 'tone'

export class Violin extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: {
        A3: 'A3.mp3',
        A4: 'A4.mp3',
        Ab3: 'Ab3.mp3',
        Ab4: 'Ab4.mp3',
        Ab5: 'Ab5.mp3',
        B3: 'B3.mp3',
        B5: 'B5.mp3',
        Bb5: 'Bb5.mp3',
        Bb6: 'Bb6.mp3',
        C4: 'C4.mp3',
        C5: 'C5.mp3',
        C6: 'C6.mp3',
        D4: 'D4.mp3',
        D5: 'D5.mp3',
        D6: 'D6.mp3',
        Db4: 'Db4.mp3',
        Db5: 'Db5.mp3',
        Db6: 'Db6.mp3',
        E5: 'E5.mp3',
        Eb4: 'Eb4.mp3',
        Eb5: 'Eb5.mp3',
        F4: 'F4.mp3',
        F5: 'F5.mp3',
        G3: 'G3.mp3',
        G4: 'G4.mp3',
        G5: 'G5.mp3',
        Gb4: 'Gb4.mp3',
        Gb5: 'Gb5.mp3',
        Gb6: 'Gb6.mp3',
      },
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/strings/violin/',
      onload,
    })
  }
}
