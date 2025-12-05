import asyncHandler from "express-async-handler";
import galleryModel from "../models/galleryModels.js";
import cloudinary from "../utils/cloudinary.js";

const createGallery = asyncHandler(async (req, res) => {
  try {
    const { title, videoLink } = req.body;
    if (!title) {
      return res.status(500).json({
        success: false,
        message: "please full fill the required value.",
      });
    }

    const existing = await galleryModel.findOne({ title });
    if (existing) {
      return res.status(500).json({
        success: false,
        message: "This title already taken,try deferent title",
      });
    }

    if (!req.file) {
      return res.status(500).json({
        success: false,
        message: "Image is required",
      });
    }

    const file = await cloudinary.uploader.upload(req?.file.path, {
      resource_type: "image",
      folder: "Gallery-image",
    });

    const coverImage = {
      url: file?.secure_url,
      public_id: file?.public_id,
    };

    const gallery = await galleryModel.create({
      title,
      videoLink,
      coverImage,
    });

    if (videoLink && coverImage) gallery.type = "mixed";
    else if (videoLink) gallery.type = "video";
    else gallery.type = "image";

    await gallery.save();

    return res.status(200).json({
      success: true,
      message: "gallery data created successfully",
      gallery,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

const deleteGallery = asyncHandler(async (req, res) => {
  try {
    const galleryId = await galleryModel.findById(req.params.id);
    if (!galleryId) {
      return res.status(500).json({
        success: false,
        message: "Gallery not found",
      });
    }

    // delete image from cloudinary
    if (galleryId?.coverImage.public_id) {
      await cloudinary.uploader.destroy(galleryId?.coverImage.public_id);
    }

    await galleryModel.findByIdAndDelete(galleryId);
    return res.status(200).json({
      success: true,
      message: "Gallery data delete successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

const updateGallery = asyncHandler(async (req, res) => {
  try {
    const galleryId = await galleryModel.findById(req.params.id);
    const { title, videoLink } = req.body;
    if (!galleryId) {
      return res.status(500).json({
        success: false,
        message: "Gallery not found",
      });
    }

    if (req.file) {
      if (galleryId?.coverImage.public_id) {
        await cloudinary.uploader.destroy(galleryId?.coverImage.public_id);
      }

      const file = await cloudinary.uploader.upload(req?.file.path, {
        resource_type: "image",
        folder: "Gallery-image",
      });

      galleryId.coverImage = {
        url: file?.secure_url,
        public_id: file?.public_id,
      };
    }

    if (title) galleryId.title = title;
    if (videoLink) galleryId.videoLink = videoLink;

    await galleryId.save();

    return res.json({
      success: true,
      message: "Gallery data update successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});
const getAllGallery = asyncHandler(async (req, res) => {
  try {
    const total = await galleryModel.countDocuments({});
    const galleryList = await galleryModel
      .find()
      .sort({ createdAt: -1 })
      .select("-_v");

    return res.status(200).json({
      success: true,
      total,
      galleryList,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

export { createGallery, deleteGallery, updateGallery, getAllGallery };
