import GlobalSpinner from '@/components/GlobalSpinner';
import { contextFactory } from './helpers/contextFactory';
import { useToggleState } from '@/hooks/useToggleState';
import propTypes from 'prop-types';

const [
  GlobalSpinnerContext,
  useGlobalSpinnerContext,
  useGlobalSpinnerContextSelector,
] = contextFactory();

export { useGlobalSpinnerContext, useGlobalSpinnerContextSelector };

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
