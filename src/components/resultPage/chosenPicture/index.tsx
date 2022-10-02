import { FC } from 'react';

import { Image } from './styles';

export const ChosenPicture: FC<{uploadedImage: string}> = ({ uploadedImage }): JSX.Element => {
  return (
    <Image src={uploadedImage} alt='' />
  );
};
