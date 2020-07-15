import React from 'react';
import { render } from '@testing-library/react';
import App from '~/App';

describe('App', () => {
  it('should mount the app', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello from React')).toBeTruthy();
  });
});
