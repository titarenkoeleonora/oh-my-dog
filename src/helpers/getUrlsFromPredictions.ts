import { Prediction } from '../types';

export const getUrlsFromPredictions = (predictions: Prediction[]): string[] => {
  const urls = predictions.map((prediction): string => {
    const breed = prediction.className.split(',')[0].split(' ');

    if (breed.length === 1) {
      return `/${breed[0]}`;
    } else {
      const [breedTitle, subBreedTitle] = breed.reverse();

      return `/${[breedTitle, subBreedTitle].join('/')}`;
    }
  });

  return urls;
};
