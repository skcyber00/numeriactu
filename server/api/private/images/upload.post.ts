import path from "path";
import fs from "fs";

export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event);
    const uploadedFilePaths: string[] = [];

    files?.forEach((file) => {
      const filePath = path.join(
        process.cwd(),
        "public/img",
        file.filename as string
      );
      fs.writeFileSync(filePath, file.data);
      uploadedFilePaths.push(`${file.filename}`);
    });
    return uploadedFilePaths;
  } catch (error) {
    return error;
  }
});
