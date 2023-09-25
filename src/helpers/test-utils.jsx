import '@/index.css';
import { render } from '@testing-library/react';
import React from 'react';

const AllTheProviders = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
