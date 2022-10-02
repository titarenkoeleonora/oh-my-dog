import { useContext } from 'react';

import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';
import { AxiosResponse } from 'axios';

import { AppContext } from '../../context/app-provider';
import { getPictures } from '../../api';
import { DragAndDrop } from './dragAndDrop';
import { PreviewModal } from './previewModal';
import { getUrlsFromPredictions } from '../../helpers/utils';
import { Prediction } from '../../types';

const getBreedPrediction = async (img: HTMLImageElement): Promise<Prediction[]> => {
  const model = await mobilenet.load();

  const predictions = await model.classify(img);
  console.log('predictions: ', predictions);

  return predictions;
};

export const UploadPage = (): JSX.Element | null => {
  const {
    isOpenModal,
    imageRef,
    setPredictions,
    activeFilterIndex,
    setPicturesList,
    setIsUploadStarted,
    isUploadedPageActive,
    setUrls,
    setError,
  } = useContext(AppContext);

  const onUpload = async (): Promise<void> => {
    if (imageRef?.current) {
      const predictions = await getBreedPrediction(imageRef.current);
      setPredictions(predictions);

      const urls = getUrlsFromPredictions(predictions);
      setUrls(urls);

      const currentUrl = urls[activeFilterIndex].toLowerCase()

      await getPictures(
        {
          url: currentUrl,
          onSuccess: (data: AxiosResponse<{message: string[]}>['data']) => {
            setIsUploadStarted(false);
            setPicturesList(() => data.message);
          },
          onError: (error) => {
            if (error.response?.status === 404) {
              // setError(error.response.data.message);
              setError(error.message);
            }
          },
          onFinally: () => {
            setIsUploadStarted(false);
          },
        }
      )
    }
  }

  if (!isUploadedPageActive) return null;

  return (
    <>
      <DragAndDrop />
      {isOpenModal && <PreviewModal onUpload={onUpload} />}
    </>
  );
};
