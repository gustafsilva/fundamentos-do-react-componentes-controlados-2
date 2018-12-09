import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const ItemList = (props) => {
  const items = props.items.map((item, index) => <Item key={index} item={item} />)

  return (
    <ol className="item-list">
      {items}
    </ol>
  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemList;
