import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

export class CreateSpecificationController {
  private createSpecificationUseCase: CreateSpecificationUseCase
  constructor (createSpecificationUseCase: CreateSpecificationUseCase) {
    this.createSpecificationUseCase = createSpecificationUseCase
  }

  handle (req: Request, res: Response): Response {
    const { name, description } = req.body

    try {
      this.createSpecificationUseCase.execute({ name, description })

      return res.status(201).json({ message: `Specification ${name} created successfully` })
    } catch (error) {
      const message = (error as Error).message
      return res.status(409).json({ error: message })
    }
  }
}
