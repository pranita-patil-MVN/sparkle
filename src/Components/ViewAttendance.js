
import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Button,InputGroup,Form} from "react-bootstrap";
import profileImg from '../assets/Images/profileImg.png'
import editImg from '../assets/Images/editImg.png'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { CiSearch, CiImport, CiExport } from 'react-icons/ci'
import { BiPlus } from 'react-icons/bi'
import PDF from '../assets/Images/pdfImg.png'
import moment, { Moment } from 'moment/moment';
import '../css/pages.css'
import '../css/dataTable.css'
import '../css/commonCss.css'
import TableCompo from '../CommonComponents/TableCompo';
import { useNavigate } from 'react-router-dom';
import SingleDatePicker from '../CommonComponents/DatePicker';


const ViewAttendance = () => {
    const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [search, setSearch] = useState("");
  const [itemData, setItemData] = useState([]);
  // const [searchLoc, setSearchLoc] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [date, setDate] = useState('')
  const [selectedValue, setSelectedValue] = useState();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const [listData, setListData] = useState();
  const [dropdownValue, setSelectedDropdownValue] = useState([]);
  const [flag, setFlag] = useState(false);
  const [searchFlag, setSearchFlag] = useState(false);
  var selectedDropdownValue;
    
    const getAttendanceList =  async () => {
        try {
                const response = await axios.get('https://mocki.io/v1/7dd9801a-9605-4e6f-a1b6-df994df5fcd7');
                setItem(response.data);
                setFilteredItems(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAttendanceList();
      }, [])

    const columns = [
        {
            name:"Sr.No",
            selector:(row)=>row.Sr_No,
            sortable:true,
            id:'Sr_Nos'
        },
        {
            name:'Code',
            selector:(row)=>row.Code,
            sortable:true
        },{
            name:'Employee',
            selector:(row)=>row.Employee,
            sortable:true
        },
        {
            name:'Site',
            selector:(row)=>row.Site,
            sortable:true
        },{
            Name:'Date',
            selector:(row)=>row.Date,
            sortable:true
        },{
            Name:'Shift',
            selector:(row)=>row.Shift,
            sortable:true
        },{
            Name:'Status',
            selector:(row)=>row.Status,
            sortable:true
        },
        {
            Name:'OT',
            selector:(row)=>row.OT,
            sortable:true
        }
    ]

     // search function
  const onSearch = (data) => {
    if (checkedItem.length > 0) {

      const result = checkedItem.filter(item => {
        return item.Code.toLowerCase().match(data) ||
          item.Employee.toLowerCase().match(data) ||
          item.Site.toLowerCase().match(data) ||
          item.Date.toLowerCase().match(data) ||
          item.Shift.toLowerCase().match(data) ||
          item.Status.match(data);
      });
      setCheckedItem(result)
    }
    else {
      const result = item.filter(item => {
        return item.Code.toLowerCase().match(data) ||
          item.Site.toLowerCase().match(data) ||
          item.Employee.toLowerCase().match(data) ||
          item.Date.toLowerCase().match(data) ||
          item.Shift.toLowerCase().match(data) ||
          item.Status.match(data)
      });
      setFilteredItems(result)
    }
  }

  
  // Dropdown functionality for Employee
  const getDropdownValueEmployee = (e) => {
    setSelectedValue(e.target.value)
    if (checkedItem.length === 0) {
      selectedDropdownValue = filteredItems.filter((i) => {
        return i.Employee.match(e.target.value);
      });
      setSelectedDropdownValue(selectedDropdownValue)
      setCheckedItem(selectedDropdownValue);
      setFlag(true);
    } else if (searchFlag === false) {
      selectedDropdownValue = filteredItems.filter((i) => {
        return i.Employee.match(e.target.value);
      });
      setSelectedDropdownValue(selectedDropdownValue)
      setCheckedItem(selectedDropdownValue);
    }
    else {
      selectedDropdownValue = checkedItem.filter((i) => {
        return i.Employee.match(e.target.value);
      });
      setSelectedDropdownValue(selectedDropdownValue)
      setCheckedItem(selectedDropdownValue);
      setFlag(true);
    }
    // }
  }

  const datePicker=(e)=>{
    alert(date)
    const a = moment(date).format('DD-MM-YYYY')
    const result = filteredItems.filter(i=>{
      return i.Date.match(a);
    })
    setFilteredItems(result)

  }
  // Dropdown functionality for Site
  const getDropdownValueSite = (e) => {
    setSelectedValue(e.target.value)
    if (checkedItem.length === 0) {
      selectedDropdownValue = filteredItems.filter((i) => {
        return i.Site.match(e.target.value);
      });
      setSelectedDropdownValue(selectedDropdownValue)
      setCheckedItem(selectedDropdownValue);
      setFlag(true);
    } else if (searchFlag === false) {
      selectedDropdownValue = filteredItems.filter((i) => {
        return i.Site.match(e.target.value);
      });
      setSelectedDropdownValue(selectedDropdownValue)
      setCheckedItem(selectedDropdownValue);
    }
    else {
      selectedDropdownValue = checkedItem.filter((i) => {
        return i.Site.match(e.target.value);
      });
      setSelectedDropdownValue(selectedDropdownValue)
      setCheckedItem(selectedDropdownValue);
      setFlag(true);
    }
    // }
  }
  return (
    <div>
          <div className='titleDiv'>
        <img src={profileImg} alt='owner'></img>
        <h5 className='title'>View Attendance</h5>
      </div>
      <Row className='rowTable'>
        <Col className='filter' md={2}>
        <h5 className='colHeader'> Filters </h5>
        <InputGroup className='searchBar'>
            <InputGroup.Text id="searchIcon">
              <CiSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder='search'
              aria-label="Username"
              aria-describedby="basic-addon1"
              // value={search}
              onChange={(e) => onSearch(e.target.value)}
            />
          </InputGroup>
        
          <h5 className="checkHeaderCity">Employee</h5>
          <div className="checkboxDiv">
            <div className="checkfilter">
              <Form.Select className="filter-dropdown"
              onChange={(e)=>{getDropdownValueEmployee(e)}}
              >
                 <>
                 <option defaultChecked>--All--</option>
                 {
                    filteredItems.map((i)=>{
                        return(
                            <option>{i.Employee}</option>
                        )
                    })
}
                 </>
                
              </Form.Select>
             
            </div>
          </div>



          <h5 className="checkHeaderCity">Site</h5>
          <div className="checkboxDiv">
            <div className="checkfilter">
              <Form.Select className="filter-dropdown"
              onChange={(e)=>{getDropdownValueSite(e)}}
              >
                 <>
                 <option defaultChecked>--All--</option>
                 {
                    filteredItems.map((item,index)=>{
                        let site = (new Set(item.Site))
                        
                        return(
                            <option>{item.Site}</option>
                        )
                    })
}
                 </>
                
              </Form.Select>
            </div>
          </div>

          <div className='checkboxDiv'>
         <input 
         type='date'
         className='dateBox'
         value={date}
         onChange={(e)=>datePicker(e)}
         />
          </div> 
          

        </Col>
        <Col md ={10} className='colTable'>
            <div className='divTable'>
                <TableCompo data= {[
                columns,
                checkedItem.length>0 ?
                checkedItem:
                filteredItems]}
                />

                {/* <DataTable 
                data={checkedItem.length>0 ?
                checkedItem:
            filteredItems}
                    columns={columns}
                /> */}
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewAttendance