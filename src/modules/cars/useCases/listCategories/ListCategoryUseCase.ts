import { Category } from '../../model/Category'
import { ICategoriesRepository } from '../../types/category'

export class ListCategoryUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private categoriesRepository: ICategoriesRepository) {}

  execute (): Category[] {
    const categories = this.categoriesRepository.list()

    return categories
  }
}
