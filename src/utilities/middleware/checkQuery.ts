import expess from 'express'
import imageExists from "../imageExists";


const checkQuery = (req: expess.Request, res: expess.Response, next: expess.NextFunction) => {
    const filename = (req.query.filename as unknown) as string
    const width = (req.query.width as unknown) as string
    const height = (req.query.height as unknown) as string
    const widthNum = Number(width);
    const heightNum = Number(height);
    if (!imageExists(filename)) res.send("Image name is not correct")
    else if (isNaN(widthNum) || isNaN(heightNum)) res.send("Dimensions are not correct")
    else {
        res.locals.imageName = filename;
        res.locals.width = widthNum;
        res.locals.height = heightNum;
        next();
    }

}

export default checkQuery;