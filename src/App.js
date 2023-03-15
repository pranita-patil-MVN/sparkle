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
import CreateSite from "./Components/CreateSite";
import CreateCustomer from "./Components/CreateCustomer";
import CreateItem from "./Components/CreateItem";
import Capital from './Components/capital'
import CreateCapitalAssets from "./Components/CreateCapitalAssets";
import CreateSpare from "./Components/CreateSpare";
import CustomerUpdate from "./Components/CustomerUpdate";
import CreateVendor from './Components/CreateVendor'
import CapitalAssetsUpdate from "./Components/CapitalAssetsUpdate";
import SpareUpdate from "./Components/SpareUpdate";
import AssignEmployee from "./Components/assignEmployee";
import ViewAttendance from "./Components/ViewAttendance";
import ShoeDeduction from "./Components/ShoeDeduction";
import CapitalAssetMaster from "./Components/CapitalAssetMaster";
function App() {
  return (
    <div className="App">
      <Router>
        <SideBar>
          <NavBar />
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/attendance/employee" element={<Employee />} />
            <Route
              path="/masters/createEmployee"
              element={<CreateEmployee />}
            />
            <Route path="/masters" element={<Masters />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/operation/customer" element={<Customer />} />
            <Route path="/masters/customer/createCustomer" element={<CreateCustomer />} />
            <Route path="/masters/itemMaster" element={<ItemMaster />} />
            <Route path="/masters/itemMaster/createItem" element={ <CreateItem/>} />
            <Route path="/masters/vendor/createVendor" element={ <CreateVendor/>} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/TableCompo" element={<TableCompo />} />
            <Route path="/attendance/shift" element={<Shift />} />
            <Route path="/Checkbox" element={<Checkbox />} />
          <Route
              path="/masters/customer/SiteMaster"
              element={<SiteMaster />}  
            />
            <Route path="/masters/customer/SiteMaster/createSite" element={<CreateSite />} />
            <Route path="/inventory/vendor" element={<Vendor />} />
            <Route path = '/masters/customer/CreateCustomer' element= {<CreateCustomer/>} />
            <Route path = '/masters/customer/CreateSite' element= {<CreateSite/>} />
            <Route path="/operation/capitalAssets" element ={<CapitalAssetMaster/>} />
            <Route path="/masters/capitalAssets/CreateCapitalAssets" element = {<CreateCapitalAssets/>}/>
            <Route path ='/createSpareAssets' element= {<CreateSpare/>} />
            <Route path = '/spareUpdate' element={<SpareUpdate/>} />
            <Route path ='/masters/customer/update' element ={<CustomerUpdate/>} />
            <Route path ='/inventory/item' element={<ItemMaster/>}/>
            <Route path ='attendance/shoededuction' element ={<ShoeDeduction/>}/>
          <Route path ='/masters/capitalAssets/update' element ={<CapitalAssetsUpdate/>}/>
          <Route path ='/assignEmployee' element ={<AssignEmployee/>}/>
          <Route path="/attendance/ViewAttendance" element={<ViewAttendance/>} />
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
