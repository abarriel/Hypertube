import * as multer from 'multer';
import * as path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../../../public/profile_picture'));
  },
  filename: (req, file, cb) => {
    var filename:any = Date.now();
    switch (file.mimetype) {
      case 'image/png':
      filename = `${filename}.png`;
      break;
      case 'image/jpg':
      filename = `${filename}.jpg`;
      break;
      case 'image/jpeg':
      filename = `${filename}.jpeg`;
      break;
      default:
      break;
    }
    cb(null, filename);
  }
});

const uploadImg = multer({
  storage,
  limits: {
    fileSize: 2000000,
    },
  })
  .single('profilePicture');

export { uploadImg };

