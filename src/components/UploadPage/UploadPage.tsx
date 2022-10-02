import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';
import { useContext, useRef, useState } from 'react';

import { AppContext } from '../../context/AppContext';
import { Prediction } from '../../types';
import { DragAndDrop } from './DragAndDrop/DragAndDrop';
import { PreviewModal } from './PreviewModal/PreviewModal';

const getBreedPrediction = async (img: HTMLImageElement): Promise<Prediction[]> => {
  const model = await mobilenet.load();
  const predictions = await model.classify(img);

  return predictions;
};

export const UploadPage = (): JSX.Element | null => {
  const { setPredictions, isUploadedPageActive } = useContext(AppContext);

  const imageRef = useRef<HTMLImageElement | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onUpload = async (): Promise<void> => {
    if (imageRef?.current) {
      const predictions = await getBreedPrediction(imageRef.current);
      setPredictions(predictions);
    }
  };

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  return (
    <>
      {isUploadedPageActive && (
        <>
          <DragAndDrop openModal={openModal} />
          {isModalOpen && (
            <PreviewModal onUpload={onUpload} closeModal={closeModal} imageRef={imageRef} />
          )}
        </>
      )}
    </>
  );
};
