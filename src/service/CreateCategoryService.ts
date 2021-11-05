import { ICategoriesRepository, RequestCategoryType } from '../DTO/categoryDTO'
export class CreateCategoryService {
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
