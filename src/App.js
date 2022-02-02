import './App.css';

function App() {
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
            <tr>
              <td>Ian</td>
              <td>Blacksmith</td>
              <td>Sales</td>
              <td>Past</td>
            </tr>
            <tr>
              <td>John</td>
              <td>Smith</td>
              <td>Accounting</td>
              <td>Current</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>Jones</td>
              <td>Accounting</td>
              <td>Past</td>
            </tr>
            <tr>
              <td>Sarah</td>
              <td>Turner</td>
              <td>Sales</td>
              <td>Current</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default App;
