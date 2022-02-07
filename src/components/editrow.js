import React from "react";

const EditRow = ({ editTableData, handleEditTableChange }) => {
    return (
        <tr>
            <td>
                <input 
                    type='text' 
                    placeholder="Enter a Forename..."
                    name="forename"
                    value={editTableData.forename}
                    onChange={handleEditTableChange}
                ></input>
            </td>
            <td>
                <input 
                    type='text' 
                    placeholder="Enter a Surname..."
                    name="surname"
                    value={editTableData.surname}
                    onChange={handleEditTableChange}
                ></input>
            </td>
            <td>
                <select 
                    type='text' 
                    placeholder="Enter a Department..."
                    name="department"
                    value={editTableData.department}
                    onChange={handleEditTableChange}
                >
                    <option>Accounting</option>
                    <option>Sales</option>
                    <option>HR</option>
                    <option>Manager</option>
                </select>
            </td>
            <td>
                <select 
                    placeholder="Enter Employee Status..."
                    name="employeeStatus"
                    value={editTableData.employeeStatus}
                    onChange={handleEditTableChange}
                >
                    <option>Current</option>
                    <option>Past</option>
                </select>
            </td>
            <td>
                <button class="save" type="submit">Save</button>
            </td>
      </tr>
    );
};

export default EditRow;