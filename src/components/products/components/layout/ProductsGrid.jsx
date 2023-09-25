import clsx from 'clsx';
import styles from './productsLayout.module.css';
import propTypes from 'prop-types';

const ProductsGrid = (props) => {
  const { children, className, ...productsGridProps } = props;
  return (
    <div
      {...productsGridProps}
      className={clsx(styles.productsGridLayout, className)}
    >
      {children}
    </div>
  );
};

ProductsGrid.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

export default ProductsGrid;
