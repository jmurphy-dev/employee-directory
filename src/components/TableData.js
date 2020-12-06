
import React, { useState } from "react";
import employees from "../employees.json";
import "../styles/DataTable.css";



function TableData() {


    const [data, setData] = useState("");
    const [sortData, setSortData] = useState(false);

    function search(employees) {
        return employees.filter(
            (employee) =>
                employee.name.toLowerCase().indexOf(data.toLowerCase()) > - 1 ||
                employee.occupation.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                employee.email.toLowerCase().indexOf(data.toLowerCase()) > -1
        );
    }

    const dataTable = search(employees);


    function handleSort(a, b) {
        if (!sortData) {
            let compare = 0;
            if (a.name > b.name) {
                compare = 1;
            } else if (a.name < b.name) {
                compare = -1
            }
            setSortData(true);
            return (
                compare
            );
        } else {
            let compare = 0;
            if (a.name > b.name) {
                compare = -1;
            } else if (a.name < b.nam) {
                compare = 1
            }
            setSortData(false);
            return (
                compare
            );
        }
    }

    return (
        <div>
            <div>
                <input type="text" value={data} onChange={(event) => setData(event.target.value)} />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> <button onClick={() => employees.sort(handleSort)}>Name</button></th>
                        <th>Occupation</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable.map(employee => (
                        <tr key={employee.id}>
                            <th scope="row">{employee.id}</th>
                            <td>{employee.name}</td>
                            <td>{employee.occupation}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}





export default TableData;