import { Prediction } from '../types';

export const getUrlsFromPredictions = (predictions: Prediction[]): string[] => {
  const urls = predictions.map((prediction): string => {
    const breed = prediction.className.split(',')[0].split(' ');

    if (breed.length === 1) {
      return `/${breed[0]}`;
    } else {
      return breed.reverse().reduce(
        (previousValue: string, currentValue: string) => previousValue + `/${currentValue}`,
        ''
      );
    }
  });

  return urls;
};

export const validateFiles = (file: File): string => {
  const limitImageSize = 5242880;

  if (!file.type.includes('image')) {
    return "Hmmm. We don't understand this type of files. Please choose an image.";
  };

  if (file.size > limitImageSize) {
    return 'Too large photo. Please choose a photo smaller than 5 megabytes.';
  }

  return '';
};
