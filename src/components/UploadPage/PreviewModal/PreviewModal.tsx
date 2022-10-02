import { FC, SyntheticEvent, useContext } from 'react';

import { AppContext } from '../../../context/AppContext';
import { Button } from '../../shared/Button/Button';
import { Container, Dialogue, Footer, Image } from './PreviewModal.styles';

interface PreviewModalProps {
  imageRef: React.MutableRefObject<HTMLImageElement | null>;
  onUpload(): void;
  closeModal(): void;
}

export const PreviewModal: FC<PreviewModalProps> = ({
  onUpload,
  closeModal,
  imageRef,
}): JSX.Element | null => {
  const { uploadedImage, setUploadedImage, setIsUploadStarted, setIsUploadedPageActive } =
    useContext(AppContext);

  const onModalCLose = (evt: SyntheticEvent<HTMLDivElement | HTMLButtonElement>): void => {
    evt.preventDefault();
    evt.stopPropagation();
    closeModal();
    setUploadedImage(null);
  };

  const onDialogueClick = (evt: SyntheticEvent<HTMLDivElement>): void => evt.stopPropagation();

  const onUploadButtonClick = (): void => {
    setIsUploadStarted(true);
    closeModal();
    onUpload();
    setIsUploadedPageActive(false);
  };

  return (
    <>
      {uploadedImage && (
        <Container onClick={onModalCLose}>
          <Dialogue onClick={onDialogueClick}>
            <Image src={uploadedImage} alt="Image preview" id="img" ref={imageRef} />
            <Footer>
              <Button onClick={onUploadButtonClick}>Upload</Button>
              <Button variant="secondary" onClick={onModalCLose}>
                Cancel
              </Button>
            </Footer>
          </Dialogue>
        </Container>
      )}
    </>
  );
};
