import Resizer from "react-image-file-resizer";

export const resizeFile = (file) => {
  return new Promise((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      720,
      720,
      "JPE",
      100,
      0,
      (data) => resolve(data),
      "base64",
      (err) => reject(err)
    );
  });
};
