import { useContext } from 'react';
import { AppContext } from '../../context/appProvider';
import DragAndDrop from './dragAndDrop';
import PreviewModal from './previewModal';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';
import { AxiosResponse } from 'axios';
import { getUrlsFromPredictions } from '../../helpers/utils';
import { getPictures } from '../../api';

const getBreedPrediction = async (img: HTMLImageElement) => {
  const model = await mobilenet.load();

  const predictions = await model.classify(img);
  console.log('predictions: ', predictions);

  return predictions;
};

const UploadPage = () => {
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

  const onUpload = async () => {
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

export default UploadPage;