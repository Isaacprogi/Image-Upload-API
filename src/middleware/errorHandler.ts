import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      res.json({
        message: 'File is too large',
      });
      return;
    }

    if (error.code === 'LIMIT_FILE_COUNT') {
      res.json({
        message: 'File limit reached',
      });
      return;
    }

    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      res.status(400).json({
        message: error.message,
      });
      return;
    }
  }

  const status = (error as any).status || 500;
  res.status(status).json({
    message: (error as any).message || 'Internal Server Error',
  });
};

export default errorHandler;
