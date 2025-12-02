import mongoose from "mongoose";
import slugify from "slugify";

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    className: { type: String, required: true },
    classRoll: { type: String, required: true },
    year: { type: String, required: true },
    section: { type: String, required: true },
    avatar: {
      type: {
        url: String,
        public_id: String,
      },
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// auto generate slug
StudentSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, {
      lower: true,
      strict: true,
    });
  }
  next();
});

const AllStudentModel = mongoose.model("AllStudent", StudentSchema);
export default AllStudentModel;
