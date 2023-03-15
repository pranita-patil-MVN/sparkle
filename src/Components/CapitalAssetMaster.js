import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';
import TableCompo from '../CommonComponents/TableCompo';
import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from '../assets/Images/profileImg.png'
import { Row,Col, Button, InputGroup, Form  } from 'react-bootstrap';
import { BiPlus,BiUser } from "react-icons/bi";
import editImg from '../assets/Images/editImg.png'
import { useNavigate } from 'react-router-dom';
import "../css/pages.css";
import "../css/dataTable.css";
import "../css/commonCss.css";


const CapitalAssetMaster = () => {
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

    const getCapitalList =  async () => {
        try {
                const response = await axios.get('https://mocki.io/v1/0d4eb849-be23-4e7c-898e-d8fdbe0077c1');
                setItem(response.data);
                setFilteredItems(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCapitalList();
      }, [])

      const navigate = useNavigate();
      const columns = [
        //   {
        //       name:'Sr.No.',
        //       selector: (row) => row.Sr_No,
        //       sortable:true,
        //       id:'Sr_No'
      
        //   },
          {
              name:'Asset',
              selector: (row) => row.Asset,
              sortable:true,
              id:'Asset'
      
          },
        //   {
        //       name:'Serial.No',
        //       selector: (row) => row.Serial_No,
        //       sortable:true,
        //       id:'Serial_No'
      
        //   },
          {
              name:'Make',
              selector: (row) => row.Make,
              sortable:true,
              id:'Make'
      
          },
          {
              name:'Assigned Site',
              selector: (row) => row.Assigned_Site,
              sortable:true,
              id:'Assigned_Site   '
      
          },
          {
              name:'Model',
              selector: (row) => row.Model,
              sortable:true,
              id:'Model'
      
          },
          {
              name:'Purchase Date',
              selector: (row) => row.Purchase_Date,
              sortable:true,
              id:'Purchase_Date'
      
          },{
              name:'Warranty Valid Upto ',
              selector: (row) => row.Warranty,
              sortable:true,
              id:'Warranty'
      
          },
          {
              name:'Update',
              cell: (row) => <div> <button className='btn btn-default update' type='button' onClick={()=>{navigate('/masters/capitalAssets/update')}}><img src={editImg} alt='edit' /></button> </div>
                
              
          }
      
      ]
  return (
    <div>
        <div className='titleDiv'>
            <img src ={profileImg} alt='owner'></img>
            <h5 className='title'>Capital Assets</h5>
        </div>
        <Row className='rowTable'>
            <Col className='filter' md={2}>
                <h5 className='colHeader'>Filters</h5>
            </Col>
            <Col className='colTable' md={10}>
                <div className='divTable'>
                    <TableCompo data ={[
                        columns,
                        item
                    ]}/>
                </div>
            </Col>
        </Row>
</div>
  )
}

export default CapitalAssetMaster