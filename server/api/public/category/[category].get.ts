import { Category } from "~~/server/models/category.model";

export default defineEventHandler(async (event) => {
  const category = getRouterParam(event, "category");

  try {
    return await Category.findOne({ href: category });
  } catch (error) {
    return error;
  }
});
