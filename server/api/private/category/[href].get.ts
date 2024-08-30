import { Category } from "~~/server/models/category.model";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  try {
    return await Category.findOne({ id: id });
  } catch (error) {
    return error;
  }
});
