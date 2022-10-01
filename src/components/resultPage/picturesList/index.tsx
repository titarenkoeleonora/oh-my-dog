import { FC } from 'react';
import Error from '../../shared/error';
import { List, Picture } from './styles';

type TProps = {
  picturesList: string[];
  lastPictureElementRef: any,
};

const PicturesList: FC<TProps> = ({ picturesList, lastPictureElementRef }) => {
  if (!picturesList.length) return (
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

export default PicturesList;