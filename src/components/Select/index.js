import React, { useRef } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useOutsideContainer from '../../Hooks/useOutsideContainer';

import './index.scss';

const Select = ({ name, children, showSelection, onClick }) => {
  const wrapperRef = useRef(null);
  useOutsideContainer(wrapperRef, showSelection ? onClick : null);

  return (
    <div ref={wrapperRef} className="select-wrapper">
      <div
        className={`select ${showSelection ? 'active' : ''}`}
        onClick={onClick}
      >
        <p>{name}</p>
        {showSelection ? (
          <FiChevronUp size="20" strokeWidth="2" />
        ) : (
          <FiChevronDown size="20" strokeWidth="2" />
        )}
      </div>
      {showSelection && children}
    </div>
  );
};

export default Select;
