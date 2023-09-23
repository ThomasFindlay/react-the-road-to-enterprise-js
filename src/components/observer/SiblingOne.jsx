import { emitter } from './counterObserver';

const SiblingOne = (props) => {
  const onIncrementCounter = () => {
    emitter.emit('increment');
  };

  const onDecrementCounter = () => {
    emitter.emit('decrement');
  };

  return (
    <div className='flex flex-col space-y-4'>
      <button onClick={onIncrementCounter}>Increment counter</button>
      <button onClick={onDecrementCounter}>Decrement counter</button>
    </div>
  );
};

export default SiblingOne;
