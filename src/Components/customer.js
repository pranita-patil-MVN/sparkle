
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

const Customer = () => {
  const navigate = useNavigate();
    const [item,setItem] =useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [checkedItem, setCheckedItem] = useState([])
    const [filteredList,setFilteredList] = useState([])
    const [search, setSearch] = useState("");
    const [searchLoc,setSearchLoc] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [date,setDate] = useState('')
    const toggleMenu =()=>setIsMenuOpen(!isMenuOpen)
    const getItem = async () => {
        try {
          const response = await axios.get('https://mocki.io/v1/d1f404a4-9af0-450e-99b6-111ac045377a');
           setItem(response.data);
          setFilteredItems(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      const arr_areas= ['Divyam Nagar', 'Samarth Nagar']
      const columns = [
        {
            name:'Customer',
            selector:(row)=>row.Customer,
            sortable:true,
            id:'Customer'
        },
        {
            name:"Mobile",
            selector:(row)=>row.Mobile,
            sortable:true
        },
        {
            name:"Location",
            selector:(row)=>row.Area,
            sortable:true
        },
        {
            name:"Startup Date",
            selector:(row)=>row.Startup_date,
            sortable:true
        },
        {
            name:"Closer Date",
            selector:(row)=>row.Closer_date,
            sortable:true
        },
        {
            name: 'Update',
            cell: (row) => <div> <button className='btn btn-default update' type='button' onClick={()=>{navigate('/masters/customer/update')}}><img src={editImg} alt='edit' /></button> </div>
        }
      ]
    

      const datePicker=(e)=>{

        const a = moment(date).format('DD-MM-YYYY')
        const result = filteredItems.filter(i=>{
          return i.Startup_date.match(a);
        })
        setFilteredItems(result)

      }

      const checkboxValue = (e,ch) =>{
        if(checkedItem.length>0){
          switch(ch){
            case 0:
              if (e.target.checked) {
                const result = checkedItem.filter(i => {
                  return i.Area.match('Divyam Nagar')
                })
                setFilteredList(checkedItem)
                setCheckedItem(result)
          
              } else {
                setCheckedItem(filteredList)
          
              }
              break;
            case 1:
              if (e.target.checked) {
                const result = checkedItem.filter(i => {
                  return i.Area.match('Samarth Nagar')
                })
                setFilteredList(checkedItem)
                setCheckedItem(result)
          
              } else {
                setCheckedItem(filteredList)
          
              }
              break;

            case 2:
              if (e.target.checked) {
                
                const result = checkedItem.filter(i => {
                  return i.Area.match('Karve Nagar')
                })
                setFilteredList(checkedItem)
                setCheckedItem(result)
                
              } else {
                setCheckedItem(filteredList)
          
              }
              break;
            case 3:
              if (e.target.checked) {
                const result = checkedItem.filter(i => {
                  return i.Area.match('Bhosari')
                })
                setFilteredList(checkedItem)
                setCheckedItem(result)
          
              } else {
                setCheckedItem(filteredList)
          
              }
              break;
            case 4:
              if (e.target.checked) {
                const result = checkedItem.filter(i => {
                  return i.Area.match('Rajangaon')
                })
                setFilteredList(checkedItem)
                setCheckedItem(result)
          
              } else {
                setCheckedItem(filteredList)
          
              }
              break;

              case 5:
                if (e.target.checked) {
                  const result = checkedItem.filter(i => {
                    return i.Status.match('Active')
                  })
                  setFilteredList(checkedItem)
                  setCheckedItem(result)
            
                } else {
                  setCheckedItem(filteredList)
            
                }
                break;
                case 6:
                  if (e.target.checked) {
                    const result = checkedItem.filter(i => {
                      return i.Status.match('Inactive')
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
            case 0:
              if (e.target.checked) {
                const result = filteredItems.filter(i => {
                  return i.Area.match('Divyam Nagar')
                })
                setCheckedItem(result)
                
              } else {
                setCheckedItem(filteredItems)
                
              }
              break;
            case 1:
              if (e.target.checked) {
                const result = filteredItems.filter(i => {
                  return i.Area.match('Samarth Nagar')
                })
                setCheckedItem(result)
                
              } else {
                setCheckedItem(filteredItems)
                
              }
              break;
            case 2:
              if (e.target.checked) {
                const result = filteredItems.filter(i => {
                  return i.Area.match('Karve Nagar')
                })
                setCheckedItem(result)
                
              } else {
                setCheckedItem(filteredItems)
                
              }
              break;

              case 3:
                if (e.target.checked) {
                  const result = filteredItems.filter(i => {
                    return i.Area.match('Bhosari')
                  })
                  setCheckedItem(result)
                  
                } else {
                  setCheckedItem(filteredItems)
                  
                }
                break;

                case 4:
                  if (e.target.checked) {
                    const result = filteredItems.filter(i => {
                      return i.Area.match('Rajangaon')
                    })
                    setCheckedItem(result)
                    
                  } else {
                    setCheckedItem(filteredItems)
                    
                  }
                  break;
                  case 5:
                  if (e.target.checked) {
                    const result = filteredItems.filter(i => {
                      return i.Status.match('Active')
                    })
                    setCheckedItem(result)
                    
                  } else {
                    setCheckedItem(filteredItems)
                    
                  }
                  break;
                  case 6:
                  if (e.target.checked) {
                    const result = filteredItems.filter(i => {
                      return i.Status.match('Inactive')
                    })
                    setCheckedItem(result)
                    
                  } else {
                    setCheckedItem(filteredItems)
                    
                  }
                  break;
                

          }
        }
      }
    
  useEffect(()=>{
        getItem();
    },[])
      

 
    useEffect(() => {
      if (checkedItem.length > 0) {
        setFilteredList(checkedItem)
        const result = checkedItem.filter(i => {
          return i.Customer.toLowerCase().match(search.toLowerCase());
        });
        setCheckedItem(result)
      }
      else {
        const result = item.filter(i => {
          return i.Customer.toLowerCase().match(search.toLowerCase());
        });
        setFilteredItems(result)
      }
    }, [search])


    useEffect(() => {
      if (checkedItem.length > 0) {
        setFilteredList(checkedItem)
        const result = checkedItem.filter(i => {
          return i.Area.toLowerCase().match(search.toLowerCase());
        });
        setCheckedItem(result)
      }
      else {
        const result = item.filter(i => {
          return i.Area.toLowerCase().match(search.toLowerCase());
        });
        setFilteredItems(result)
      }
    }, [searchLoc])

  return (
    
  
   <div>
      <div className='titleDiv'>
        <img src={profileImg} alt='owner'></img><h5 className='title'>Customer</h5>

      </div>


      <Row className='rowTable'>
        <Col className='filter' md={2}>

          <h5 className='colHeader'> Filters </h5>
        

          <div className='checkFilterDiv'>
            <h5 className='checkHeader'>Location</h5>
            <div className='search'>
              <input type='text'
              className='searchLoc'
              value={searchLoc}
              placeholder='Search'
              onChange={(e)=> setSearchLoc(e.target.value)} />
              <hr></hr>
            </div>
            <div className='checkboxDiv'>
              <div className='checkfilter'>
                <input type ='checkbox'
                onClick={(e, ch)=>{
                  
                  checkboxValue(e, ch=2)
                }}/>
              <p>Karve Nagar</p>
              </div>
              <div className='checkfilter'>
                <input type ='checkbox'
                onClick={(e, ch)=>{
                  
                  checkboxValue(e, ch=3)
                }}/>
              <p>Bhosari</p>
              </div>
              <div className='checkfilter'>
                <input type ='checkbox'
                onClick={(e, ch)=>{
                  
                  checkboxValue(e, ch=4)
                }}/>
              <p>Rajangaon</p>
              </div>

                <div>

                  {isMenuOpen &&
                  <>
                   {
                    arr_areas.map((txt_area,i)=>{
                      return(
                        <div className='checkfilter'>
                        <input type = 'checkbox'
                        onClick={(e,ch)=>{
                          checkboxValue(e,ch=i)
                        }}
                        />
                       
                        <p>{txt_area}</p>
                        </div>
                      )
                    
                    })
                   }
                    </>
                  }
                 

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
            <h5 className='checkHeader'>Status</h5>
            <div className='checkboxDiv'>
              <div className='checkfilter'>
                <input type='checkbox'
                
                onClick = {(e, ch)=>{
                  checkboxValue(e, ch=5)
                }}

                />
                <p>Active</p>
              </div>
              
              <div className='checkfilter'>
                <input type='checkbox'
                
                onClick = {(e, ch)=>{
                  checkboxValue(e, ch=6)
                }}

                />
                <p>Inactive</p>
              </div>
                <div>
                <input type='date'
                className='form-control md-3'
                value={date}
                onChange={(e)=>datePicker(e)}
                
                />

               
                </div>
            </div>

            

          </div>

          
          

             </Col>
        <Col md={10} className='colTable'>
          <div className='divTable'>

            <TableCompo data={[columns,checkedItem.length > 0 ?
                checkedItem :
                filteredItems,
                'customer']}/>
            {/* <DataTable
              columns={columns}
              data={checkedItem.length > 0 ?
                checkedItem :
                filteredItems}
              fixedHeader
              fixedHeaderScrollHeight='70vh'

              selectableRows
              highlightOnHover
              pagination

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

export default Customer