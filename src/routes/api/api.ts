import express from "express"
import checkQuery from "../../utilities/middleware/checkQuery"
import checkresizedImage from "../../utilities/middleware/checkResizedImage"

const api = express.Router()

api.get('/', checkQuery, checkresizedImage, (req, res) => {
    res.send('image is not resized before')
})

export default api