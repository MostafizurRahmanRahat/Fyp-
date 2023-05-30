import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
    color: {
      type: String,
      enum: ["Red", "Blue", "Green", "Brown", "Pink", "Yellow", "White", "Black", "Maroon", "Navy Blue"], // Add your color options here
      required: true,
    },
    size: {
      type: String,
      enum: ["xamall","small", "medium", "large", "xlarge", "xxlarge"], // Add your size options here
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
