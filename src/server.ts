import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationsRoutes } from './routes/specifications.routes'

const app = express()

app.use(express.json())

const port = 3333

app.use('/categories', categoriesRoutes)
app.use('/specifications', specificationsRoutes)

app.listen(port, () => console.log(`Server in: http://localhost:${port}`))
