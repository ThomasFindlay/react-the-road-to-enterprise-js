import clsx from 'clsx';
import styles from './productsLayout.module.css';
import propTypes from 'prop-types';

const ProductsList = (props) => {
  const { children, className, ...productsListProps } = props;
  return (
    <div
      {...productsListProps}
      className={clsx(styles.productsListLayout, className)}
    >
      {props.children}
    </div>
  );
};

ProductsList.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

export default ProductsList;
