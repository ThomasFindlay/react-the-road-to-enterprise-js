import {
  createContext,
  useContext,
  useContextSelector,
} from 'use-context-selector';

export const contextFactory = () => {
  const context = createContext();

  const useCtx = () => {
    const ctx = useContext(context);
    if (ctx === undefined)
      throw new Error(
        'useContextSelector must be used within a context provider'
      );

    return ctx;
  };

  const useCtxSelector = (contextSelector) => {
    const selector = (state) => {
      if (state === undefined)
        throw new Error('useContext must be used within a context provider');

      return contextSelector(state);
    };

    return useContextSelector(context, selector);
  };

  return [context, useCtx, useCtxSelector];
};
