import { Prediction } from '../types';
import { MAX_IMAGE_SIZE } from './constants';

export const getUrlsFromPredictions = (predictions: Prediction[]): string[] => {
  const urls = predictions.map((prediction): string => {
    const breed = prediction.className.split(',')[0].split(' ');

    if (breed.length === 1) {
      return `/${breed[0]}`;
    } else {
      return breed
        .reverse()
        .reduce(
          (previousValue: string, currentValue: string) => previousValue + `/${currentValue}`,
          '',
        );
    }
  });

  return urls;
};

export const validateFiles = (file: File): string => {
  if (!file.type.includes('image')) {
    return "Hmmm. We don't understand this type of files. Please choose an image.";
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return 'Photo is too large. Please choose a photo smaller than 5 megabytes.';
  }

  return '';
};

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
