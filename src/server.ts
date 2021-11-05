import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const app = express()

app.use(express.json())

const port = 3333

app.use('/categories', categoriesRoutes)

app.listen(port, () => console.log(`Server in: http://localhost:${port}`))
