import { Category } from '../entities/Category'

export type CategoryDataDTO = {
  name: string
  description: string
}

export interface ICategoriesRepository {
  findByName(name:string): Promise<Category | undefined>
  list(): Promise<Category[]>
  create({ name, description }: CategoryDataDTO): Promise<void>
}
