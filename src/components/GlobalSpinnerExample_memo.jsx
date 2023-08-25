import { GlobalSpinnerContext } from '@/context/GlobalSpinnerContext_Initial';
import { useContext, memo } from 'react';

const GlobalSpinnerExampleContent = memo(
  (props) => {
    console.log('GlobalSpinnerExample rendered');

    return (
      <div className='py-8 max-w-2xl mx-auto space-y-4'>
        <button
          className='bg-blue-600 text-blue-100 px-4 py-3'
          onClick={props.onShowSpinner}
        >
          Show global spinner
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => true
);

const GlobalSpinnerExample = (props) => {
  const { showSpinner, hideSpinner } = useContext(GlobalSpinnerContext);

  const onShowSpinner = () => {
    showSpinner();
    setTimeout(hideSpinner, 2000);
  };

  return <GlobalSpinnerExampleContent onShowSpinner={onShowSpinner} />;
};

export default GlobalSpinnerExample;
