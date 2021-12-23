import fs from 'fs'
import path from 'path'

const imageExists = (imageName: string): boolean => {
  const imagePath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'images',
    'full',
    `${imageName}.jpg`
  )
  return fs.existsSync(imagePath)
}

export default imageExists
