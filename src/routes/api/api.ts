import express from "express"
import checkQuery from "../../utilities/checkQuery"

const api = express.Router()

api.get('/', checkQuery, (req, res) => {
    res.send('query is correct')
})

export default api