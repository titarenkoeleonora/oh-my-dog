import { useCallback, useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/appProvider';
import ChosenPicture from './chosenPicture';
import Filter from './filter';
import Loader from '../shared/loader';
import PicturesList from './picturesList';
import { Container, MainBlock } from './styles';
import { getPictures } from '../../api';
import { AxiosResponse } from 'axios';
import Error from '../shared/error';
import Button from '../shared/button';

const ResultPage = () => {
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

  const observer = useRef<any>();

  const getData = useCallback(async (index: number) => {
    setIsMorePicturesLoading(true);

    const currentUrl = urls[index].toLowerCase()

    await getPictures({
      url: currentUrl,
      onSuccess: (data: AxiosResponse<{message: string[]}>['data']) => {
        setPicturesList((prevPicturesList) => Array.from(new Set([...prevPicturesList, ...data.message])));
        setError('');
      },
      onError: (error) => {
        if (error.response?.status === 404) {
          // setError(error.response.data.message);
          setError(error.message);
        } else {
          setError('Ooops...Something went wrong D:');
        }
      },
      onFinally: () => {
        setIsUploadStarted(false);
        setIsMorePicturesLoading(false);
      },
    });
  }, [setError, setIsUploadStarted, urls, setPicturesList]);

  const lastPictureElementRef = useCallback(
    (node: any) => {
      if (isMorePicturesLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          console.log('visible');
          await getData(activeFilterIndex);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isMorePicturesLoading,activeFilterIndex, getData]
  );

  const onFilterChange = async (index: number) => {
    setIsUploadStarted(true);
    setActiveFilterIndex(index);
    setPicturesList(() => []);
    setIsMorePicturesLoading(true);

    await getData(index);
  };

  const onTryAgainClick = () => {
    setIsUploadedPageActive(true);
    setUploadedImage(null);
    setActiveFilterIndex(0);
    setPicturesList(() => []);
  };

  if (isUploadStarted) return <Loader />;

  if (uploadedImage && !isOpenModal) return (
    <Container>
      <MainBlock>
        <ChosenPicture uploadedImage={uploadedImage} />
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
       : <PicturesList picturesList={picturesList} lastPictureElementRef={lastPictureElementRef} />
      }
      {isMorePicturesLoading && <Loader />}
    </Container>
  );

  return null;
};

export default ResultPage;