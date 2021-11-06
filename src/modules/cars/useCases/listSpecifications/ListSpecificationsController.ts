import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

export class ListSpecificationsController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle (req: Request, res: Response): Response {
    const specifications = this.listSpecificationsUseCase.execute()

    return res.status(200).send(specifications)
  }
}
