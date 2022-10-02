import axios, { AxiosError, AxiosResponse } from 'axios';

import { NOT_FOUND_CODE } from '../helpers/constants';

interface Response {
  message: string[];
}

const IMAGES_TO_LOAD = 20;

interface GetPicturesProps {
  url: string;
  onFinally(): void;
  onSuccess(data: AxiosResponse['data']): void;
  setError(error: string): void;
}

export const getPictures = ({
  url,
  onSuccess,
  setError,
  onFinally,
}: GetPicturesProps): Promise<void> =>
  axios
    .get<Response>(`https://dog.ceo/api/breed${url}/images/random/${IMAGES_TO_LOAD}`)
    .then((res: AxiosResponse<Response>) => {
      onSuccess(res.data);
      setError('');
    })
    .catch((err) => {
      if ((err as AxiosError).response?.status === NOT_FOUND_CODE) {
        setError(err.response.data.message);
      } else {
        setError('Ooops. Something went wrong D:');
      }
    })
    .finally(onFinally);
