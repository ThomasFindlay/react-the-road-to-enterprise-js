import propTypes from 'prop-types';

const ProductListCard = (props) => {
  const { product } = props;
  return (
    <div className='bg-white p-4 rounded-md shadow-md mb-4 flex justify-start cursor-pointer hover:shadow-lg'>
      <div className='w-20 mr-4 flex items-center justify-center flex-shrink-0'>
        <img
          className='max-w-full max-h-full block h-auto mx-4'
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className='px-4'>
        <div className='flex flex-col h-full '>
          <p className='font-semibold text-2xl mb-2'>{product.title}</p>
          <div className='h-full flex flex-col items-start justify-between'>
            <p className='text-xl'>£{product.price}</p>
            <p className='text-gray-500'>{product.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductListCard.propTypes = {
  product: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    description: propTypes.string,
    category: propTypes.string,
    image: propTypes.string,
  }).isRequired,
};

export default ProductListCard;
