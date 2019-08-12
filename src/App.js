import React, { useMemo } from 'react';
import { useMockData } from './Hooks';
import Table from './components/Table';
import Filter from './components/Filter';
import ErrorMessage from './components/ErrorMessage';
import './App.scss';

const data = [
  {
    id: 1,
    value: 'Option 1',
  },
  {
    id: 2,
    value: 'Option 2',
  },
];

// We can use this component to enable sorting and
// changing the icon in header whether if it's up or down.
function LastNameCell({ column, value }) {
  console.log(column);

  return (
    <select name="select-last-name" value={value}>
      {data.map(item => (
        <option key={item.id} value={item.id}>
          {item.value}
        </option>
      ))}
    </select>
  );
}

function App() {
  const [data, error] = useMockData();

  const columns = useMemo(
    () => [
      {
        accessor: 'employee_number',
        Header: 'Employee Number',
      },
      {
        accessor: 'name',
        Header: 'Name',
        // Cell: LastNameCell,
      },
      {
        accessor: 'contact_number',
        Header: 'Contact Number',
      },
      // {
      //   accessor: 'pre_emp_date',
      //   Header: 'Pre employment Date',
      // },
      {
        accessor: 'jo_date',
        Header: 'JO Date',
      },
      {
        accessor: 'start_date',
        Header: 'Start Date',
      },
      {
        accessor: 'with_work_exp',
        Header: 'With Work Exp',
      },
      {
        accessor: 'process_type',
        Header: 'PER Process Type',
      },
      {
        accessor: 'application',
        Header: 'Application',
      },
      {
        accessor: 'status',
        Header: 'Status',
      },
      {
        accessor: 'compliance_poc',
        Header: 'Compliance POC',
      },
      {
        accessor: 'account_lob',
        Header: 'Account Lob',
      },
    ],
    []
  );

  const filterData = data.slice(0, 20);
  const memoizedData = useMemo(() => filterData, [filterData]);

  return (
    <div className="App">
      <h1>Compliance Tracker</h1>
      <div className="react-table">
        <Filter />
        {!error ? (
          <Table columns={columns} data={memoizedData} />
        ) : (
          <ErrorMessage>{error}</ErrorMessage>
        )}
      </div>
    </div>
  );
}

export default App;
