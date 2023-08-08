import { error } from "console"

export const imageFileFilter = (reg, file, callback) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return callback (new error('only image are allowed'), false)
    }
    callback(null, true);
};