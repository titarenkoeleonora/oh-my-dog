import { MAX_IMAGE_SIZE } from './constants';

export const validateFiles = (file: File): string => {
  if (!file.type.includes('image')) {
    return "Hmmm. We don't understand this type of files. Please choose an image.";
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return 'Photo is too large. Please choose a photo smaller than 5 megabytes.';
  }

  return '';
};
