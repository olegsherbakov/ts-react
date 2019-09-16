import { Service } from 'src/types'

class Tools extends Service {
  private options: string[]

  public applyOptions(...options: string[]) {
    this.options = options

    // ...options.split(/\s+/)

    console.log(`apply options`, this.options)

    return this
  }
}

export default new Tools()
