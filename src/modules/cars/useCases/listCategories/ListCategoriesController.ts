import { Request, Response } from 'express'
import { ListCategoryUseCase } from './ListCategoryUseCase'

export class ListCategoriesController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private listCategoryUseCase: ListCategoryUseCase) {}

  handle (req: Request, res: Response): Response {
    const categories = this.listCategoryUseCase.execute()

    return res.status(200).send(categories)
  }
}
