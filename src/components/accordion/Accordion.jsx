import clsx from 'clsx';
import { useState } from 'react';
import propTypes from 'prop-types'

const Accordion = (props) => {
  const { items } = props;
  const [openIndexes, setOpenIndexes] = useState({});

  const onAccordionItemHeaderClick = (index) => {
    setOpenIndexes((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <div data-testid='accordion'>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={clsx('border', index < items.length - 1 && 'border-b-0')}
            data-testid='accordion-item'
          >
            <button
              id={`acc-header-${index}`}
              className='px-4 py-3 block w-full cursor-pointer bg-gray-100 hover:bg-gray-200'
              onClick={() => onAccordionItemHeaderClick(index)}
              aria-controls={`acc-item-${index}`}
              aria-expanded={!!openIndexes[index]}
              data-testid='accordion-item-header'
            >
              {item.heading}
            </button>
            <div
              id={`acc-item-${index}`}
              className={clsx(
                'px-4 py-3 border-t',
                openIndexes[index] ? 'block' : 'hidden'
              )}
              aria-labelledby={`acc-header-${index}`}
              data-testid='accordion-item-content'
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({
    heading: propTypes.string.isRequired,
    content: propTypes.string.isRequired
  })).isRequired
}

export default Accordion;
