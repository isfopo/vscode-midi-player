import { Midi } from '@tonejs/midi'
import createVSCodeZustand from './zustandState'
import VSCodeAPI from '../VSCodeAPI'

type AppState = {
  midi: Midi | undefined
}

const useAppState = createVSCodeZustand<AppState>('myAppState', set => ({
  midi: undefined,
}))

export default useAppState
