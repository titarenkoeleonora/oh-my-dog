import { AxiosResponse } from 'axios';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { getPictures } from '../../api/getPictures';
import { AppContext } from '../../context/AppContext';
import { getUrlsFromPredictions } from '../../helpers/getUrlsFromPredictions';
import { Button } from '../shared/Button/Button';
import { Error } from '../shared/Error/Error';
import { Image } from '../shared/Image/Image';
import { Loader } from '../shared/Loader/Loader';
import { Filter } from './Filter/Filter';
import { PicturesList } from './PicturesList/PicturesList';
import { Container, MainBlock } from './ResultPage.styles';

export const ResultPage = (): JSX.Element | null => {
  const {
    uploadedImage,
    isUploadStarted,
    predictions,
    setUploadedImage,
    setPredictions,
    setIsUploadStarted,
    setIsUploadedPageActive,
  } = useContext(AppContext);

  const [isMorePicturesLoading, setIsMorePicturesLoading] = useState<boolean>(false);
  const [pictures, setPictures] = useState<string[]>([]);
  const [activeFilterIndex, setActiveFilterIndex] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const observer = useRef<IntersectionObserver | null>(null);

  const updatePictures = (newPictures: string[]): void => {
    if (newPictures?.length === 0) return;

    setPictures((prevPictures) => Array.from(new Set([...prevPictures, ...newPictures])));
  };

  const onFilterChange = async (index: number): Promise<void> => {
    setActiveFilterIndex(index);
    setIsMorePicturesLoading(true);
    setPictures([]);
    setError('');

    await getData(index);
  };

  const onTryAgainClick = (): void => {
    setIsUploadedPageActive(true);
    setUploadedImage(null);
    setActiveFilterIndex(0);
    setPictures([]);
    setError('');
    setPredictions([]);
  };

  const getData = useCallback(
    async (index = 0): Promise<void> => {
      setIsMorePicturesLoading(true);
      const urls = getUrlsFromPredictions(predictions);

      const currentUrl = urls[index].toLowerCase();

      await getPictures({
        url: currentUrl,
        onSuccess: (data: AxiosResponse<{ message: string[] }>['data']): void => {
          updatePictures(data.message);
        },
        setError,
        onFinally: (): void => {
          setIsUploadStarted(false);
          setIsMorePicturesLoading(false);
        },
      });
    },
    [setError, setIsUploadStarted, predictions],
  );

  const lastPictureElementRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (isMorePicturesLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          await getData(activeFilterIndex);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isMorePicturesLoading, activeFilterIndex, getData],
  );

  useEffect(() => {
    if (predictions.length > 0) {
      getData();
    }
  }, [predictions, getData]);

  if (isUploadStarted) return <Loader />;

  return (
    <>
      {uploadedImage && predictions.length > 0 && (
        <Container>
          <MainBlock>
            <Image src={uploadedImage} width="300" height="300" alt="Uploaded image" />
            <div>
              <Filter
                predictions={predictions}
                activeFilterIndex={activeFilterIndex}
                setActiveFilterIndex={setActiveFilterIndex}
                onFilterChange={onFilterChange}
              />
              <Button onClick={onTryAgainClick}>Try again!</Button>
            </div>
          </MainBlock>
          {error ? (
            <Error>{error}</Error>
          ) : (
            <PicturesList
              picturesList={pictures}
              lastPictureElementRef={lastPictureElementRef}
              isMorePicturesLoading={isMorePicturesLoading}
            />
          )}
          {isMorePicturesLoading && <Loader />}
        </Container>
      )}
    </>
  );
};
