import axios, { AxiosError, AxiosResponse } from 'axios';

type TResponse = {
  message: string[]
}

type TInput = {
  url: string
  onSuccess?: (data: AxiosResponse['data']) => void;
  onError?: (error: AxiosError) => void;
  onFinally?: () => void;
}

export const getPictures = ({ url, onSuccess, onError, onFinally }: TInput) => axios
  .get<TResponse>(`https://dog.ceo/api/breed${url}/images/random/20`)
  .then((res: AxiosResponse<TResponse>) => {
    onSuccess?.(res.data);
  })
  .catch((err: AxiosError) => {
    onError?.(err);
  })
  .finally(() => {
    onFinally?.();
  });
