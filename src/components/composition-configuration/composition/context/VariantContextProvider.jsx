import { contextFactory } from '@/context/helpers/contextFactory';
import propTypes from 'prop-types';

const [useVariant, VariantContext] = contextFactory();

export { useVariant };

const VariantContextProvider = (props) => {
  return (
    <VariantContext.Provider value={props.variant}>
      {props.children}
    </VariantContext.Provider>
  );
};

VariantContextProvider.propTypes = {
  variant: propTypes.oneOf(['success', 'info', 'error']).isRequired,
  children: propTypes.node.isRequired,
};

export default VariantContextProvider;
