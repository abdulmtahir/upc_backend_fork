import { extname } from "node:path/win32";

export const editeFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4).fill(null).map(()=> Math.round(Math.random() * 16)).join('');
    callback(null, `${name}-${randomName}${fileExtName}`)
}