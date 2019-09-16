import * as React from 'react'
import { connect } from 'react-redux'

import { createEntry } from '@core/actions'
import Magic from './Magic'

export interface TesterProps {
  createEntry: Function
}

function Tester({ createEntry }: TesterProps) {
  function onClick() {
    createEntry()
  }

  return (
    <div>
      <h2>Tester v1.0</h2>
      <button onClick={onClick}>click me for spell magic</button>
      <Magic />
    </div>
  )
}

export default connect(
  ({}) => ({}),
  { createEntry }
)(Tester)
