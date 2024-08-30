import { Category } from "~/server/models/category.model";
import path from "path";
import fs from "fs";

export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event);
    const form = await readFormData(event);
    const uploadedFilePaths: string[] = [];

    files?.forEach((file) => {
      if (!file.filename) return;

      const filePath = path.join(
        process.cwd(),
        "public/img",
        file.filename as string
      );
      fs.writeFileSync(filePath, file.data);
      uploadedFilePaths.push(`${file.filename}`);
    });

    await new Category({
      title: form.get("title"),
      description: form.get("description"),
      href: form.get("href"),
      imageSrc: uploadedFilePaths[0],
      imageAlt: form.get("imageAlt"),
      top: form.get("top"),
      text: form.get("text"),
      titleSeo: form.get("titleSeo"),
      descriptionSeo: form.get("descriptionSeo"),
    }).save();

    return 200;
  } catch (error) {
    return error;
  }
});
