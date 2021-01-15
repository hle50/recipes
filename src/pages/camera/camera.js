import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { useTable, usePagination, useFilters } from 'react-table';

import CameraModelForm from '../../components/camera/camera-model-form';

const SelectColumnFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) =>{
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
  
    // Render a multi-select box
    return (
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }

// Define a default UI for filtering
const DefaultColumnFilter = ({
    column: { filterValue, preFilteredRows, setFilter },
  }) => {
    const count = preFilteredRows.length
  
    return (
      <input
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    )
  }
const Table = ({ columns, data }) => {
    const defaultColumn = React.useMemo(
        () => ({
          // Let's set up our default Filter UI
          Filter: DefaultColumnFilter,
        }),
        []
      )
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page, // Instead of using 'rows', we'll use page,
      // which has only the rows for the active page
  
      // The rest of these things are super handy, too ;)
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        defaultColumn,
        initialState: { pageIndex: 0 },
      },
      useFilters,
      usePagination,
    )
  console.log(headerGroups);
    // Render the UI for your table
    return (
      <>
        <table className="w-100 table table-border"  {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, idx) => (
                
              <tr {...headerGroup.getHeaderGroupProps()}>
                { idx > 0 && headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
        <div className="pagination">
          <button className="btn btn-link" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button  onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button  onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button  onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </>
    )
  }
const Camera = () =>{
    const data = [{
        "id": 1,
        "name": "Ferrari",
        "sensory": "Pink"
      }, {
        "id": 2,
        "name": "Chevrolet",
        "sensory": "Crimson"
      }, {
        "id": 3,
        "name": "BMW",
        "sensory": "Khaki"
      }, {
        "id": 4,
        "name": "Nissan",
        "sensory": "Orange"
      }, {
        "id": 5,
        "name": "BMW",
        "sensory": "Blue"
      }, {
        "id": 6,
        "name": "Chevrolet",
        "sensory": "Pink"
      }, {
        "id": 7,
        "name": "Ford",
        "sensory": "Green"
      }, {
        "id": 8,
        "name": "Suzuki",
        "sensory": "Orange"
      }, {
        "id": 9,
        "name": "Foose",
        "sensory": "Fuscia"
      }, {
        "id": 10,
        "name": "Kia",
        "sensory": "Khaki"
      }, {
        "id": 11,
        "name": "Toyota",
        "sensory": "Green"
      }, {
        "id": 12,
        "name": "Mercury",
        "sensory": "Mauv"
      }, {
        "id": 13,
        "name": "Aston Martin",
        "sensory": "Orange"
      }, {
        "id": 14,
        "name": "GMC",
        "sensory": "Blue"
      }, {
        "id": 15,
        "name": "GMC",
        "sensory": "Fuscia"
      }, {
        "id": 16,
        "name": "Mercedes-Benz",
        "sensory": "Pink"
      }, {
        "id": 17,
        "name": "Lexus",
        "sensory": "Puce"
      }, {
        "id": 18,
        "name": "Buick",
        "sensory": "Mauv"
      }, {
        "id": 19,
        "name": "Honda",
        "sensory": "Goldenrod"
      }, {
        "id": 20,
        "name": "Aston Martin",
        "sensory": "Violet"
      }];

    const columns = React.useMemo(
        () => [
          {
            Header: 'Name',
            columns: [
              {
                Header: 'Name',
                accessor: 'name',
              },
              {
                Header: 'Color',
                accessor: 'sensory',
                Filter: SelectColumnFilter,
                filter: 'includes',
              },
            ],
          },      
        ],
        []
      );

    return (
        <>
         <h3>Camera</h3>
        <Row>
        <Col sm={4}>
            <CameraModelForm />
        </Col>
        <Col sm={8}>
            <Table columns={columns} data={data} />
        </Col>
        </Row>
        </>
       
    );
}

export default Camera;