import { FC } from 'react';

import { Error } from '../../shared/Error/Error';
import { Image } from '../../shared/Image/Image';
import { List } from './PicturesList.styles';

interface PicturesListProps {
  picturesList: string[];
  isMorePicturesLoading: boolean;
  lastPictureElementRef(node: HTMLLIElement | null): void;
}

export const PicturesList: FC<PicturesListProps> = ({
  picturesList,
  isMorePicturesLoading,
  lastPictureElementRef,
}): JSX.Element => {
  if (!picturesList.length && !isMorePicturesLoading)
    return (
      <Error>
        Ooops... it seems like we don&apos;t have any photos. Maybe you want to choose another
        option or photo?
      </Error>
    );

  return (
    <List>
      {picturesList.map((picture, index) => {
        const imageKey = picture + index;
        const isLastPicture = picturesList.length === index + 1;

        return (
          <li key={imageKey} ref={isLastPicture ? lastPictureElementRef : null}>
            <Image width="250" height="250" src={picture} alt="Dog image" loading="lazy" />
          </li>
        );
      })}
    </List>
  );
};
