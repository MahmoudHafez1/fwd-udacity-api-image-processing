import resizeImage from '../../utilities/resizeImage'
import fs from 'fs'
import path from 'path'

describe('test resizing image', () => {
  beforeAll(async () => {
    await resizeImage('fjord', 250, 350)
  })

  it('should fjord image resized to 250x350 and saved on disk', () => {
    const resizedImgPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'public',
      'images',
      'resized',
      'fjord_250_350.jpg'
    )
    const resizedImgExists = fs.existsSync(resizedImgPath)
    expect(resizedImgExists).toBeTrue()
  })
})
