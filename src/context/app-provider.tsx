import React, { MutableRefObject, useRef, useState } from 'react';

import { FC, PropsWithChildren } from 'react';
import { Prediction } from '../types';

interface State {
  activeFilterIndex: number;
  error: string,
  imageRef: MutableRefObject<HTMLImageElement | null> | null,
  isOpenModal: boolean,
  isUploadedPageActive: boolean,
  isUploadStarted: boolean,
  predictions: Prediction[],
  picturesList: string[],
  setUploadedImage: (url: string | null) => void,
  setIsOpenModal: (isOpen: boolean) => void,
  setIsUploadStarted: (isUploadStarted: boolean) => void,
  setPredictions: (predictions: Prediction[]) => void,
  setActiveFilterIndex: (activeFilterIndex: number) => void,
  setPicturesList: (cb: (picturesList: string[]) => string[]) => void,
  setIsUploadedPageActive: (isUploadedPageActive: boolean) => void,
  setUrls: (urls: string[]) => void,
  setError: (error: string) => void,
  uploadedImage: string | null,
  urls: string[],
}

const defaultState: State = {
  activeFilterIndex: 0,
  error: '',
  imageRef: null,
  isOpenModal: false,
  isUploadedPageActive: true,
  isUploadStarted: false,
  predictions: [],
  picturesList: [],
  setUploadedImage: (): void => {},
  setIsOpenModal: (): void => {},
  setIsUploadStarted: (): void => {},
  setPredictions: (): void => {},
  setActiveFilterIndex: (): void => {},
  setPicturesList: (): void => {},
  setIsUploadedPageActive: (): void => {},
  setUrls: (): void => {},
  setError: (): void => {},
  uploadedImage: null,
  urls: [],
}

export const AppContext = React.createContext(defaultState);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isUploadStarted, setIsUploadStarted] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [picturesList, setPicturesList] = useState<string[]>([])
  const [isUploadedPageActive, setIsUploadedPageActive] = useState(true);
  const [urls, setUrls] = useState<string[]>([]);
  const [error, setError] = useState('');

  const imageRef = useRef<HTMLImageElement | null>(null);

  return (
    <AppContext.Provider
      value={{
        activeFilterIndex,
        error,
        imageRef,
        isOpenModal,
        isUploadedPageActive,
        isUploadStarted,
        predictions,
        picturesList,
        setUploadedImage,
        setIsOpenModal,
        setIsUploadStarted,
        setPredictions,
        setActiveFilterIndex,
        setPicturesList,
        setIsUploadedPageActive,
        setUrls,
        setError,
        uploadedImage,
        urls,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
