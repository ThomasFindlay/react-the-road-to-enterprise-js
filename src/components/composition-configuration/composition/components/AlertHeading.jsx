import clsx from 'clsx';
import propTypes from 'prop-types';
import styles from '../../Alert.module.css';
import { useVariant } from '../context/VariantContextProvider';

const AlertHeading = (props) => {
  const { children, className } = props;
  const variant = useVariant();
  return (
    <div className={clsx(styles.alertHeader, styles[variant], className)}>
      {children}
    </div>
  );
};

AlertHeading.propTypes = {
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

export default AlertHeading;
