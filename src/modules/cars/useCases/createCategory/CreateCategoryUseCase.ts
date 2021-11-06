import { ICategoriesRepository, RequestCategoryType } from '../../types/category'

export class CreateCategoryUseCase {
  private categoriesRepository: ICategoriesRepository

  constructor (categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute ({ name, description }: RequestCategoryType): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists`)
    }

    this.categoriesRepository.create({ name, description })
  }
}