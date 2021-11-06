import { SpecificationsRepository } from '../../repositories/SpecificationsRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoryUseCase } from './ListCategoryUseCase'

const categoriesRepository = SpecificationsRepository.getInstance()

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository)

export const listCategoriesController =
  new ListCategoriesController(listCategoryUseCase)
