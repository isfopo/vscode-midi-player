import { Midi } from '@tonejs/midi'
import { useEffect } from 'react'
import VSCodeAPI from '../VSCodeAPI'
import useVSCodeState from './useVSCodeState'

export const useMidiData = () => {
  const [midi, setMidi] = useVSCodeState<Midi | undefined>(
    undefined,
    'midiData'
  )

  useEffect(() => {
    VSCodeAPI.onMessage(message => {
      setMidi(message.data)
    })

    VSCodeAPI.postMessage({
      type: 'fetch',
    })
  }, [])

  return midi
}
