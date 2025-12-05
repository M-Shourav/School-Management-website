import { Router } from "express";
import upload from "../middlewares/multer.js";
import {
  createGallery,
  deleteGallery,
  getAllGallery,
  updateGallery,
} from "../controller/galleryController.js";

const galleryRouter = Router();

galleryRouter.post(
  "/create-gallery",
  upload.single("coverImage"),
  createGallery
);
galleryRouter.delete("/delete-gallery/:id", deleteGallery);
galleryRouter.put(
  "/update-gallery/:id",
  upload.single("coverImage"),
  updateGallery
);
galleryRouter.post("/get-gallery", getAllGallery);

export default galleryRouter;
