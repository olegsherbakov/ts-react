import { Service } from 'src/types'

class Utils extends Service {
  public makeSomeMagic(): void {
    console.log(`makeSomeMagic`)
  }
}

export default new Utils()
