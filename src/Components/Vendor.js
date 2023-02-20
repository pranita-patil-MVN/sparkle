import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import _ from "underscore";
import profileImg from "../assets/Images/profileImg.png";
import editImg from "../assets/Images/editImg.png";
import { CiSearch, CiImport, CiExport } from "react-icons/ci";
import { BiPlus,BiUser } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import pdfImg from "../assets/Images/pdfImg.png";
import TableCompo from "../CommonComponents/TableCompo";
import Select from "react-select";
import vendorJson from "../data/vendorData.json";
import stateData from "../data/state.json";
import cityData from "../data/city.json";
import Checkbox from "../CommonComponents/Checkbox";
import "../css/pages.css";
import "../css/dataTable.css";
import "../css/commonCss.css";
import { findWhere } from "underscore";
const Vendor = () => {
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [flag, setFlag] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [city, setCity] = useState();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const options = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  ];
  const ArrState = [];
  const ArrCity = [];
  const getEmployeeList = async () => {
    setItem(vendorJson.Data);
    // alert(JSON.stringify(cityData.city))
    // for ( let i=0 ; i< cityData.city.length;i++){
    //   var data = cityData.city[i]["district"]
    //   ArrCity.push(data)
    //   console.log(data)

    // }
    // setCity(ArrCity)
    for (let i = 0; i < stateData.states.length; i++) {
      var data = stateData.states[i]["state"];
      ArrState.push(data);
      // console.log(data)
    }
    setState(ArrState);
    setFilteredItems(vendorJson.Data);
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      id: "name",
    },
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
      // className:"companyColumn"
    },
    {
      name: "Contact person",
      selector: (row) => row.contact_person,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "Update",
      cell: (row) => (
        <div>
          {" "}
          <button className="btn btn-default update" type="button">
            <img  src={editImg} alt="edit" />
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getEmployeeList();
  }, []);

  const onSearch = (e, data) => {
    // alert("e=>"+data)
    var cityValue = e;

    if (data == "city" && checkedItem.length == 0) {
      // alert("by")
      const result = item.filter((item) => {
        return (
          item.city.toLowerCase().match(cityValue) || item.city.match(cityValue)
        );
      });
      // alert(JSON.stringify(result))
      setFilteredItems(result);
    } else if (data == "search" &&   checkedItem.length == 0) {
      // alert("by")
      const result = item.filter((item) => {
        return (
          item.company.toLowerCase().match(cityValue) ||
          item.contact_person.toLowerCase().match(cityValue) ||
          item.company.match(cityValue)
        );
      });
      setFilteredItems(result);
    } else if (checkedItem.length > 0) {
      // alert("hi")
      const result = checkedItem.filter((item) => {
        return (
          item.company.toLowerCase().match(cityValue) ||
          item.company.match(cityValue)
        );
      });
      setCheckedItem(result);
    }
  };

  const onChangeState = (event) => {
    // console.log(e);
    const value = event.target.value;
    // alert(JSON.stringify(stateData.states))
    var singleState = _.findWhere(stateData.states, { state: value });
    // alert(JSON.stringify(singleState.districts))
    setDistrict(singleState.districts);
  };

  const onChangeDistrict = (event) => {
    var districtValue = event.target.value;
    var singleDistrict = _.findWhere(cityData.city, {
      district: districtValue,
    });
    // alert(JSON.stringify(singleState.city))
    setCity(singleDistrict.city);
  };
  const onChangeCity = (event) => {
    var cityValue = event.target.value;
    const result = item.filter((item) => {
      return (
        item.city.toLowerCase().match(cityValue) || item.city.match(cityValue)
      );
    });
    // alert(JSON.stringify(result))
    setFilteredItems(result);

    console.log(event.target.value);
  };

  

  return (
    <div>
      <div className="titleDiv">
      <BiUser size={20} color={"var(--purple-color"} />
        <h5 className="title">Vendor</h5>
      </div>

      <Row className="rowTable">
        <Col className="filter" md={2}>
          <h5 className="colHeader"> Filters </h5>
          <InputGroup className="searchBar">
            <InputGroup.Text id="searchIcon">
              <CiSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="search"
              aria-label="Username"
              aria-describedby="basic-addon1"
              // value={search}
              onChange={(e) => onSearch(e.target.value, "search")}
            />
          </InputGroup>
          <div className="checkFilterDiv">
            <h5 className="checkHeader">State</h5>
            <div className="checkboxDiv">
              <div className="checkfilter">
                <Form.Select
                  className="filter-dropdown"
                  onChange={onChangeState}
                >
                  <option disabled selected></option>
                  {state &&
                    state.map((item) => {
                      return <option>{item}</option>;
                    })}
                  {/* <option  disabled selected></option>
                <option>{state}</option> */}
                  {/* <option>Karnataka</option>
                  <option>Andhra Pradesh</option> */}
                </Form.Select>
              </div>

              <h5 className="checkHeaderCity">City</h5>
              <div className="checkboxDiv">
                <div className="checkfilter">
                  <Form.Select
                    className="filter-dropdown"
                    onChange={onChangeDistrict}
                  >
                    <option disabled selected></option>
                    {district &&
                      district.map((item) => {
                        return <option>{item}</option>;
                      })}
                  </Form.Select>
                </div>
              </div>

              <h5 className="checkHeader">Location</h5>
              <div className="checkboxDiv">
                <div className="checkfilter">
                  <Form.Select
                    className="filter-dropdown"
                    onChange={(e) => onSearch(e.target.value, "city")}
                  >
                    <option disabled selected></option>
                    {city &&
                      city.map((item) => {
                        return <option>{item}</option>;
                      })}
                  </Form.Select>
                </div>
              </div>

              
            </div>
          </div>
        </Col>
        <Col md={10} className="colTable">
          <div className="divTable">
            <TableCompo
              data={[
                columns,
                filteredItems,
                "vendorMaster"
              ]}
            />
           
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Vendor;
