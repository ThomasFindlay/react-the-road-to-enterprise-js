import propTypes from 'prop-types';

const BusinessCardPreview = (props) => {
  const { avatar, name, phoneNumber, description, address } = props;
  return (
    <div>
      <div className='p-8 shadow-md'>
        <h2 className='mb-8 text-2xl font-semibold'>Business Card Preview</h2>
        <div className='flex'>
          <div className='flex-shrink-0 w-32 h-32 mr-6 overflow-hidden bg-gray-100 rounded-full'>
            {avatar ? (
              <img
                src={avatar}
                className='object-cover w-full h-full'
                alt='Avatar'
              />
            ) : null}
          </div>
          <div className='flex flex-col flex-grow'>
            <p className='mb-3 text-2xl font-semibold'>{name}</p>
            <p className='mb-4 text-gray-700'>{description}</p>
            <div className='flex justify-between mt-auto'>
              <p className='text-gray-500'>{address}</p>
              <p className='text-gray-500'>{phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessCardPreview.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  phoneNumber: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
};

export default BusinessCardPreview;
