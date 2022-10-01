import { FC, SyntheticEvent, useContext } from 'react';
import { AppContext } from '../../../context/appProvider';
import Button from '../../shared/button';
import { Container, Dialogue, Footer, Image } from './styles';

type Props = {
  onUpload: () => void,
}

const PreviewModal: FC<Props> = ({ onUpload }) => {
  const {
    uploadedImage,
    setUploadedImage,
    setIsOpenModal,
    imageRef,
    setIsUploadStarted,
    setIsUploadedPageActive
  } = useContext(AppContext);

  const onModalCLose = (evt: SyntheticEvent<HTMLDivElement | HTMLButtonElement>) => {
    evt.preventDefault();
    evt.stopPropagation();
    setIsOpenModal(false);
    setUploadedImage(null);
  };

  if (!uploadedImage) return null;

  return (
    <Container onClick={onModalCLose}>
      <Dialogue
        onClick={(evt: SyntheticEvent<HTMLDivElement>) => evt.stopPropagation()}
      >
        <Image src={uploadedImage} alt={'preview'} id='img' ref={imageRef} />
      <Footer>
        {<Button
            onClick={() => {
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

export default PreviewModal;