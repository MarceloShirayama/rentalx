import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specificationsRoutes = Router()
const specificationsRepository = SpecificationsRepository.getInstance()

specificationsRoutes.post('/', (req, res) => {
  return createSpecificationController.handle(req, res)
})

specificationsRoutes.get('/', (req, res) => {
  const specifications = specificationsRepository.list()

  return res.status(200).send(specifications)
})

export { specificationsRoutes }
