import React from "react";

const ReadOnlyRow = ({ employee, handleEditClick }) => {
    return (
        <tr>
            <td>{employee.forename}</td>
            <td>{employee.surname}</td>
            <td>{employee.department}</td>
            <td>{employee.employeeStatus}</td>
            <td>
                <button onClick={(e)=> handleEditClick(e, employee)}>Edit</button>
            </td>
      </tr>
    );
};

export default ReadOnlyRow;