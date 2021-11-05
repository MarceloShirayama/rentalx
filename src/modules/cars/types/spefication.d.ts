import { Specification } from '../model/Specification'

export type CreateSpecificationDTO = {
  name: string
  description: string
}

export interface ICategoriesRepository {
  findByName(name:string): Specification | undefined
  list(): Specification[]
  create({ name, description }: CreateSpecificationDTO): void
}

export type RequestSpecificationType = {
  name: string
  description: string
}
