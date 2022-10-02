import React, { FC, PropsWithChildren, useState } from 'react';

import { Prediction } from '../types';

interface AppContextInterface {
  isUploadedPageActive: boolean;
  isUploadStarted: boolean;
  predictions: Prediction[];
  uploadedImage: string | null;
  setUploadedImage(url: string | null): void;
  setIsUploadStarted(isUploadStarted: boolean): void;
  setPredictions(predictions: Prediction[]): void;
  setIsUploadedPageActive(isUploadedPageActive: boolean): void;
}

const defaultState: AppContextInterface = {
  isUploadedPageActive: true,
  isUploadStarted: false,
  predictions: [],
  uploadedImage: null,
  setUploadedImage: (): void => undefined,
  setIsUploadStarted: (): void => undefined,
  setPredictions: (): void => undefined,
  setIsUploadedPageActive: (): void => undefined,
};

export const AppContext = React.createContext<AppContextInterface>(defaultState);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isUploadStarted, setIsUploadStarted] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isUploadedPageActive, setIsUploadedPageActive] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isUploadedPageActive,
        isUploadStarted,
        predictions,
        uploadedImage,
        setUploadedImage,
        setIsUploadStarted,
        setPredictions,
        setIsUploadedPageActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
