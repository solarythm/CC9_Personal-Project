import React, { useMemo } from 'react';
import './Dashboard.css';
import { useTable } from 'react-table';
//import axios from 'axios';




export default function Dashboard() {

  
    const data = useMemo(
        () => [
            {
            "name": "Pochahontas",
            "available": 27,
            "occupied": 25,
            "lateCheckout": 1,
            "reserved": 2,
            "maintenance": 5,
            "cleaning": 6        
        },
            {
            "name": "Pajamas",
            "available": 57,
            "occupied": 5,
            "lateCheckout": 41,
            "reserved": 20,
            "maintenance": 15,
            "cleaning": 2        
        },
            {
            "name": "Pimaia",
            "available": 11,
            "occupied": 2,
            "lateCheckout": 15,
            "reserved": 62,
            "maintenance": 15,
            "cleaning": 60        
        },    
          
        ],
        []
    );




    const columns = useMemo(
        () => [
            {
            // first group Apartment Name
            Header: "Building",
            // First group columns
            columns: [              
              {
                Header: "Name",
                accessor: "name"
                },
               
            ]            },
          {
            // Second group - Details
            Header: "Status",
            // Second group columns
            columns: [
              {
                Header: "Available",
                accessor: "available"
              },
              {
                Header: "Occupied",
                accessor: "occupied"
              },
              {
                Header: 'Late Checkout',
                accessor: "lateCheckout"
               
              },
              {
                Header: "Reserved",
                accessor: "reserved"
              },
              {
                Header: "Wait for Maintenance",
                accessor: "maintenance"
              },
              {
                Header: "Wait for Cleaning",
                accessor: "cleaning"
              },
            ]
          }
        ],
        []
    );







    // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
      columns,
      data,
    })
    /* 
        Render the UI for your table
        - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
    */
    // Genres array



    return(
        <div className= "Container">
            {/* <h1> Dashboard </h1> */}
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()} > {cell.render("Cell")}</td>;
                            })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        
        </div>  
    );
}

