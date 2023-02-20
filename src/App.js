import NavBar from "../src/navigation/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../src/navigation/sidebar";
import Employee from "../src/Components/employee";
import Masters from "../src/Components/Master";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/css/pages.css";
import Dashboard from "../src/Components/Dashboard";
import Customer from "../src/Components/customer";
import Attendance from "../src/Components/attendance";
import TableCompo from "./CommonComponents/TableCompo";
import Shift from "./Components/Shift";
import ItemMaster from "./Components/ItemMaster";
import Checkbox from "./CommonComponents/Checkbox";
import SiteMaster from "./Components/SiteMaster";
import Vendor from "./Components/Vendor";
import CreateEmployee from "./Components/CreateEmployee";
function App() {
  return (
    <div className="App">
      <Router>
        <SideBar>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/masters/employee" element={<Employee />} />
            <Route
              path="/masters/createEmployee"
              element={<CreateEmployee />}
            />
            <Route path="/masters" element={<Masters />} />
            <Route path="/masters/customer" element={<Customer />} />
            <Route path="/masters/itemMaster" element={<ItemMaster />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/TableCompo" element={<TableCompo />} />
            <Route path="/masters/shift" element={<Shift />} />
            <Route path="/Checkbox" element={<Checkbox />} />
            <Route
              path="/masters/customer/SiteMaster"
              element={<SiteMaster />}
            />
            <Route path="/masters/vendor" element={<Vendor />} />
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
