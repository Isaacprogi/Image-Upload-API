import multer from "multer";
import path from "path";


const imageStorage = multer.diskStorage({
  destination: './src/uploads',
  filename: (
    req: any,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});


const imageFilter = (
  req: any,
  file: Express.Multer.File,
  cb: (error: any, acceptFile: boolean) => void
) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const extensionCheck: boolean = ext !== '.jpg' && ext !== '.png' && ext !== '.gif'
  const mimitypeCheck: boolean = file.mimetype.split('/')[0] !== 'image'

  if (extensionCheck || mimitypeCheck) {
    const error = new multer.MulterError('LIMIT_UNEXPECTED_FILE');
    error.message = 'Only jpg, png, and gif are supported.';
    cb(error, false);
  } else {
    cb(null, true);
  }
};

const imageUploader = multer({ storage: imageStorage, fileFilter: imageFilter });

export default imageUploader