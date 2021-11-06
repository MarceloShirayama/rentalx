import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

export class ListCategoriesController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle (req: Request, res: Response): Response {
    const categories = this.listCategoriesUseCase.execute()

    return res.status(200).send(categories)
  }
}
