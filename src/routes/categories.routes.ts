import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../service/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  try {
    const createCategoryService = new CreateCategoryService(categoriesRepository)
    createCategoryService.execute({ name, description })

    return res.status(201).json({ message: `Category ${name} created successfully` })
  } catch (error) {
    const message = (error as Error).message
    return res.status(409).json({ error: message })
  }
})

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.list()

  return res.status(200).send(categories)
})

export { categoriesRoutes }
