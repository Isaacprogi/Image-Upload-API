import { Request, Response, NextFunction } from "express";
import fs from "fs";
import Image from "../models/Image";

const port = process.env.PORT || 4000

const getImages = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const images = await Image.find();
    if (images.length === 0) {
      return res.status(404).json({ error: 'No image found' });
    }
    res.status(200).json({ images });
  } catch (error) {
    next({ message: "Internal server error" });
  }
};

const  uploadImage = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const newImage = new Image({
      filename: req?.file?.filename,
      filePath: req?.file?.path
    });

    await newImage.save();
    return res.status(200).json(newImage);
  } catch (error) {
    if (req.file) {
      fs.unlink(req.file.path, (unlinkError) => {
        if (unlinkError) {
          console.error("Error deleting file:", unlinkError);
        }
      });
    }
    next({ message: "Error uploading image" });
  }
}


const getImage = async (req: Request, res: Response, next:NextFunction) => {
  const {id} = req.params
  try {
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ error: 'No image found' });
    }
    const imageUrl = `http://localhost:${port}/${image.filePath.replace(/\\/g, '/')}`;
    res.status(200).json({ imageUrl });
  } catch (error) {
    next({ message: "Internal server error" });
  }
};


export {
  getImages,
  uploadImage,
  getImage
}
