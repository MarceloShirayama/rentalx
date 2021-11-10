import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  private createCategoryUseCase: CreateCategoryUseCase
  constructor (createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body

    try {
      await this.createCategoryUseCase.execute({ name, description })

      return res.status(201).json({ message: `Category ${name} created successfully` })
    } catch (error) {
      const message = (error as Error).message
      return res.status(409).json({ error: message })
    }
  }
}
