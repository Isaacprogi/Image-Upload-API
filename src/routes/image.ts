import express from "express";
import imageUploader from "../config/multerConfig";
import { getImages,getImage,uploadImage } from "../controllers/image";

const router = express.Router()

router.route('/').post(getImages);

router.route('/upload').post(imageUploader.single('image'),uploadImage);

router.route('/get_image/:id').post(getImage);

export default router