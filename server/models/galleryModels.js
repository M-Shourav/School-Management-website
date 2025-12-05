import mongoose from "mongoose";

// slug
function banglaSlug(text) {
  return text
    .trim()
    .replace(/ /g, "-")
    .replace(/[০]/g, "0")
    .replace(/[১]/g, "1")
    .replace(/[২]/g, "2")
    .replace(/[৩]/g, "3")
    .replace(/[৪]/g, "4")
    .replace(/[৫]/g, "5")
    .replace(/[৬]/g, "6")
    .replace(/[৭]/g, "7")
    .replace(/[৮]/g, "8")
    .replace(/[৯]/g, "9")
    .replace(/[^\u0980-\u09FFa-zA-Z0-9-]+/g, "") // remove special chars
    .toLowerCase();
}

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    coverImage: {
      type: {
        url: String,
        public_id: String,
      },
      required: true,
    },
    videoLink: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      enum: ["image", "video", "mixed"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

gallerySchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = banglaSlug(this.title);
  }
  next();
});

const galleryModel = mongoose.model("gallery", gallerySchema);

export default galleryModel;
