import {
  ISpecificationsRepository, RequestSpecificationType
} from '../types/specification'

export class CreateSpecificationService {
  private specificationsRepository: ISpecificationsRepository

  constructor (specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute ({ name, description }: RequestSpecificationType): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`)
    }

    this.specificationsRepository.create({ name, description })
  }
}
