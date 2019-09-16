import * as React from 'react'
import { connect } from 'react-redux'

import { Entry } from 'src/types'
import { $attrs } from 'src/utils'

function RenderEntry({ key, data: { uuid, attrs }, reducer }: Entry) {
  return (
    <div key={key} className="entry">
      <div className="line">
        <b>uuid:</b> {uuid}
      </div>
      <div className="line">
        <b>attributes:</b> {$attrs(attrs)}
      </div>
      <div className="line">
        <b>magic:</b>
      </div>
      <div className="line">
        <div>{$attrs(attrs, reducer)}</div>
      </div>
    </div>
  )
}

export interface TesterMagicProps {
  entries: Entry[]
}

function Magic({ entries }: TesterMagicProps): any {
  return entries.map(RenderEntry)
}

export default connect(({ entries: { entries } }: any) => ({ entries }))(Magic)
