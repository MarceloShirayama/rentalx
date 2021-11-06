import { CategoryDataDTO, ICategoriesRepository } from '../types/category'
import { Category } from '../model/Category'
export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]
  private static INSTANCE: CategoriesRepository

  private constructor () {
    this.categories = []
  }

  public static getInstance (): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  create ({ name, description }: CategoryDataDTO): void {
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
