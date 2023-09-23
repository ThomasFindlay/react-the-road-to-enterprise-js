import clsx from 'clsx';
import propTypes from 'prop-types';
import styles from '../../Alert.module.css';
import { ErrorIcon, InfoIcon, SuccessIcon } from '../../components/icons';
import { useVariant } from '../context/VariantContextProvider';

const ICONS = {
  success: SuccessIcon,
  info: InfoIcon,
  error: ErrorIcon,
};

const AlertIcon = (props) => {
  const { className } = props;
  const variant = useVariant();
  const Icon = ICONS[variant];

  return (
    <div className={styles.alertIconBox}>
      <Icon className={clsx(styles.alertIcon, styles[variant], className)} />
    </div>
  );
};

AlertIcon.propTypes = {
  className: propTypes.string,
};

export default AlertIcon;
