import { CreateCategoryDTO, ICategoriesRepository } from '../DTO/categoryDTO'
import { Category } from '../model/Category'

export class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName (name: string): Category | undefined {
    throw new Error('Method not implemented.')
  }

  list (): Category[] {
    throw new Error('Method not implemented.')
  }

  create ({ name, description }: CreateCategoryDTO): void {
    throw new Error('Method not implemented.')
  }
}
