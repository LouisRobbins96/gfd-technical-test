import './App.css';
import data from './data.json';
import React, { useState } from 'react';

function App() {
  const [employeeInfo, setemployeeInfo] = useState(data)
  return (
    <div className="App">
        <table>
          <thead>
            <tr>
              <th>Forename</th>
              <th>Surname</th>
              <th>Department</th>
              <th>Employee Status</th>
            </tr>
          </thead>
          <tbody>
            {employeeInfo.map((v) => 
            <tr>
              <td>{v.forename}</td>
              <td>{v.surname}</td>
              <td>{v.department}</td>
              <td>{v.employeeStatus}</td>
            </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}

export default App;
