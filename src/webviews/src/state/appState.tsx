import { Midi } from '@tonejs/midi'
import createVSCodeZustand from './zustandState'

type AppState = {
  midi: Midi | undefined
}

const useAppState = createVSCodeZustand<AppState>('myAppState', set => ({
  midi: undefined,
}))

export default useAppState
