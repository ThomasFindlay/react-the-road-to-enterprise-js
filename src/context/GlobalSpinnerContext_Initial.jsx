import GlobalSpinner from '@/components/GlobalSpinner';
import { useToggleState } from '@/hooks/useToggleState';
import { createContext } from 'react';
import propTypes from 'prop-types';

export const GlobalSpinnerContext = createContext();

const GlobalSpinnerContextProvider = (props) => {
  const { children } = props;
  const {
    state: isSpinnerVisible,
    open: showSpinner,
    close: hideSpinner,
    toggle: toggleSpinner,
  } = useToggleState(false);

  return (
    <GlobalSpinnerContext.Provider
      value={{
        isSpinnerVisible,
        showSpinner,
        hideSpinner,
        toggleSpinner,
      }}
    >
      {children}
      <GlobalSpinner />
    </GlobalSpinnerContext.Provider>
  );
};

GlobalSpinnerContextProvider.propTypes = {
  children: propTypes.children,
};

export default GlobalSpinnerContextProvider;
