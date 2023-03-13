import { StyledInput } from 'components/Form/Form.styled';
import React from 'react'

function Filter({value, onChange}) {
  return (
      <div>
      <h3>Find contacts by name</h3>
      <StyledInput type="text" value={value} onChange={onChange} />
    </div>
  )
}

export default Filter;
