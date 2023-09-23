import propTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = (props) => {
  const { label, ...datePickerProps } = props;
  return (
    <div className='flex flex-col items-start space-y-2'>
      {label ? <label>{label}</label> : null}
      <div>
        <ReactDatePicker {...datePickerProps} />
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  label: propTypes.string,
};

export default DatePicker;
