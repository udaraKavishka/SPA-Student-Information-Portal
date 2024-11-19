import { useState } from 'react';
import './App.css';
import StudentTable from './components/StudentTable';
import {students} from './data/StudentsDb'

function App() {
  const [fontSize, setFontSize] = useState(12);
  return (
    <div className="App">
      <h1>Student Information Portal</h1>
      <hr/>
      <div align="left">
        Font Size:
        <button>S</button>
        <button>M</button>
        <button>L</button>
      </div>
      <hr/>
      <table width="100%">
        <tbody>
          <tr>
            <td>
              <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
