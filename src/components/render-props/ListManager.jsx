import React from 'react';
import propTypes from 'prop-types';

const ListManager = (props) => {
  const { items, keyExtractor, renderItem } = props;
  return (
    <div>
      {items.map((item, index) => {
        return <div key={keyExtractor(item)}>{renderItem(item, index)}</div>;
      })}
    </div>
  );
};

ListManager.propTypes = {
  items: propTypes.array.isRequired,
  keyExtractor: propTypes.func.isRequired,
  renderItem: propTypes.func.isRequired,
};

export default ListManager;
