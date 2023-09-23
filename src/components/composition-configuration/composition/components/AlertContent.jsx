import clsx from 'clsx';
import styles from '../../Alert.module.css';
import propTypes from 'prop-types';

const AlertContent = (props) => {
  const { className, children } = props;
  return <div className={clsx(styles.alertContent, className)}>{children}</div>;
};

AlertContent.propTypes = {
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

export default AlertContent;
