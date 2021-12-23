import path from 'path'
import sharp from 'sharp'

const resizeImage = async (
  imageName: string,
  width: number,
  height: number
) => {
  const imagePath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'images',
    'full',
    `${imageName}.jpg`
  )
  const newImagePath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'images',
    'resized',
    `${imageName}_${width}_${height}.jpg`
  )
  try {
    await sharp(imagePath).resize({ width, height }).toFile(newImagePath)
    return true
  } catch {
    return false
  }
}

export default resizeImage
