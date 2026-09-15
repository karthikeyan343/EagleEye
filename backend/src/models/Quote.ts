import mongoose, { Document, Schema } from "mongoose";

export interface IQuote extends Document {
  name: string;
  email: string;
  phone?: string;
  requirement: string;
  message?: string;
  createdAt: Date;
}

const quoteSchema = new Schema<IQuote>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    requirement: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Quote =
  mongoose.models.Quote ||
  mongoose.model<IQuote>("Quote", quoteSchema);

export default Quote;