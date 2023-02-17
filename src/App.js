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
import CreateVendor from "./Components/CreateVendor";
import Checkbox from "./CommonComponents/Checkbox";
import SiteMaster from "./Components/SiteMaster";
import Vendor from "./Components/Vendor";
import CreateEmployee from "./Components/CreateEmployee";
import CreateSite from "./Components/CreateSite";
import CreateCustomer from "./Components/CreateCustomer";
import CreateItem from "./Components/CreateItem";
function App() {
  return (
    <div className="App">
      <Router>
        <SideBar>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/masters/employee" element={<Employee />} /> */}
            <Route
              path="/masters/employee"
              element={<CreateEmployee />}
            />
            <Route path="/masters" element={<Masters />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/masters/customer" element={<Customer />} />
            <Route path="/masters/customer/createCustomer" element={<CreateCustomer />} />
            <Route path="/masters/itemMaster" element={<ItemMaster />} />
            <Route path="/masters/itemMaster/createItem" element={ <CreateItem/>} />
            <Route path="/masters/vendor/createVendor" element={ <CreateVendor/>} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/TableCompo" element={<TableCompo />} />
            <Route path="/masters/shift" element={<Shift />} />
            <Route path="/Checkbox" element={<Checkbox />} />
          <Route
              path="/masters/customer/SiteMaster"
              element={<SiteMaster />}  
            />
            <Route path="/masters/customer/SiteMaster/createSite" element={<CreateSite />} />
            <Route path="/masters/vendor" element={<Vendor />} />
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
