import './App.css';
import React, { useMemo } from 'react';
import { useMockData } from './Hooks';
import Table from './components/Table';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [data, error] = useMockData();

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
    ],
    []
  );

  return (
    <div className="App">
      <h1>React Table Example</h1>
      {!error ? (
        <Table columns={columns} data={data} />
      ) : (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </div>
  );
}

export default App;
