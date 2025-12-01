import mongoose from "mongoose";

const studentSummarySchema = new mongoose.Schema(
  {
    className: { type: String, required: true, trim: true },
    section: { type: String, required: true },
    department: { type: String },
    male: { type: Number, default: 0 },
    female: { type: Number, default: 0 },
    religion: {
      islam: { type: Number, default: 0 },
      hindu: { type: Number, default: 0 },
      buddhist: { type: Number, default: 0 },
      christian: { type: Number, default: 0 },
    },
    specialCategory: {
      freedomFighterQuota: { type: Number, default: 0 },
      disabled: { type: Number, default: 0 },
    },
    totalStudents: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

studentSummarySchema.pre("save", function (next) {
  const totalGender = (this.male || 0) + (this.female || 0);
  this.totalStudents = totalGender;
  next();
});

// 🔁 Auto Update Total on Update
studentSummarySchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  const male = update.male !== undefined ? update.male : this.male;
  const female = update.female !== undefined ? update.female : this.female;
  update.totalStudents = (male || 0) + (female || 0);
  next();
});

const PresentStudentModels = mongoose.model(
  "StudentSummary",
  studentSummarySchema
);

export default PresentStudentModels;
