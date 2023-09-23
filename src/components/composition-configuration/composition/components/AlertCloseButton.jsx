import clsx from 'clsx';
import CloseIcon from '../../components/icons/CloseIcon';
import styles from '../../Alert.module.css';
import { useVariant } from '../context/VariantContextProvider';
import propTypes from 'prop-types';

const AlertCloseButton = (props) => {
  const { onClose, className } = props;
  const variant = useVariant();
  return (
    <div>
      <button className='absolute top-5 right-5' onClick={onClose}>
        <CloseIcon
          className={clsx(styles.alertIcon, styles[variant], className)}
        />
      </button>
    </div>
  );
};

AlertCloseButton.propTypes = {
  className: propTypes.string,
  onClose: propTypes.func.isRequired,
};

export default AlertCloseButton;
