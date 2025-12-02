import asyncHandler from "express-async-handler";
import AllStudentModel from "../models/AllStudentModels.js";
import cloudinary from "../utils/cloudinary";

const createStudent = asyncHandler(async (req, res) => {
  try {
    const { name, className, classRoll, year, section } = req.body;
    if (!name) {
      return res.status(500).json({
        success: false,
        message: "Please fill up the required value",
      });
    }
    if (!className) {
      return res.status(500).json({
        success: false,
        message: "Please fill up the required value",
      });
    }
    if (!classRoll) {
      return res.status(500).json({
        success: false,
        message: "Please fill up the required value",
      });
    }
    if (!year) {
      return res.status(500).json({
        success: false,
        message: "Please fill up the required value",
      });
    }
    if (!section) {
      return res.status(500).json({
        success: false,
        message: "Please fill up the required value",
      });
    }

    const existingStudent = await AllStudentModel.findOne({
      name,
      classRoll,
      className,
    });
    if (existingStudent) {
      return res.status(500).json({
        success: false,
        message: "Student data already created.",
      });
    }

    if (!req.file) {
      return res.status(500).json({
        success: false,
        message: "Please fill up the required value",
      });
    }

    const file = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      folder: "student-image",
    });

    const avatar = {
      url: file.secure_url,
      public_id: file.public_id,
    };

    const student = await AllStudentModel({
      name,
      className,
      classRoll,
      year,
      section,
      avatar,
    });

    await student.save();

    return res.status(200).json({
      success: true,
      message: "Student data created successfully.",
      student,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal Server Error",
    });
  }
});

const deleStudent = asyncHandler(async (req, res) => {
  try {
    const studentId = await AllStudentModel.findById(req.params.id);
    if (!studentId) {
      return res.status(500).json({
        success: false,
        message: "Student data not found",
      });
    }

    // delete avatar from cloudinary
    if (studentId?.avatar.public_id) {
      await cloudinary.uploader.destroy(studentId?.avatar.public_id);
    }

    await AllStudentModel.findByIdAndDelete(studentId);
    return res.status(200).json({
      success: true,
      message: "Student data delete successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "Internal server error!",
    });
  }
});

export { createStudent, deleStudent };
