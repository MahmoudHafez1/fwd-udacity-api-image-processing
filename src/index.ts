import express from 'express';
import path from 'path';
import * as dotenv from 'dotenv';
import routes from './routes'

const app = express();

dotenv.config();

const port = process.env.PORT || 3000

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/', routes)

app.listen(port, () => {
    console.log(`server run successfully on port: ${port}`)
})