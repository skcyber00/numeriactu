import { Article } from "~~/server/models/article.model";

export default defineEventHandler(async (event) => {
  try {
    const href = getRouterParam(event, "href");
    return await Article.findOne({ href: href });
  } catch (error) {
    return error;
  }
});
