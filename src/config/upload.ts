import path from 'path'; //dir
import multer from 'multer'; // upload
import crypto from 'crypto';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads'); //dir name separeted with ','

export default {
  directory: uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');

      const filename = `${fileHash}-${file.originalname}`;

      callback(null, filename);
    },
  }),
};
