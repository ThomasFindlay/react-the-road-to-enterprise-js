import { useState } from 'react';

export const useLayout = (LAYOUT_COMPONENTS, initialLayout) => {
  const [layout, setLayout] = useState(initialLayout);
  const LayoutComponent = LAYOUT_COMPONENTS[layout];

  return {
    layout,
    setLayout,
    LayoutComponent,
  };
};
