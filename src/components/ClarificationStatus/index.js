import React from 'react';
import Select from '../Select';
import DropdownSelection from '../DropdownSelection';

const ClarificationStatus = ({ showSelection, onClick }) => {
  return (
    <Select
      name="Clarification Status"
      onClick={onClick}
      showSelection={showSelection}
    >
      <DropdownSelection onHide={onClick} showSelection={showSelection} />
    </Select>
  );
};

export default ClarificationStatus;
