import { CreateCategoryDTO } from '../DTO/categoryDTO'
import { Category } from '../model/Category'
export class CategoriesRepository {
  private categories: Category[]

  constructor () {
    this.categories = []
  }

  create ({ name, description }: CreateCategoryDTO): void {
    const category = new Category(name, description)
    this.categories.push(category)
  }

  list (): Category[] {
    return this.categories
  }
}
