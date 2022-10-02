import { useCallback, useContext, useRef, useState } from 'react';

import { AxiosResponse } from 'axios';
import { getPictures } from '../../api';
import { AppContext } from '../../context/app-provider';
import { ChosenPicture } from './chosenPicture';
import { Filter } from './filter';
import { Loader } from '../shared/loader';
import { PicturesList } from './picturesList';
import { Error } from '../shared/error';
import { Button } from '../shared/button';
import { Container, MainBlock } from './styles';

export const ResultPage = (): JSX.Element | null => {
  const {
    uploadedImage,
    setUploadedImage,
    isUploadStarted,
    isOpenModal,
    activeFilterIndex,
    setActiveFilterIndex,
    picturesList,
    predictions,
    setIsUploadStarted,
    setPicturesList,
    urls,
    error,
    setError,
    setIsUploadedPageActive,
  } = useContext(AppContext);

  const [isMorePicturesLoading, setIsMorePicturesLoading] = useState(false);

  const observer = useRef<any>(); //!TODO

  const getData = useCallback(async (index: number): Promise<void> => {
    setIsMorePicturesLoading(true);

    const currentUrl = urls[index].toLowerCase()

    await getPictures({
      url: currentUrl,
      onSuccess: (data: AxiosResponse<{message: string[]}>['data']): void => {
        setPicturesList((prevPicturesList) => Array.from(new Set([...prevPicturesList, ...data.message])));
      },
      setError,
      onFinally: (): void => {
        setIsUploadStarted(false);
        setIsMorePicturesLoading(false);
      },
    });
  }, [setError, setIsUploadStarted, urls, setPicturesList]);

  const lastPictureElementRef = useCallback(
    (node: any) => { //!TODO
      if (isMorePicturesLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          await getData(activeFilterIndex);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isMorePicturesLoading, activeFilterIndex, getData]
  );

  const onFilterChange = async (index: number): Promise<void> => {
    setActiveFilterIndex(index);
    setIsMorePicturesLoading(true);
    setPicturesList(() => []);
    setError('');

    await getData(index);
  };

  const onTryAgainClick = (): void => {
    setIsUploadedPageActive(true);
    setUploadedImage(null);
    setActiveFilterIndex(0);
    setPicturesList(() => []);
    setError('');
  };

  if (isUploadStarted) return <Loader />;

  return (
    <>
      {uploadedImage && !isOpenModal && (
        <Container>
          <MainBlock>
            <ChosenPicture uploadedImage={uploadedImage} text={predictions?.[0]?.className} />
            <div>
              <Filter
                predictions={predictions}
                activeFilterIndex={activeFilterIndex}
                setActiveFilterIndex={setActiveFilterIndex}
                onFilterChange={onFilterChange}
              />
              <Button onClick={onTryAgainClick}>
                Try again!
              </Button>
            </div>
          </MainBlock>
          {error ?
            <Error>{error}</Error>
          : <PicturesList picturesList={picturesList} lastPictureElementRef={lastPictureElementRef} isMorePicturesLoading={isMorePicturesLoading} />
          }
          {isMorePicturesLoading && <Loader />}
        </Container>
      )}
    </>
  );
};
