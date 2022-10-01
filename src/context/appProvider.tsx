import React, { MutableRefObject, useRef, useState } from 'react'
import { FC, PropsWithChildren } from 'react';
import { TPrediction } from '../types';

type TState = {
  uploadedImage: string | null,
  isOpenModal: boolean,
  imageRef: MutableRefObject<HTMLImageElement | null> | null,
  isUploadStarted: boolean,
  predictions: TPrediction[],
  activeFilterIndex: number;
  picturesList: string[],
  isUploadedPageActive: boolean,
  urls: string[],
  error: string,
  setUploadedImage: (url: string | null) => void,
  setIsOpenModal: (isOpen: boolean) => void,
  setIsUploadStarted: (isUploadStarted: boolean) => void,
  setPredictions: (predictions: TPrediction[]) => void,
  setActiveFilterIndex: (activeFilterIndex: number) => void,
  setPicturesList: (picturesList: string[]) => void,
  setIsUploadedPageActive: (isUploadedPageActive: boolean) => void,
  setUrls: (urls: string[]) => void,
  setError: (error: string) => void,
}

const defaultState: TState = {
  uploadedImage: null,
  isOpenModal: false,
  imageRef: null,
  isUploadStarted: false,
  predictions: [],
  activeFilterIndex: 0,
  picturesList: [],
  isUploadedPageActive: true,
  urls: [],
  error: '',
  setUploadedImage: () => {},
  setIsOpenModal: () => {},
  setIsUploadStarted: () => {},
  setPredictions: () => {},
  setActiveFilterIndex: () => {},
  setPicturesList: () => {},
  setIsUploadedPageActive: () => {},
  setUrls: () => {},
  setError: () => {},
}

export const AppContext = React.createContext(defaultState);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isUploadStarted, setIsUploadStarted] = useState(false);
  const [predictions, setPredictions] = useState<TPrediction[]>([]);
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [picturesList, setPicturesList] = useState<string[]>([])
  const [isUploadedPageActive, setIsUploadedPageActive] = useState(true);
  const [urls, setUrls] = useState<string[]>([]);
  const [error, setError] = useState('');
 
  const imageRef = useRef<HTMLImageElement | null>(null);

  return (
    <AppContext.Provider
      value={{
        imageRef,
        uploadedImage,
        setUploadedImage,
        isOpenModal,
        setIsOpenModal,
        isUploadStarted, 
        setIsUploadStarted,
        predictions,
        setPredictions,
        activeFilterIndex,
        setActiveFilterIndex,
        picturesList,
        setPicturesList,
        isUploadedPageActive,
        setIsUploadedPageActive,
        urls,
        setUrls,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}