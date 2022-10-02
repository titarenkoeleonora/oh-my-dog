import axios, { AxiosError, AxiosResponse } from 'axios';
import { badRequestCode } from '../helpers/constants';

interface Response {
  message: string[],
}

interface Input {
  onFinally: () => void,
  onSuccess?: (data: AxiosResponse['data']) => void,
  setError: (error: string) => void,
  url: string,
}

export const getPictures = ({ url, onSuccess, setError, onFinally }: Input) => axios
  .get<Response>(`https://dog.ceo/api/breed${url}/images/random/20`)
  .then((res: AxiosResponse<Response>) => {
    onSuccess?.(res.data);
    setError('');
  })
  .catch((err: AxiosError<any>) => {
    if (err.response?.status === badRequestCode) {
      setError(err.response.data.message);
    } else {
      setError('Ooops. Something went wrong D:');
    }
  })
  .finally(() => {
    onFinally();
  });
