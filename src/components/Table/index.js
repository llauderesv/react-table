import React from 'react';
import { useTable, useSortBy } from 'react-table';
import './index.scss';

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);
  const onChange = e => {
    setValue(e.target.value);
  };
  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    // updateMyData(index, id, value);
  };
  return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

// Set our editable cell renderer as the default Cell renderer
// const defaultColumn = {
//   Cell: EditableCell,
// };

export default function Table({ columns, data }) {
  // Instance Properties returned from the useTable hooks api
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      // defaultColumn,
    },
    useSortBy
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render(Header)}
                <span>
                  {column.sorted && (column.sortedDesc ? ' 🔽' : ' 🔼')}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.length <= 0 ? (
          <Row colspan="2">No data available</Row>
        ) : (
          rows.map(
            (row, i) =>
              prepareRow(row) || (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              )
          )
        )}
      </tbody>
    </table>
  );
}

function Row({ colspan, children, ...restProps }) {
  return (
    <tr>
      <td colSpan={colspan}>{children}</td>
    </tr>
  );
}

function Header({ Header }) {
  // console.log(props);
  return <p>{Header}</p>;
}
