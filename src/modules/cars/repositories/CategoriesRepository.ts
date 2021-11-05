import { CreateCategoryDTO, ICategoriesRepository } from '../types/category'
import { Category } from '../model/Category'
export class CategoriesRepository implements ICategoriesRepository {
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

  findByName (name: string) {
    const category = this.categories.find(category => category.name === name)

    return category
  }
}
