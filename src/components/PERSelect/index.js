import React from 'react';
import Select from '../Select';
import DropdownSelection from '../DropdownSelection';

const data = [
  {
    id: 1,
    text: 'Drug Test',
  },
  {
    id: 2,
    text: 'NBI Clearance',
  },
  {
    id: 3,
    text: 'Medical Exam',
  },
];

const PERSelect = ({ showSelection, onClick }) => {
  return (
    <Select
      name={'PER Requirements'}
      showSelection={showSelection}
      onClick={onClick}
    >
      <DropdownSelection onHide={onClick} />
    </Select>
  );
};

export default PERSelect;
