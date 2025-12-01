import { Router } from "express";
import {
  CreatePresentStudent,
  deletePresentStudent,
  getAllPresentStudent,
  updateData,
} from "../controller/PresentStudentController.js";

const presentStudent = Router();

presentStudent.post("/create-present-student", CreatePresentStudent);
presentStudent.delete("/delete-present-student/:id", deletePresentStudent);
presentStudent.put("/update-present-student/:id", updateData);
presentStudent.get("/show-present-student", getAllPresentStudent);
