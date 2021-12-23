import expess from 'express'
import fs from 'fs'
import path from 'path'

const checkresizedImage = (req: expess.Request, res: expess.Response, next: expess.NextFunction) => {
    const { imageName, width, height } = res.locals;
    const resizedImageName = `${imageName}_${width}_${height}.jpg`
    const imagePath = path.join(__dirname, '..', '..', 'images', 'resized', `${resizedImageName}`)
    if (fs.existsSync(imagePath)) {
        res.send(`<img src="images/resized/${resizedImageName}" width="${width}" height="${height}" />`)
    } else {
        next();
    }
}


export default checkresizedImage;