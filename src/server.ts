import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

const port = 3333

app.use(router)

app.listen(port, () => console.log(`Server in: http://localhost:${port}`))
