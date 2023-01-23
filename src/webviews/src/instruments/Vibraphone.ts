import * as Tone from 'tone'

export class Vibraphone extends Tone.Sampler {
  constructor(onload: () => void) {
    super({
      urls: {
        A3: 'A3.mp3',
        A4: 'A4.mp3',
        A5: 'A5.mp3',
        B3: 'B3.mp3',
        B4: 'B4.mp3',
        B5: 'B5.mp3',
        C3: 'C3.mp3',
        C4: 'C4.mp3',
        C5: 'C5.mp3',
        C6: 'C6.mp3',
        D3: 'D3.mp3',
        D4: 'D4.mp3',
        D5: 'D5.mp3',
        D6: 'D6.mp3',
        E3: 'E3.mp3',
        E4: 'E4.mp3',
        E5: 'E5.mp3',
        E6: 'E6.mp3',
        F3: 'F3.mp3',
        F4: 'F4.mp3',
        F5: 'F5.mp3',
        F6: 'F6.mp3',
        G3: 'G3.mp3',
        G4: 'G4.mp3',
        G5: 'G5.mp3',
      },
      release: 1,
      baseUrl:
        'https://isfopo.github.io/vscode-midi-player/samples/vibraphone/',
      onload,
    })
  }
}
