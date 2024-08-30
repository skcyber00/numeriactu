import { Category } from "~/server/models/category.model";

export default defineEventHandler(async (event) => {
  try {
    let respo = await Category.find().sort({ title: 1 });
    return respo;
  } catch (error) {
    return error;
  }
});
