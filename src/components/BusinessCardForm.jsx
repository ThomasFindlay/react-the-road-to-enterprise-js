import styles from './BusinessCardForm.module.css';
import propTypes from 'prop-types';

const BusinessCardForm = (props) => {
  const {
    name,
    phoneNumber,
    description,
    address,
    onInputChange,
    onFileUpload,
  } = props;

  return (
    <div className='p-8 shadow-md'>
      <h2 className='mb-4 text-2xl font-semibold'>Business Card Form</h2>
      <form>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Avatar</label>
          <input type='file' onChange={onFileUpload} />
        </div>

        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Name</label>
          <input
            className={styles.formInput}
            type='text'
            name='name'
            value={name}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Description</label>
          <input
            className={styles.formInput}
            type='text'
            name='description'
            value={description}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Phone number</label>
          <input
            className={styles.formInput}
            type='text'
            name='phoneNumber'
            value={phoneNumber}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Address</label>
          <input
            className={styles.formInput}
            type='text'
            name='address'
            value={address}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

BusinessCardForm.propTypes = {
  name: propTypes.string.isRequired,
  phoneNumber: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  onInputChange: propTypes.func.isRequired,
  onFileUpload: propTypes.func.isRequired,
};

export default BusinessCardForm;
