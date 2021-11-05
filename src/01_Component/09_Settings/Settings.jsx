import React, { useMemo} from 'react';
import './Settings.css';
import { useTable } from 'react-table';

export default function Settings() {
    
    const data = useMemo(
        () => [  
            {
            "username": "admin",
            "password": "1234",
            "firstName": "Mike",
            "lastName": "Daodin",
            "staffID": "15",
            "age": "35",
            "role": "CEO",
            "dateJoined": "12/01/2001",
            "status": "Active",   
            "jobDescription": "Oversee all operations",
          },    
            {
              "username": "mint",
              "password": "mintmint51",
              "firstName": "Mayu",
              "lastName": "Positron",
              "staffID": "7",
              "age": "52",
              "role": "Accountant",
              "dateJoined": "12/01/1985",
              "status": "Active",   
              "jobDescription": "Move money arounds",
          },
            {
              "username": "sombat2456",
              "password": "soysot79",
              "firstName": "Samuel",
              "lastName": "Alhambra",
              "staffID": "19",
              "age": "17",
              "role": "Technician",
              "dateJoined": "12/01/2020",
              "status": "Active",   
              "jobDescription": "Take care of all repairings/maintenances",
          },        
        ],
        []
    );

    const columns = useMemo(
        () => [
            {
            // first group Apartment Name
            Header: "Staff",
            // First group columns
            columns: [              
              {
                Header: "First Name",
                accessor: "firstName"
                },
              {
                Header: "Last Name",
                accessor: "lastName"
                },
              {
                Header: "Age",
                accessor: "age"
                },
              {
                Header: "Staff ID",
                accessor: "staffID"
                },           
            ]            },
          {
            // Second group - Details
            Header: "Status",
            // Second group columns
            columns: [
              {
                Header: "Role",
                accessor: "role"
              },
              {
                Header: "Work from",
                accessor: "dateJoined"
              },
              {
                Header: "Status",
                accessor: "status"
              },
              {
                Header: "Description",
                accessor: "jobDescription"
              },
            ]
          }
        ],
        []
    );
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
    return ( 
        <>
          <div className= "SettingsContainer">
            <div className= "ShowTable">
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
          </div>   
        </>
    );
}