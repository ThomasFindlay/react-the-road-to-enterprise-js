import clsx from 'clsx';
import propTypes from 'prop-types';
import React from 'react';

const btnClasses = 'px-4 py-3 transition duration-300';

const VARIANTS = {
  primary: 'bg-blue-900 text-blue-100 hover:bg-blue-700',
  link: 'text-indigo-700 hover:text-indigo-800 hover:border-b border-indigo-800 !px-0 !pb-1',
};

const Button = (props) => {
  const { children, as, className, variant, ...buttonProps } = props;
  const Component = as || 'button';
  return (
    <Component
      className={clsx(className, btnClasses, variant && VARIANTS[variant])}
      {...buttonProps}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  as: propTypes.string,
  children: propTypes.node.isRequired,
  className: propTypes.string,
  variant: propTypes.oneOf(['primary', 'link']),
};

export default Button;
