import express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes'

const app = express();

dotenv.config();

const port = process.env.PORT || 3000

app.use('/', routes)

app.listen(port, () => {
    console.log(`server run successfully on port: ${port}`)
})