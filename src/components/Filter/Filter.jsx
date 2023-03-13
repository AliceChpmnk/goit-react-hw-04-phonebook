import { StyledInput } from 'components/Form/Form.styled';
import React from 'react';
import PropTypes from 'prop-types';

function Filter({value, onChange}) {
  return (
      <div>
      <h3>Find contacts by name</h3>
      <StyledInput type="text" value={value} onChange={onChange} />
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;
