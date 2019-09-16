import { IHash, Entry, CONFIG, APPLY, ENTRIES, CREATE } from 'src/types'
import { $uuid, $action } from 'src/utils'

export const bootstrapApp = () => {
  return function(dispatch: any) {
    return dispatch({
      type: $action(CONFIG, APPLY),
      payload: {

      },
    })
  }
}

export const createEntry = () => {
  return function(dispatch: any) {
    const uuid: string = $uuid()
    const key: string = uuid
    const time: string = `${new Date().getTime()}`
    const colorHex = `#777`
    const attrs: IHash = { time, colorHex }
    const reducer = (data: any) => {
      // console.log(`#reducer`)

      return data
    }
    const newEntries: Entry[] = [
      { key, data: { uuid, attrs }, reducer }
    ]

    return dispatch({
      type: $action(ENTRIES, CREATE),
      payload: { newEntries },
    })
  }
}
