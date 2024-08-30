import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  titleSeo: {
    type: String,
    required: true,
  },
  descriptionSeo: {
    type: String,
    required: true,
  },
  top: {
    type: Boolean,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  publish: {
    type: Number,
    default: 0,
  },
  datePublish: {
    type: Number,
  },
  updatedAt: {
    type: Number,
    default: Date.now(),
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

export const Category = model("category", CategorySchema);
