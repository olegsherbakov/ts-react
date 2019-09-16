export const $action = (...types: string[]): string => `@${types.join(` `)}`

export const $uuid = (): string => {
  function hex(s: string, b: number) {
    return s + (b >>> 4).toString(16) + (b & 0b1111).toString(16)
  }

  const r = crypto.getRandomValues(new Uint8Array(16))

  r[6] = (r[6] >>> 4) | 0b01000000
  r[8] = (r[8] >>> 3) | 0b10000000

  return (
    r.slice(0, 4).reduce(hex, '') +
    r.slice(4, 6).reduce(hex, '-') +
    r.slice(6, 8).reduce(hex, '-') +
    r.slice(8, 10).reduce(hex, '-') +
    r.slice(10, 16).reduce(hex, '-')
  )
}

export const stringifyHash = (o: object): string => {
  return Object.keys(o).reduce((res: string, key: string) => {
    // console.log(`o[key]`, o[key])
    console.log(`key`, key)
    console.log(`o`, o)

    return `${res} "${key}": "??"`
  }, ``)
}

export const $attrs = (attrs: object, reducer?: Function): string => {
  return stringifyHash(reducer ? reducer(attrs) : attrs)
}
