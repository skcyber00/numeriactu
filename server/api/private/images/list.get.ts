import path from "path";
import fs from "fs";

export default defineEventHandler(async (event) => {
  try {
    const FilesPaths = [];

    const filePath = path.join(process.cwd(), "public/img");

    fs.readdirSync(filePath).map((file) => {
      let stat = fs.statSync(filePath + "/" + file);
      FilesPaths.push({
        file: file,
        path: `/img/${file}`,
        size: (stat.size * 0.001).toFixed(0) + " Ko",
        mtime: stat.mtime,
      });
    });

    return FilesPaths;
  } catch (error) {
    return error;
  }
});
