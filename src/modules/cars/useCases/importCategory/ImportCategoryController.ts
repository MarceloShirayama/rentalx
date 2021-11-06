import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

export class ImportCategoryController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private importCategoryUseCase: ImportCategoryUseCase) {}

  handle (req: Request, res: Response): Response {
    const { file } = req
    this.importCategoryUseCase.execute(file)

    return res.send()
  }
}
