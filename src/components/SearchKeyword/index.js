import React from 'react';
import './index.scss';

const SearchKeyword = ({ ...restProps }) => {
  return <input type="text" {...restProps} />;
};

export default SearchKeyword;
