import { Category } from '../../entities/Category'
import { ICategoriesRepository } from '../../types/category'

export class ListCategoriesUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private categoriesRepository: ICategoriesRepository) {}

  execute (): Category[] {
    const categories = this.categoriesRepository.list()

    return categories
  }
}
