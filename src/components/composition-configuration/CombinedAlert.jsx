import React from 'react';
import {
  Alert,
  AlertBody,
  AlertCloseButton,
  AlertHeading,
  AlertIcon,
} from './composition/Alert';
import { alertPropTypes } from './configuration/Alert';

const CombinedAlert = (props) => {
  const {
    children,
    text,
    headerText,
    show,
    variant,
    onClose,
    showIcon = true,
  } = props;

  return show ? (
    <Alert show={show} variant={variant}>
      {/* Side icon */}
      {showIcon ? <AlertIcon /> : null}
      {/* Close alert button */}
      {onClose ? <AlertCloseButton onClose={onClose} /> : null}
      <div className='py-4'>
        {/* CombinedAlert header */}
        {headerText ? <AlertHeading>{headerText}</AlertHeading> : null}
        {/* CombinedAlert body */}
        <AlertBody>{text ? text : children}</AlertBody>
      </div>
    </Alert>
  ) : null;
};

CombinedAlert.propTypes = alertPropTypes;

export default CombinedAlert;
