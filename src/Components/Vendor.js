import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Button,InputGroup ,Form} from "react-bootstrap";
import profileImg from '../assets/Images/profileImg.png'
import editImg from '../assets/Images/editImg.png'
import { CiSearch, CiImport, CiExport } from 'react-icons/ci'
import { BiPlus } from 'react-icons/bi'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import pdfImg from '../assets/Images/pdfImg.png'
import TableCompo from "../CommonComponents/TableCompo"
import Select from 'react-select';
import VendorJson from "../data/vendorData.json"
import Checkbox from '../CommonComponents/Checkbox';
import '../css/pages.css'
import '../css/dataTable.css'
import '../css/commonCss.css'
const Vendor = () => {
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([])
  const [filteredList,setFilteredList] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);
  const [flag,setFlag] = useState()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu =()=>setIsMenuOpen(!isMenuOpen)
  const options = [
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
  ];

  
  const getEmployeeList = async () => {
    try {
      // const response = await axios.get('https://mocki.io/v1/c6b1a681-4ec1-44b2-8c6e-4d88dd04a8ce');
      setItem(VendorJson.Data);
      // alert(JSON.stringify(VendorJson.Data))
      setFilteredItems(VendorJson.Data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.company,
      sortable: true,
      id: 'name',


    },
    {
      name: "Company",
      selector: (row) => row.Code,
      sortable: true
    },
    {
      name: "Contact person",
      selector: (row) => row.Joining_date,

      sortable: true
    },
    {
      name: "Address",
      selector: (row) => row.Gender,
      sortable: true
    },
    {
      name: "Mobile",
      selector: (row) => row.Designation,
      sortable: true
    },
    {
      name: 'Update',
      cell: (row) => <div> <button className='btn btn-default update' type='button'><img src={editImg} alt='edit' /></button><button className='btn btn-default update' type='button'><img src={pdfImg} alt='pdfImg' /></button> </div>
    }

  ]

  const checkboxValue = (e,ch) => {
    
   if(checkedItem.length>0){
    
    switch(ch){
      case 1:
        if (e.target.checked) {
          const result = checkedItem.filter(i => {
            return i.Gender.match('Male')
          })
          setFilteredList(checkedItem)
          setCheckedItem(result)
    
        } else {
          if(e.target.checked){
            setCheckedItem(filteredList)
          }else{
            setCheckedItem(filteredItems)
          }
         
    
        }
        break;
      
      case 2:
        if (e.target.checked) {
          const result = checkedItem.filter(i => {
            return i.Gender.match('Female')
          })
          setFilteredList(checkedItem)
          setCheckedItem(result)
    
        } else {
          if(e.target.checked){
            setCheckedItem(filteredList)
          }else{
            setCheckedItem(filteredItems)
          }
    
        }
        break;
  
      case 3:
        if (e.target.checked) {
          

          const result = checkedItem.filter(i => {
            return i.Employee_status.match('Active')
          })
          
          setFilteredList(checkedItem)
          setCheckedItem(result)
    
        } else {
          if(e.target.checked){
            setCheckedItem(filteredList)
          }else{
            setCheckedItem(filteredItems)
          }
    
        }
        break;
      
      case 4:
        if (e.target.checked) {
          const result = checkedItem.filter(i => {
            return i.Employee_status.match('Inactive')
          })
          setFilteredList(checkedItem)
          setCheckedItem(result)
    
        } else {
          if(e.target.checked){
            setCheckedItem(filteredList)
          }else{
            setCheckedItem(filteredItems)
          }

    
        }
        break;
      
      case 5:
        if (e.target.checked) {
          const result = checkedItem.filter(i => {
            return i.Employee_status.match('Suspended')
          })
          setFilteredList(checkedItem)
          setCheckedItem(result)
    
        } else {
          if(e.target.checked){
            setCheckedItem(filteredList)
          }else{
            setCheckedItem(filteredItems)
          }
    
        }
        break;
      
      case 6:
        if (e.target.checked) {
          const result = checkedItem.filter(i => {
            return i.Designation.match('Janitor')
          })
          setFilteredList(checkedItem)
          setCheckedItem(result)
    
        } else {
          setCheckedItem(filteredList)
    
        }
        break;
  
      case 7:
        if (e.target.checked) {
          const result = checkedItem.filter(i => {
            return i.Designation.match('Sr.Janitor')
          })
          setFilteredList(checkedItem)
          setCheckedItem(result)
    
        } else {
          setCheckedItem(filteredList)
    
        }
        break;
  
      case 8:
        if (e.target.checked) {
          const result = checkedItem.filter(i => {
            return i.Designation.match('Supervisor')
          })
          setFilteredList(checkedItem)
          setCheckedItem(result)
    
        } else {
          setCheckedItem(filteredList)
    
        }
        break;
  
      case 9:
        if (e.target.checked) {
          const result = checkedItem.filter(i => {
            return i.Designation.match('Sr.Supervisor')
          })
          setFilteredList(checkedItem)
          setCheckedItem(result)
    
        } else {
          setCheckedItem(filteredList)
    
        }
        break;
     }
  
   } else{
    switch(ch){
      case 1:
        if (e.target.checked) {
          const result = filteredItems.filter(i => {
            return i.Gender.match('Male')
          })
          

          setCheckedItem(result)
          setFlag(1)
          
         
        } else {
          setCheckedItem(filteredItems)
          setFlag(0)
        }
        break;
      
      case 2:
        if (e.target.checked) {
          const result = filteredItems.filter(i => {
            return i.Gender.match('Female')
          })
          setCheckedItem(result)
          setFlag(1)
        } else {
          setCheckedItem(filteredItems)
          setFlag(0)
        }
        break;
  
      case 3:
        if (e.target.checked) {
          const result = filteredItems.filter(i => {
            return i.Employee_status.match('Active')
          })
          setCheckedItem(result)
          setFlag(1)
        } else {
          setCheckedItem(filteredItems)
          setFlag(0)
        }
        break;
      
      case 4:
        if (e.target.checked) {
          const result = filteredItems.filter(i => {
            return i.Employee_status.match('Inactive')
          })
          setCheckedItem(result)
          setFlag(1)
        } else {
          setCheckedItem(filteredItems)
          setFlag(0)
        }
        break;
      
      case 5:
        if (e.target.checked) {
          const result = filteredItems.filter(i => {
            return i.Employee_status.match('Suspended')
          })
          setCheckedItem(result)
          setFlag(1)
        } else {
          setCheckedItem(filteredItems)
          setFlag(0)
        }
        break;
      
      case 6:
        if (e.target.checked) {
          const result = filteredItems.filter(i => {
            return i.Designation.match('Janitor')
          })
          setCheckedItem(result)
          setFlag(1)
        } else {
          setCheckedItem(filteredItems)
          setFlag(0)
    
        }
        break;
  
      case 7:
        if (e.target.checked) {
          const result = filteredItems.filter(i => {
            return i.Designation.match('Sr.Janitor')
          })
          setCheckedItem(result)
          setFlag(1)
    
        } else {
          setCheckedItem(filteredItems)
          setFlag(0)
        }
        break;
  
      case 8:
        if (e.target.checked) {
          const result = filteredItems.filter(i => {
            return i.Designation.match('Supervisor')
          })
          setCheckedItem(result)
          setFlag(1)
        } else {
          setCheckedItem(filteredItems)
          setFlag(0)
        }
        break;
  
      case 9:
        if (e.target.checked) {
          const result = filteredItems.filter(i => {
            return i.Designation.match('Sr.Supervisor')
          })
          setCheckedItem(result)
          setFlag(1)
        } else {
          setCheckedItem(filteredItems)
          setFlag(0)
        }
        break;
     }
  
   }

  }

  useEffect(() => {
    getEmployeeList();

  }, [])

  useEffect(() => {
    if (checkedItem.length > 0) {
      setFilteredList(checkedItem)
      const result = checkedItem.filter(i => {
        return i.Name.toLowerCase().match(search.toLowerCase());
      });
      setCheckedItem(result)
    }
    else {
      const result = item.filter(i => {
        return i.Name.toLowerCase().match(search.toLowerCase());
      });
      setFilteredItems(result)
    }
  }, [search])



  return (
    <div>
      <div className='titleDiv'>
        <img src={profileImg} alt='owner'></img><h5 className='title'>Employee</h5>

      </div>


      <Row className='rowTable'>
        <Col className='filter' md={2}>

          <h5 className='colHeader'> Filters </h5>
          <InputGroup className='searchBar'>
            <InputGroup.Text id="searchIcon"><CiSearch /></InputGroup.Text>
            <Form.Control

              placeholder='search'
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}


            />

          </InputGroup>
          <div className='checkFilterDiv'>
        
          <h5 className='checkHeader'>State</h5>
          <div className='checkboxDiv'>
            <div className='checkfilter'>
            <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
          
            </div>


            
            <h5 className='checkHeader'>City</h5>
          <div className='checkboxDiv'>
            <div className='checkfilter'>
            <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
            </div>

          </div>

          <h5 className='checkHeader'>Location</h5>
          <div className='checkboxDiv'>
            <div className='checkfilter'>
            <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
            </div>

          </div>

          <h5 className='checkHeader'>Contact person</h5>
          <div className='checkboxDiv' >

            <div className='checkfilter'>
             
              <input type='checkbox'
                onClick={(e, ch) => {
                  checkboxValue(e,ch=3)
                }}
              />
              <p>Suresh kumar</p>
            </div>


            <div className='checkfilter'>
              <input type='checkbox'
                onClick={(e, ch) => {

                  checkboxValue(e,ch=4)
                }}
              />
              <p>Amol karav</p>
            </div>
            <div className='checkfilter'>
              <input type='checkbox'
                onClick={(e, ch) => {

                  checkboxValue(e,ch=5)
                }}
              />
              <p>Rahul vaidya</p>
            </div>
            {isMenuOpen ?
                      <div className='menuActive' onClick={()=>{toggleMenu();}}>
                      <div className='menuItem'>
                      
                      <div className='linkTextactive'>Show More</div>
                      </div>
                      <button id='dropdownActive' type='button' onClick={toggleMenu}>
                          <FaAngleUp/></button>
                      </div>: 
                      <div className='menu' onClick={()=>{toggleMenu();}} >
                      <div className='menuItem'>
                      
                      <div className='linkText'>Show More</div>
                      </div>
                       <button id='dropdown' onClick={toggleMenu}>
                          <FaAngleDown/>
                      </button>
                      </div>
}

          </div>
          
            </div>
          </div>
          
          
          

                

        </Col>
        <Col md={10} className='colTable'>
          <div className='divTable'>
            <TableCompo data={[columns,checkedItem.length > 0 ?
                checkedItem :
                filteredItems]}/>
            {/* <DataTable
              columns={columns}
              data={checkedItem.length > 0 ?
                checkedItem :
                filteredItems}

              fixedHeader
              fixedHeaderScrollHeight='70vh'

              // selectableRows
              highlightOnHover
              pagination
              paginationPerPage={6}
              paginationComponent={customPagination}

              subHeader
              subHeaderComponent={<div className='subHeader'>

                <div className='btnHeader'>
                  <button className="btnTable btn"><BiPlus size={20} />New</button>
                  <button className=" btnTable btn"><CiExport size={20} />Excel</button>
                  <button className="btnTable btn"><CiImport size={20} id='import ' />Import</button>
                </div>
              </div>}

              subHeaderAlign='right'

            /> */}
          </div>
        </Col>
      </Row>




    

    </div>

  )
}

export default Vendor