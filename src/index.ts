import express from 'express'
import path from 'path'
import * as dotenv from 'dotenv'
import routes from './routes'

const app = express()

dotenv.config()

const port = process.env.PORT || 3000

app.use(
  '/images',
  express.static(path.join(__dirname, '..', 'public', 'images'))
)

app.use('/api', routes)

app.listen(port)

export default app
