import { ConfigState, CONFIG, APPLY, CHANGE } from 'src/types'
import { $action } from 'src/utils'

const initState: ConfigState = {
  name: `rocket`,
  title: `v1.0`,
}

export default (
  state: ConfigState = initState,
  { type, payload }: any
): ConfigState => {
  switch (type) {
    case $action(CONFIG, APPLY): {
      return { ...payload }
    }

    case $action(CONFIG, CHANGE): {
      return { ...payload }
    }

    default:
      return state
  }
}
