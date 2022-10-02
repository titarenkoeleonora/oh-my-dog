import { FC, ImgHTMLAttributes } from 'react';

import { ImageContainer } from './Image.styles';

export const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  width,
  height,
  alt,
}): JSX.Element => <ImageContainer src={src} width={width} height={height} alt={alt} />;
