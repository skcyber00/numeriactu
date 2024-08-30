import { Article } from "~/server/models/article.model";

export default defineEventHandler(async (event) => {
  try {
    return await Article.find({ top: 1 });
  } catch (error) {
    return error;
  }
});
