import { EntriesState, Entry, ENTRIES, CREATE, CHANGE } from 'src/types'
import { $action } from 'src/utils'

const initEntries: EntriesState = {
  entries: [],
}

export default (
  state: EntriesState = initEntries,
  { type, payload }: any
): EntriesState => {
  switch (type) {
    case $action(ENTRIES, CREATE): {
      const { entries: entriesPrevious } = state
      const { newEntries } = payload
      const entries: Entry[] = [...entriesPrevious, ...newEntries]

      return {
        ...state,
        entries,
      }
    }

    case $action(ENTRIES, CHANGE): {
      return { ...payload }
    }

    default:
      return state
  }
}
