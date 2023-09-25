import clsx from 'clsx';
import propTypes from 'prop-types';
import React from 'react';
import styles from '../Alert.module.css';
import { ErrorIcon, InfoIcon, SuccessIcon } from '../components/icons';
import CloseIcon from '../components/icons/CloseIcon';

const ICONS = {
  success: SuccessIcon,
  info: InfoIcon,
  error: ErrorIcon,
};

const Alert = (props) => {
  const {
    children,
    text,
    headerText,
    show,
    variant,
    onClose,
    showIcon = true,
  } = props;

  const Icon = ICONS[variant];

  return show ? (
    <div className={clsx(styles.alert, styles[variant])}>
      {/* Side icon */}
      {showIcon ? (
        <div className={styles.alertIconBox}>
          <Icon className={clsx(styles.alertIcon, styles[variant])} />
        </div>
      ) : null}
      {/* Close alert button */}
      {onClose ? (
        <button className='absolute top-5 right-5' onClick={onClose}>
          <CloseIcon className={clsx(styles.alertIcon, styles[variant])} />
        </button>
      ) : null}
      <div className={styles.alertContent}>
        {/* Alert header */}
        {headerText ? (
          <div className={clsx(styles.alertHeader, styles[variant])}>
            {headerText}
          </div>
        ) : null}
        {/* Alert body */}
        <div className={clsx(styles.alertBody, styles[variant])}>
          {text ? text : children}
        </div>
      </div>
    </div>
  ) : null;
};

Alert.propTypes = {
  show: propTypes.bool.isRequired,
  variant: propTypes.oneOf(['success', 'info', 'error']).isRequired,
  showIcon: propTypes.bool,
  headerText: propTypes.string,
  text: propTypes.string,
  children: propTypes.node,
  onClose: propTypes.func,
};

export default Alert;
