import clsx from 'clsx';
import propTypes from 'prop-types';
import React from 'react';
import styles from '../Alert.module.css';
import VariantContextProvider from './context/VariantContextProvider';
export * from './components';

export const Alert = (props) => {
  const { show, variant, children } = props;

  return show ? (
    <VariantContextProvider variant={variant}>
      <div className={clsx(styles.alert, styles[variant])}>{children}</div>
    </VariantContextProvider>
  ) : null;
};

Alert.propTypes = {
  show: propTypes.bool.isRequired,
  variant: propTypes.oneOf(['success', 'info', 'error']).isRequired,
  children: propTypes.node,
};

export default Alert;
