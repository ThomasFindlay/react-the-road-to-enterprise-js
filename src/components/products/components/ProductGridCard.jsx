import propTypes from 'prop-types';

const ProductGridCard = (props) => {
  const { product } = props;
  return (
    <div className='bg-white p-4 rounded-md shadow-md flex flex-col cursor-pointer hover:shadow-lg'>
      <div className='flex items-center justify-center flex-grow mb-8'>
        <img
          className='max-h-[20rem] max-w-full block h-auto mx-auto flex-shrink-0'
          src={product.image}
          alt={product.title}
        />
      </div>
      <p className='font-semibold text-lg mb-2 text-left'>{product.title}</p>
      <div className='flex justify-between items-center mt-auto'>
        <p className='text-gray-500'>{product.category}</p>
        <p>£{product.price}</p>
      </div>
    </div>
  );
};

ProductGridCard.propTypes = {
  product: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    description: propTypes.string,
    category: propTypes.string,
    image: propTypes.string,
  }).isRequired,
};

export default ProductGridCard;
