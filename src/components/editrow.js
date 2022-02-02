import React from "react";

const EditRow = ({ editTableData, handleEditTableChange}) => {
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
                <input 
                    type='text' 
                    placeholder="Enter a Department..."
                    name="department"
                    value={editTableData.department}
                    onChange={handleEditTableChange}
                ></input>
            </td>
            <td>
                <input 
                    type='text' 
                    placeholder="Enter Employee Status..."
                    name="employeeStatus"
                    value={editTableData.employeeStatus}
                    onChange={handleEditTableChange}
                ></input>
            </td>
            <td>
                <button class="save" type="submit">Save</button>
            </td>
      </tr>
    );
};

export default EditRow;