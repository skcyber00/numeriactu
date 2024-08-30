import { Article } from "~~/server/models/article.model";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  try {
    return await Article.findOne({ id: id });
  } catch (error) {
    return error;
  }
});
