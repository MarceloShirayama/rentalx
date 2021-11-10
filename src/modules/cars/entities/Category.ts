import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('categories')
export class Category {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  // eslint-disable-next-line camelcase
  created_at: Date

  constructor (name: string, description: string) {
    if (!this.id) this.id = uuid()
    this.name = name
    this.description = description
    this.created_at = new Date()
  }
}
