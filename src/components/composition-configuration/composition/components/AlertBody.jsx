import clsx from 'clsx';
import styles from '../../Alert.module.css';
import { useVariant } from '../context/VariantContextProvider';
import propTypes from 'prop-types';

const AlertBody = (props) => {
  const { className } = props;
  const variant = useVariant();
  return (
    <div className={clsx(styles.alertBody, styles[variant], className)}>
      {props.children}
    </div>
  );
};

AlertBody.propTypes = {
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

export default AlertBody;
