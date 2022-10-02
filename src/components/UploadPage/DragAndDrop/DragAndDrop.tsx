import React, { FC, useContext, useRef, useState } from 'react';

import { AppContext } from '../../../context/AppContext';
import { eventTypes } from '../../../helpers/constants';
import { getUploadedImagePath } from '../../../helpers/getUploadedImagePath';
import { validateFiles } from '../../../helpers/validateFiles';
import { Error } from '../../shared/Error/Error';
import { Container, Form, Input, Label, UploadButton } from './DragAndDrop.styles';

interface DragAndDropProps {
  openModal(): void;
}

export const DragAndDrop: FC<DragAndDropProps> = ({ openModal }): JSX.Element => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const { uploadedImage, setUploadedImage } = useContext(AppContext);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const isErrorShowed = validationError && !uploadedImage;

  const onDrag = (evt: React.DragEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (evt.type === eventTypes.dragEnter || evt.type === eventTypes.dragOver) {
      setDragActive(true);
    } else if (evt.type === eventTypes.dragLeave) {
      setDragActive(false);
    }
  };

  const onDrop = (evt: React.DragEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const file = evt.dataTransfer.files?.[0];

    setDragActive(false);
    setValidationError(null);

    if (file) {
      getData(file);
    }
  };

  const onChange = async (evt: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    evt.preventDefault();

    const file = evt.target.files?.[0];

    setValidationError(null);

    if (file) {
      await getData(file);
      evt.target.value = '';
    }
  };

  const onButtonClick = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const getData = (file: File): void => {
    const validation = validateFiles(file);

    if (validation) {
      setValidationError(validation);
      openModal();
    } else {
      getUploadedImagePath(setUploadedImage, openModal, file);
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
      >
        <Input
          id="input-file-upload"
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onChange}
          required
        />
        <Label htmlFor="input-file-upload">
          <p>Drag and drop your file here or</p>
          <UploadButton onClick={onButtonClick}>Upload a file</UploadButton>
        </Label>
      </Form>
      {isErrorShowed && <Error type="validationError">{validationError}</Error>}
    </Container>
  );
};
