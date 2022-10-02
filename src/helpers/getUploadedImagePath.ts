export const getUploadedImagePath = (
  setUploadedImage: (image: string) => void,
  callback: () => void,
  uploadedImage?: File,
): void => {
  if (uploadedImage) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result as string);
      callback();
    };
    reader.readAsDataURL(uploadedImage);
  }
};
