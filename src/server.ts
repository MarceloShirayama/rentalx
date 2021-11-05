import express from 'express'

const app = express()

app.use(express.json())

const port = 3333

app.get('/', (req, res) => res.json({ message: 'Hello dev' }))

app.post('/courses', (req, res) => {
  const { name } = req.body
  res.json({ name })
})

app.listen(port, () => console.log(`Server in: http://localhost:${port}`))
