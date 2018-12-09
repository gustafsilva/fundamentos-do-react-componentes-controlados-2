import React from 'react';
import PropTypes from 'prop-types';

const NewItem = (props) => {
  return (
    <form onSubmit={props.addItem}>
      <input
        type="text"
        placeholder="Enter New Item"
        value={props.value}
        onChange={props.handleChange}
      />
      <button disabled={props.inputIsEmpty()}>Add</button>
    </form>
  );
}

NewItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputIsEmpty: PropTypes.func.isRequired
}

export default NewItem;
