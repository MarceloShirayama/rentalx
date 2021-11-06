import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoryUseCase } from './ListCategoryUseCase'

const categoriesRepository = CategoriesRepository.getInstance()

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository)

export const listCategoriesController =
  new ListCategoriesController(listCategoryUseCase)