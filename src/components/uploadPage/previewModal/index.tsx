import { FC, SyntheticEvent, useContext } from 'react';

import { AppContext } from '../../../context/app-provider';
import { Button } from '../../shared/button';
import { Container, Dialogue, Footer, Image } from './styles';

type Props = {
  onUpload: () => void,
}

export const PreviewModal: FC<Props> = ({ onUpload }): JSX.Element | null => {
  const {
    uploadedImage,
    setUploadedImage,
    setIsOpenModal,
    imageRef,
    setIsUploadStarted,
    setIsUploadedPageActive
  } = useContext(AppContext);

  const onModalCLose = (evt: SyntheticEvent<HTMLDivElement | HTMLButtonElement>): void => {
    evt.preventDefault();
    evt.stopPropagation();
    setIsOpenModal(false);
    setUploadedImage(null);
  };

  if (!uploadedImage) return null;

  return (
    <Container onClick={onModalCLose}>
      <Dialogue
        onClick={(evt: SyntheticEvent<HTMLDivElement>): void => evt.stopPropagation()}
      >
        <Image src={uploadedImage} alt={'preview'} id='img' ref={imageRef} />
      <Footer>
        {<Button
            onClick={(): void => {
              setIsUploadStarted(true);
              setIsOpenModal(false);
              onUpload();
              setIsUploadedPageActive(false);
            }}
          >
            Upload
          </Button>
        }
        <Button
          variant='secondary'
          onClick={onModalCLose}
        >
          Cancel
        </Button>
      </Footer>
      </Dialogue>
    </Container>
  );
};
