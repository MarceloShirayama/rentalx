import { CategoriesRepository } from '../repositories/CategoriesRepository'

type RequestCategoryType = {
  name: string
  description: string
}

export class CreateCategoryService {
  private categoriesRepository: CategoriesRepository

  constructor (categoriesRepository: CategoriesRepository) {
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
