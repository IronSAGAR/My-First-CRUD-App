import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './layout/navbar';
import Home from './pages/home';
import AddUser from './users/addUser';
import EditUser from './users/editUser';
import ViewUser from './users/viewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>

      </Router>

      
      
    </div>
  );
}

export default App;
