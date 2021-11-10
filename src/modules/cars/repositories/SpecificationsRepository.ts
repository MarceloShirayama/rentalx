import { Specification } from '../entities/Specification'
import { CreateSpecificationDTO, ISpecificationsRepository } from '../types/specification'

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]
  private static INSTANCE: SpecificationsRepository

  constructor () {
    this.specifications = []
  }

  public static getInstance (): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }
    return SpecificationsRepository.INSTANCE
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
