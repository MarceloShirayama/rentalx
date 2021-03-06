import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export const createCategoryCompose = () => {
  const categoriesRepository = new CategoriesRepository()

  const createCategoryUseCase =
      new CreateCategoryUseCase(categoriesRepository)

  const createCategoryController =
      new CreateCategoryController(createCategoryUseCase)

  return createCategoryController
}
