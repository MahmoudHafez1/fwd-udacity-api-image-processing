import express from "express"

const api = express.Router()

api.get('/', (req, res) => {
    res.send("hof")
})

export default api