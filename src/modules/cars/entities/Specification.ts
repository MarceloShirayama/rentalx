import { v4 as uuid } from 'uuid'

export class Specification {
  id?: string
  name: string
  description: string
  createdAt: Date

  constructor (name: string, description: string) {
    if (!this.id) this.id = uuid()
    this.name = name
    this.description = description
    this.createdAt = new Date()
  }
}
