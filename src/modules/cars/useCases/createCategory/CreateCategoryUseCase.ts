import { ICategoriesRepository, CategoryDataDTO } from '../../types/category'

export class CreateCategoryUseCase {
  private categoriesRepository: ICategoriesRepository

  constructor (categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  async execute ({ name, description }: CategoryDataDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists`)
    }

    this.categoriesRepository.create({ name, description })
  }
}
