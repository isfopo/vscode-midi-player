import create, { StateCreator, useStore } from 'zustand'
import { persist, StateStorage } from 'zustand/middleware'
import VSCodeAPI from '../VSCodeAPI'

/**
 * Creates a Zustand store which is automatically persisted to VS Code state.
 *
 * @export
 * @template TState
 * @param {string} name A globally-unique name for the store.
 * @param {StateCreator<TState>} createState A function which creates the initial state.
 * @return {*}  {typeof useStore}
 */
export default function createVSCodeZustand<TState extends unknown>(
  name: string,
  createState: StateCreator<TState>
): typeof useStore {
  return create(
    persist(createState, {
      name,
      getStorage: () => VSCodeStateStorage,
    })
  )
}

const VSCodeStateStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return await VSCodeAPI.getState()[name]
  },
  setItem: async (name: string, value: string): Promise<void> => {
    return VSCodeAPI.setState({
      ...VSCodeAPI.getState(),
      [name]: value,
    })
  },
  removeItem: function (name: string): void | Promise<void> {
    const currentState = VSCodeAPI.getState()

    delete currentState[name]

    return VSCodeAPI.setState({
      ...currentState,
    })
  },
}
