// import { render } from '@testing-library/react';

import { validateFiles } from './validateFiles';

describe('validateFiles', () => {
  it('should return error message for non-image file', () => {
    const file = {
      type: 'document',
    };
    const nonImageFileError =
      "Hmmm. We don't understand this type of files. Please choose an image.";

    expect(validateFiles(file as File)).toBe(nonImageFileError);
  });

  it('should return error message for large image', () => {
    const largeFile = {
      type: 'image/png',
      size: 5_242_881,
    };

    const largeImageError = 'Photo is too large. Please choose a photo smaller than 5 megabytes.';
    expect(validateFiles(largeFile as File)).toBe(largeImageError);
  });

  it('should return empty error message', () => {
    const largeFile = {
      type: 'image/png',
      size: 5_242_880,
    };

    expect(validateFiles(largeFile as File)).toBe('');
  });
});
