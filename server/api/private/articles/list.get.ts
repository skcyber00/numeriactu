import { Article } from "~/server/models/article.model";

export default defineEventHandler(async (event) => {
  try {
    let respo = await Article.find();
    return respo;
  } catch (error) {
    return error;
  }
});
