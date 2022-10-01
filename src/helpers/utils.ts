import { TPrediction } from "../types";

export const getUrlsFromPredictions = (predictions: TPrediction[]): string[] => {
  const urls = predictions.map((prediction) => {
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

export const validateFiles = (file: File) => {
  const limitImageSize = 5242880;

  if (!file.type.includes('image')) {
    return "Hmmm. I don't understand this type of files. Please choose an image.";
  };

  if (file.size > limitImageSize) {
    return "Too large photo. Please choose a photo smaller than 5 megabytes.";
  }
};