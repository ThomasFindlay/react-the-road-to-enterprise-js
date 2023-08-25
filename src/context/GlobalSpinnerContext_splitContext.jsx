import { useMemo } from 'react';
import GlobalSpinner from '@/components/GlobalSpinner';
import { contextFactory } from './helpers/contextFactory_splitContext';
import { useToggleState } from '@/hooks/useToggleState';
import propTypes from 'prop-types';

const [useGlobalSpinnerContext, GlobalSpinnerContext] = contextFactory();

const [useGlobalSpinnerActionsContext, GlobalSpinnerActionsContext] =
  contextFactory();

export { useGlobalSpinnerContext, useGlobalSpinnerActionsContext };

const GlobalSpinnerContextProvider = (props) => {
  const { children } = props;
  const {
    state: isSpinnerVisible,
    open: showSpinner,
    close: hideSpinner,
    toggle: toggleSpinner,
  } = useToggleState(false);

  const values = useMemo(
    () => ({
      isSpinnerVisible,
    }),
    [isSpinnerVisible]
  );

  const actions = useMemo(
    () => ({
      showSpinner,
      hideSpinner,
      toggleSpinner,
    }),
    []
  );

  return (
    <GlobalSpinnerContext.Provider value={values}>
      <GlobalSpinnerActionsContext.Provider value={actions}>
        {children}
        <GlobalSpinner />
      </GlobalSpinnerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  );
};

GlobalSpinnerContextProvider.propTypes = {
  children: propTypes.children,
};

export default GlobalSpinnerContextProvider;
