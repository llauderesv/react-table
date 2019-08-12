import React, { useReducer, useCallback } from 'react';
import { FiFilter } from 'react-icons/fi';
import SearchKeyword from '../SearchKeyword';
import PERSelect from '../PERSelect';
import SiteSelect from '../SiteSelect';
import ClarificationStatus from '../ClarificationStatus';
import './index.scss';

const initialData = {
  activeFilterSelection: {
    show: false,
    type: null,
  },
  searchKeyword: '',
  perRequirements: [],
  sites: [],
};

const PER_SELECT = 0;
const SITE_SELECT = 1;
const CLARIFICATION_STATUS = 2;

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SHOW_SELECTION':
      // Used to determine if we're going to hide the selection when clicking twice
      const isHide =
        action.payload.type === state.activeFilterSelection.type &&
        action.payload.show;

      return {
        ...state,
        activeFilterSelection: {
          type: action.payload.type,
          show: isHide
            ? !state.activeFilterSelection.show
            : action.payload.show,
        },
      };
    // case 'HIDE_SELECTION':
    //   return {
    //     ...state,
    //     activeFilterSelect: {
    //       type: action.payload.type,
    //       show: false,
    //     },
    //   };
    default:
      return state;
  }
};

const Filter = () => {
  const [filterState, dispatch] = useReducer(reducer, initialData);

  const { activeFilterSelection } = filterState;

  const isShowSelectionByType = useCallback(
    type => {
      return activeFilterSelection.type === type && activeFilterSelection.show;
    },
    [activeFilterSelection]
  );

  console.log(activeFilterSelection);

  return (
    <div className="filter">
      <FiFilter size="25" color="#000" strokeWidth="1" />
      <SearchKeyword
        name="search"
        className="search-keyword"
        placeholder="Search by Keyword"
      />
      <PERSelect
        showSelection={isShowSelectionByType(PER_SELECT)}
        onClick={() =>
          dispatch({
            type: 'SHOW_SELECTION',
            payload: {
              type: PER_SELECT,
              show: true,
            },
          })
        }
      />
      <SiteSelect
        showSelection={isShowSelectionByType(SITE_SELECT)}
        onClick={() =>
          dispatch({
            type: 'SHOW_SELECTION',
            payload: {
              type: SITE_SELECT,
              show: true,
            },
          })
        }
      />
      <ClarificationStatus
        showSelection={isShowSelectionByType(CLARIFICATION_STATUS)}
        onClick={() =>
          dispatch({
            type: 'SHOW_SELECTION',
            payload: {
              type: CLARIFICATION_STATUS,
              show: true,
            },
          })
        }
      />
    </div>
  );
};

export default Filter;
