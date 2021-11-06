import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const specificationsRoutes = Router()

specificationsRoutes.post('/', (req, res) => {
  return createSpecificationController.handle(req, res)
})

specificationsRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

export { specificationsRoutes }
