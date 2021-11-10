import { Specification } from '../../entities/Specification'
import { ISpecificationsRepository } from '../../types/specification'

export class ListSpecificationsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private specificationsRepository: ISpecificationsRepository) {}

  execute (): Specification[] {
    const specifications = this.specificationsRepository.list()

    return specifications
  }
}
