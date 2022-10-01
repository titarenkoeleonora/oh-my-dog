import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/appProvider";
import Main from "../shared/main";
import RadioButton from "../shared/radioButton";
import ChosenPicture from "../chosenPicture";
import Filter from "../Filter";
import Loader from "../Loader";
import PicturesList from "../PicturesList";
import { Container, MainBlock } from "./styles";
import { getPictures } from "../../api";
import { AxiosResponse } from "axios";
import Error from "../shared/error";
import Button from "../shared/button";

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

  const onFilterChange = async (index: number) => {
    setIsUploadStarted(true);
    setActiveFilterIndex(index);

    const currentUrl = urls[index].toLowerCase()

    await getPictures({
      url: currentUrl,
      onSuccess: (data: AxiosResponse<{message: string[]}>['data']) => {
        setPicturesList(data.message);
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
      },
    });
  };

  const onTryAgainClick = () => {
    setIsUploadedPageActive(true);
    setUploadedImage(null);
    setActiveFilterIndex(0);
    setPicturesList([]);
  };

  if (isUploadStarted && !error) return <Loader />;

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
       : <PicturesList picturesList={picturesList} />
      }
    </Container>
  );

  return null;
};

export default ResultPage;