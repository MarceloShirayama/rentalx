import { Category } from '../model/Category'

export type CreateCategoryDTO = {
  name: string
  description: string
}

export interface ICategoriesRepository {
  findByName(name:string): Category | undefined
  list(): Category[]
  create({ name, description }: CreateCategoryDTO): void
}

export type RequestCategoryType = {
  name: string
  description: string
}
