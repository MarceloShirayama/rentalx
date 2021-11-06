import { Specification } from '../model/Specification'

export type CreateSpecificationDTO = {
  name: string
  description: string
}

export interface ISpecificationsRepository {
  findByName(name:string): Specification | undefined
  list(): Specification[]
  create({ name, description }: CreateSpecificationDTO): void
}

export type RequestSpecificationType = {
  name: string
  description: string
}
