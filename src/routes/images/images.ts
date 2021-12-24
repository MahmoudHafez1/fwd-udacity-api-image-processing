import express, { Router } from 'express'
import checkQuery from '../../utilities/middleware/checkQuery'
import checkResizedImage from '../../utilities/middleware/checkResizedImage'
import resizeImage from '../../utilities/resizeImage'

const images = express.Router()

images.get(
  '/',
  checkQuery,
  checkResizedImage,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { imageName, width, height } = res.locals
    const resized = await resizeImage(imageName, width, height)
    if (resized) {
      res.redirect(
        `/api/images?filename=${imageName}&width=${width}&height=${height}`
      )
    } else res.send('Image processing failed')
  }
)

export default images
