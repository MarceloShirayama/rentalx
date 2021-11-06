import { Specification } from '../model/Specification'
import { CreateSpecificationDTO, ISpecificationsRepository } from '../types/specification'

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor () {
    this.specifications = []
  }

  create ({ name, description }: CreateSpecificationDTO): void {
    const specification = new Specification(name, description)
    this.specifications.push(specification)
  }

  list (): Specification[] {
    return this.specifications
  }

  findByName (name: string): Specification | undefined {
    const specification =
      this.specifications.find(specification => specification.name === name)

    return specification
  }
}
