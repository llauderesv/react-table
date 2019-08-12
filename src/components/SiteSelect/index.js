import React from 'react';
import Select from '../Select';
import DropdownSelection from '../DropdownSelection';

const SiteSelect = ({ showSelection, onClick }) => {
  return (
    <Select name="Sites" onClick={onClick} showSelection={showSelection}>
      <DropdownSelection onHide={onClick} />
    </Select>
  );
};

export default SiteSelect;
