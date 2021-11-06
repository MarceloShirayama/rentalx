import { Category } from '../model/Category'

export type CategoryDataDTO = {
  name: string
  description: string
}

export interface ICategoriesRepository {
  findByName(name:string): Category | undefined
  list(): Category[]
  create({ name, description }: CategoryDataDTO): void
}
