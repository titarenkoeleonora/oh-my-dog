import React, { useContext, useRef, useState } from 'react';
import { AppContext } from '../../../context/appProvider';
import { validateFiles } from '../../../helpers/utils';
import Error from '../../shared/error';
import { Container, Form, Input, Label, UploadButton } from './styles';

const getUploadedImagePath = (
  setUploadedImage: (a: string) => void,
  setIsOpenModal: (a: boolean) => void,
  uploadedImage?: File) => {
  if (uploadedImage) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result as string); //!!TODO
      setIsOpenModal(true);
    };
    reader.readAsDataURL(uploadedImage);
  }
};

const DragAndDrop = () => {
  const [dragActive, setDragActive] = useState(false);
  const [validationError, setValidationError] = useState('');
  
  const { setUploadedImage, setIsOpenModal } = useContext(AppContext);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onDrag = (evt: React.DragEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (evt.type === 'dragenter' || evt.type === 'dragover') {
      setDragActive(true);
    } else if (evt.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const onDrop = (evt: React.DragEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const file = evt.dataTransfer.files?.[0];

    setDragActive(false);
    setValidationError('');

    const validation = validateFiles(file);

      if (!validation) {
        getUploadedImagePath(setUploadedImage, setIsOpenModal, file);
      } else {
        setValidationError(validation);
        setIsOpenModal(true);
      }
  };

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    const file = evt.target.files?.[0]

    setValidationError('');

    if (file) {
      const validation = validateFiles(file);

      if (!validation) {
        getUploadedImagePath(setUploadedImage, setIsOpenModal, file);
      } else {
        setValidationError(validation);
        setIsOpenModal(true);
      }
    }
  };

  const onButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Container>
       <Form
        dragActive={dragActive}
        onDragEnter={onDrag}
        onDragLeave={onDrag}
        onDragOver={onDrag}
        onDrop={onDrop}
        onSubmit={(evt: React.FormEvent) => evt.preventDefault()}
      >
        <Input
          id='input-file-upload'
          ref={inputRef}
          type='file'
          accept='image/*'
          onChange={onChange}
          required
        />
        <Label htmlFor='input-file-upload'>
          <p>Drag and drop your file here or</p>
          <UploadButton onClick={onButtonClick}>
            Upload a file
          </UploadButton>
        </Label>
      </Form>
      {validationError && (
        <Error type='validationError'>
          {validationError}
        </Error>
      )
        }
    </Container>
   
  );
};

export default DragAndDrop;