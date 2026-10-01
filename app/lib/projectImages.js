import fs from "fs";
import path from "path";

const IMAGE_FILE = /\.(png|jpe?g|webp|avif)$/i;

export const getProjectImages = (slug) => {
  const dir = path.join(process.cwd(), "public", "images", "projects", slug);
  let files = [];
  try {
    files = fs.readdirSync(dir).filter((f) => IMAGE_FILE.test(f));
  } catch {
    return { cover: null, screens: [] };
  }

  const toUrl = (f) => `/images/projects/${slug}/${f}`;
  const cover = files.find((f) => /^cover\./i.test(f));
  const screens = files
    .filter((f) => /^screen-/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(toUrl);

  return { cover: cover ? toUrl(cover) : null, screens };
};
