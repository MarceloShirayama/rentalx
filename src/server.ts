import express from 'express'

const app = express()

const port = 3333

app.get('/', (req, res) => res.json({ message: 'Hello dev' }))

app.listen(port, () => console.log(`Server in: http://localhost:${port}`))
