import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const port = 3333

app.use(router)

app.listen(port, () => console.log(`Server in: http://localhost:${port}`))
