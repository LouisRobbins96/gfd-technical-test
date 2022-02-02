import './App.css';
import data from './data.json';
import React, { useState, Fragment } from 'react';
import ReadOnlyRow from './components/readonlyrow';
import EditRow from './components/editrow';

const App = () => {
  const [employees, setEmployees] = useState(data);
  const [editTableData, setEditTableData] = useState({
    forename: "",
    surname: "",
    department: "",
    employeeStatus: "",
  });

  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleEditTableChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newTableData = { ...editTableData };
    newTableData[fieldName] = fieldValue;

    setEditTableData(newTableData);
  };

  const handleEditTableSubmit = (event) => {
    event.preventDefault();

    const editedEmployee = {
      id: editEmployeeId,
      forename: editTableData.forename,
      surname: editTableData.surname,
      department: editTableData.department,
      employeeStatus: editTableData.employeeStatus,
    };

    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.id === editEmployeeId);

    newEmployees[index] = editedEmployee;

    setEmployees(newEmployees);
    setEditEmployeeId(null);
  };

  const handleEditClick = (e, employee) => {
    e.preventDefault();
    setEditEmployeeId(employee.id);

    const tableValues = {
      forename: employee.forename,
      surname: employee.surname,
      department: employee.department,
      employeeStatus: employee.employeeStatus,
    };

    setEditTableData(tableValues);
  };

  return (
    <div className="App">
      <form onSubmit={handleEditTableSubmit}>
        <table>
          <thead>
            <tr>
              <th>Forename</th>
              <th>Surname</th>
              <th>Department</th>
              <th>Employee Status</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <Fragment>
                {editEmployeeId === employee.id ? <EditRow editTableData={editTableData} handleEditTableChange={handleEditTableChange}/> : <ReadOnlyRow employee={employee} handleEditClick={handleEditClick}/>}
              </Fragment>

            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
