import { render, screen } from '@testing-library/react';

import { Error } from './Error';

describe('Error', () => {
  const errorText = 'Error Text';
  const defaultAlt = 'Server Error';
  const defaultImage = 'pug-bread.png';

  it('should render Error component', async () => {
    render(<Error>{errorText}</Error>);

    expect(await screen.findByText(errorText)).toBeInTheDocument();

    const image = await screen.findByRole('img');

    expect(image).toHaveAttribute('alt', defaultAlt);
    expect(image).toHaveAttribute('src', defaultImage);
  });

  it('should render Error with validation error', async () => {
    const validationErrorType = 'validationError';
    const validationErrorAlt = 'Validation Error';
    const validationErrorImage = 'pug-questions.png';

    render(<Error type={validationErrorType}>{errorText}</Error>);

    const image = await screen.findByRole('img');

    expect(image).toHaveAttribute('alt', validationErrorAlt);
    expect(image).toHaveAttribute('src', validationErrorImage);
  });

  it('should render Error with non valid type', async () => {
    const validationErrorType = 'dogError';

    render(<Error type={validationErrorType}>{errorText}</Error>);

    const image = await screen.findByRole('img');

    expect(image).toHaveAttribute('alt', defaultAlt);
    expect(image).toHaveAttribute('src', defaultImage);
  });
});
