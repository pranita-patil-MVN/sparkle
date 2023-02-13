
import NavBar from '../src/navigation/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../src/navigation/sidebar'
import Employee from '../src/Components/employee';
import Masters from '../src/Components/Master';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import '../src/css/pages.css'
import Dashboard from '../src/Components/Dashboard';
import Customer from '../src/Components/customer';
import Attendance from '../src/Components/attendance';

function App() {
  return (
    <div className="App">
    <Router>
    <SideBar>
      <NavBar/>
       <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/masters/employee' element={<Employee/>}/>
       <Route path='/masters' element={<Masters/>}/>
       <Route path='/masters/customer' element={<Customer/>}/>
       <Route path='/attendance' element={<Attendance/>}/>
       </Routes>
       </SideBar>
       </Router>
    
     
    
     
   
      
     </div>
  );
}

export default App;
