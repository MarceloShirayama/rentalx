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
        .on('end', () => resolve(categories))
        .on('error', (error) => reject(error))
    })
  }

  async execute (file: any): Promise<void> {
    const categories = await this.loadCategories(file)
    console.log(categories)
  }
}
