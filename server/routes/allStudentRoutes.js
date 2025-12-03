import { Router } from "express";
import upload from "../middlewares/multer.js";
import {
  createStudent,
  deleStudent,
  getAllStudentList,
  updateStudent,
} from "../controller/AllStudentController.js";

const AllStudentRoutes = Router();

AllStudentRoutes.post("/create", upload.single("avatar"), createStudent);
AllStudentRoutes.delete("/delete/:id", deleStudent);
AllStudentRoutes.put("/update/:id", upload.single("avatar"), updateStudent);
AllStudentRoutes.get("/get-student", getAllStudentList);

export default AllStudentRoutes;
