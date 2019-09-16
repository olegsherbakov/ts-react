import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { bootstrapApp } from '@core/actions'
import config from '@core/reducers/config'
import entries from '@core/reducers/entries'
import services from '@core/services'

export default function initStore() {
  const store = createStore(
    combineReducers({
      config,
      entries,
    }),
    applyMiddleware(thunk.withExtraArgument(services))
  )

  store.dispatch(bootstrapApp())

  return store
}
