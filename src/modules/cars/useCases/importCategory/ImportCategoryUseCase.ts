import fs from 'fs'
import csvParse from 'csv-parse'
import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CategoryDataDTO } from '../../types/category'

export class ImportCategoryUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private categoriesRepository: CategoriesRepository) {}

  loadCategories (file: any): Promise<CategoryDataDTO[]> {
    return new Promise((resolve, reject) => {
      const categories: CategoryDataDTO[] = []
      const stream = fs.createReadStream(file.path)

      const parseFile = csvParse()

      stream.pipe(parseFile)

      parseFile.on('data', async (line) => {
        const [name, description] = line
        categories.push({ name, description })
      })
        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', (error) => reject(error))
    })
  }

  async execute (file: any): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async (category) => {
      const { name, description } = category

      const categoryExists = this.categoriesRepository.findByName(name)

      if (!categoryExists) {
        this.categoriesRepository.create({ name, description })
      }
    })
  }
}
