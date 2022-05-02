import multer from 'multer'
import path from 'path'

const tempFolder = path.resolve(__dirname, 'uploads');

export const storage = multer.diskStorage({
  destination: tempFolder,
  filename: (request, file, callback) => {
    const fileName = `${file.originalname}`;

    return callback(null, fileName);
  },
})