import { FC } from 'react';

import { Image } from './styles';

export const ChosenPicture: FC<{uploadedImage: string, text: string}> = ({ uploadedImage, text }): JSX.Element => (
  <Image src={uploadedImage} alt={`We think it's ${text} on the picture`} />
);
