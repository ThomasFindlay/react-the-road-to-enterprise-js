import CombinedAlert from './CombinedAlert';
import {
  Alert,
  AlertBody,
  AlertCloseButton,
  AlertContent,
  AlertHeading,
  AlertIcon,
} from './composition/Alert';
import ConfiguredAlert from './configuration/Alert';

const CompositionConfiguration = (props) => {
  return (
    <div>
      <h3 className='text-md md:text-lg font-semibold mb-4'>
        Alert components
      </h3>

      <h4 className='text-sm md:text-md font-semibold mb-4'>
        Configured Alerts
      </h4>
      <div className='max-w-[30rem] mx-auto space-y-4'>
        <ConfiguredAlert
          show
          variant='success'
          headerText='Success'
          text='Your action was completed successfully!'
          onClose={() => {}}
        />
        <ConfiguredAlert
          show
          variant='info'
          headerText='Helpful tip'
          text='This is a helpful information.'
          onClose={() => {}}
        />
        <ConfiguredAlert
          show
          variant='error'
          headerText='Validation Error'
          text='There was a problem with validating the form'
          onClose={() => {}}
        />

        <h4 className='text-sm md:text-md font-semibold mb-4'>
          Composed Alerts
        </h4>

        <Alert show variant='success'>
          <AlertIcon />
          <AlertCloseButton onClose={() => {}} />
          <AlertContent>
            <AlertHeading>Success</AlertHeading>
            <AlertBody>Your action was completed successfully!</AlertBody>
          </AlertContent>
        </Alert>

        <Alert show variant='info'>
          <AlertIcon />
          <AlertCloseButton onClose={() => {}} />
          <AlertContent>
            <AlertHeading>Helpful tip</AlertHeading>
            <AlertBody>This is a helpful information.</AlertBody>
          </AlertContent>
        </Alert>

        <Alert show variant='error'>
          <AlertIcon />
          <AlertCloseButton onClose={() => {}} />
          <AlertContent>
            <AlertHeading>Validation Error</AlertHeading>
            <AlertBody>There was a problem with validating the form</AlertBody>
          </AlertContent>
        </Alert>

        <h4 className='text-sm md:text-md font-semibold mb-4'>
          Composed Alerts Custom
        </h4>

        <Alert show variant='error'>
          <AlertIcon />
          <AlertContent className='flex-grow'>
            <AlertHeading>Delete Warning</AlertHeading>
            <AlertBody>Are you sure you want to delete this record?</AlertBody>
            <div className='px-4 pt-4 flex justify-end space-x-4'>
              <button
                className='text-rose-900 font-semibold'
                onClick={() => {}}
              >
                Cancel
              </button>
              <button
                className='bg-rose-700 text-rose-100 px-4 py-2 font-semibold'
                onClick={() => {}}
              >
                Confirm
              </button>
            </div>
          </AlertContent>
        </Alert>

        <h4 className='text-sm md:text-md font-semibold mb-4'>
          Combined Alert
        </h4>
        <div>
          <CombinedAlert
            show
            variant='success'
            headerText='Success'
            text='Your action was completed successfully!'
            onClose={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default CompositionConfiguration;
