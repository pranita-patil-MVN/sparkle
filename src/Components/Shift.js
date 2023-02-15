import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import moment, { Moment } from 'moment/moment';
import _ from "underscore";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pages.css'
import '../css/dataTable.css'
import '../css/commonCss.css'
import "../css/shift.css"
import TableCompo from '../CommonComponents/TableCompo';
import ShiftData from "../data/shiftData.json"

import profileImg from '../assets/Images/profileImg.png'
import editImg from '../assets/Images/editImg.png'
import PDF from '../assets/Images/pdfImg.png'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { CiSearch, CiImport, CiExport } from 'react-icons/ci'
import { BiPlus } from 'react-icons/bi'

export default function Shift() {

  const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [search, setSearch] = useState("");
  const [itemData, setItemData] = useState([]);
  // const [searchLoc, setSearchLoc] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [date, setDate] = useState('')
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const [listData, setListData] = useState();
  useEffect(() => {
    getItem();
  }, [])
  const getItem = async () => {
    try {
      // const response = await axios.get('https://mocki.io/v1/d1f404a4-9af0-450e-99b6-111ac045377a');
      setItem(ShiftData.Data);
      setFilteredItems(ShiftData.Data);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: 'Shift',
      selector: (row) => row.shift,
      sortable: true,
      id: 'name'
    },
    {
      name: "Shift start time",
      selector: (row) => row.shift_start_time,
      sortable: true
    },
    {
      name: "Short break 1",
      selector: (row) => row.short_break_1,
      sortable: true
    },
    {
      name: "Long break",
      selector: (row) => row.long_break,
      sortable: true
    },
    {
      name: "Short break 2",
      selector: (row) => row.short_break_2,
      sortable: true
    },
    {
      name: 'Update',
      cell: (row) => <div>
        <button className='btn btn-default update' type='button'>
          <img src={editImg} alt='edit' /></button> </div>
    }
  ]

  // search function
  const onSearch = (data) => {
    if (checkedItem.length > 0) {

      const result = checkedItem.filter(item => {
        return item.shift.toLowerCase().match(data) ||
        item.shift_start_time.toLowerCase().match(data) ||
        item.short_break_1.toLowerCase().match(data) ||
        item.long_break.toLowerCase().match(data) ||
        item.short_break_2.toLowerCase().match(data) ||
          item.shift.match(data);
      });
      setCheckedItem(result)
    }
    else {
      const result = item.filter(item => {
        return item.shift.toLowerCase().match(data) ||
        item.shift_start_time.toLowerCase().match(data) ||
        item.short_break_1.toLowerCase().match(data) ||
        item.long_break.toLowerCase().match(data) ||
        item.short_break_2.toLowerCase().match(data) ||
          item.shift.match(data)
      });
      setFilteredItems(result)
    }
  }

  return (

    <div>
      <div className='titleDiv'>
        <img src={profileImg} alt='owner'></img>
        <h5 className='title'>Shift</h5>
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
          <div>
            <p className='dropdown-title'>Site</p>
            <Form.Select className='site-dropdown'>
              <option disabled selected>--Select--</option>
              <option value="1">Audi Showroom - Goa.</option>
              <option value="2">Garden Silk Mills Pvt. Ltd.</option>
            </Form.Select>
            <p className='dropdown-title'>Shift</p>
            <Form.Select className='shift-dropdown'>
              <option disabled selected>--Select--</option>
              <option value="1">S1</option>
              <option value="1">S2</option>
            </Form.Select>

          </div>

        </Col>

        <Col md={10} className='colTable'>
          <div className='divTable'>

            <TableCompo data={[
              columns,
              checkedItem.length > 0 ?
                checkedItem :
                filteredItems]} />
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
