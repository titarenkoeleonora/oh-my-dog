import { FC } from 'react';

import { Error } from '../../shared/error';
import { List, Picture } from './styles';

interface Props {
  picturesList: string[];
  lastPictureElementRef: any,
  isMorePicturesLoading: boolean,
};

export const PicturesList: FC<Props> = ({ picturesList, lastPictureElementRef, isMorePicturesLoading }): JSX.Element => {
  if (!picturesList.length && !isMorePicturesLoading) return (
    <Error>
      Ooops... it seems like we don't have any photos. Maybe you want to choose another option or photo?
    </Error>
  );

  return (
    <List>
      {picturesList.map((picture, index) => {
        if (picturesList.length === index + 1) {
          return (
            <li key={picture + index} ref={lastPictureElementRef}>
              <Picture src={picture} loading='lazy' />
            </li>
          );
        } else {
          return (
            <li key={picture + index}>
              <Picture src={picture} />
            </li>
          )
        }
      })}
    </List>
  );
};
