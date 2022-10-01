import { FC } from 'react';
import { Image } from './styles';

const ChosenPicture: FC<{uploadedImage: string}> = ({ uploadedImage }) => {
  return (
    <Image src={uploadedImage} alt='' />
  );
};

export default ChosenPicture;