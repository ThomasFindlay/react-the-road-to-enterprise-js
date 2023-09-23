import { useState } from 'react';
import DatePicker from './DatePicker';

const WrapperComponent = (props) => {
  const [date, setDate] = useState();
  return (
    <div className='flex justify-center'>
      <DatePicker
        label='Date Of Birth'
        value={date?.toString()}
        onChange={(date) => date && setDate(date)}
      />
    </div>
  );
};

export default WrapperComponent;
