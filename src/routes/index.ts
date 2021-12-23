import express from 'express'
import api from './api/api'

const routes = express.Router();

routes.use('/api', api)

export default routes;
