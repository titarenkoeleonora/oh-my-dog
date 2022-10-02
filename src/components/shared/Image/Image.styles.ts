import { ImgHTMLAttributes } from 'react';
import { css } from 'styled-components';

import { styled } from '../../../ui/styles';

export const ImageContainer = styled.img<ImgHTMLAttributes<HTMLImageElement>>(
  ({ width, height }) => css`
    ${width && `width: ${width}px;`};
    ${height && `height: ${height}px;`};
    object-fit: cover;
    object-position: center;
  `,
);
