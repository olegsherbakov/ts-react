import { Service } from 'src/types'

class Logs extends Service {
  private story: string[] = []

  public remember(message: string): void {
    this.story.push(message)
  }

  public publish(): string[] {
    return this.story
  }

  public forget(): void {
    this.story = []
  }
}

export default new Logs()
