import asyncHandler from "express-async-handler";
import PresentStudentModels from "../models/PresentStudentModels.js";

const CreatePresentStudent = asyncHandler(async (req, res) => {
  try {
    const {
      className,
      section,
      department,
      male,
      female,
      religion,
      specialCategory,
    } = req.body;

    if (!className) {
      return res.json({
        success: false,
        message: "Class Name is required",
      });
    }
    if (!section) {
      return res.json({
        success: false,
        message: "section is required",
      });
    }

    const ExistingData = await PresentStudentModels.findOne({
      className,
      section,
      department,
    });
    if (ExistingData) {
      return res.json({
        success: false,
        message: "Present student data already created",
      });
    }

    const presentStudent = new PresentStudentModels({
      className,
      section,
      department,
      male,
      female,
      religion,
      specialCategory,
    });

    await presentStudent.save();

    return res.json({
      success: true,
      message: "present student create successfully",
      presentStudent,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

const deletePresentStudent = asyncHandler(async (req, res) => {
  try {
    const presentId = await PresentStudentModels.findById(req.params.id);
    if (!presentId) {
      return res.json({
        success: false,
        message: "present student data not found",
      });
    }
    await PresentStudentModels.findByIdAndDelete(presentId);
    return res.json({
      success: true,
      message: "present student data delete successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

const updateData = asyncHandler(async (req, res) => {
  try {
    const presentId = await PresentStudentModels.findById(req.params.id);
    const updateData = req.body;
    if (!presentId) {
      return res.json({
        success: false,
        message: "present student data not found",
      });
    }

    const update = await PresentStudentModels.findByIdAndUpdate(
      presentId,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    return res.json({
      success: true,
      message: "Present student data updated successfully",
      update,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

const getAllPresentStudent = asyncHandler(async (req, res) => {
  try {
    const total = await PresentStudentModels.countDocuments({});
    const presentStudentList = await PresentStudentModels.find()
      .sort({ createdAt: -1 })
      .select("-__v");

    return res.json({
      success: true,
      total,
      presentStudentList,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
});

export {
  CreatePresentStudent,
  deletePresentStudent,
  updateData,
  getAllPresentStudent,
};
