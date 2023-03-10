import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Addemployee from './pages/Addemployee';
import Editemployee from './pages/Editemployee';
import Viewemployee from './pages/Viewemployee';
import Errorpage from './pages/Errorpage';

function App() {
  return (
    <div className="App">
      {/* routes for the pages / components*/}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/add-employee" element={<Addemployee />} />
        <Route path="/edit-employee/:id" element={<Editemployee />} />
        <Route path="/view-employee/:id" element={<Viewemployee />} />
        <Route path="*" element={<Errorpage />} /> {/* error page direction */}
      </Routes>
    </div>
  );
}

export default App;
