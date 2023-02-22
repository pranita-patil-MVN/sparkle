import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import profileImg from "../assets/Images/profileImg.png";
import editImg from "../assets/Images/editImg.png";
import { CiSearch, CiImport, CiExport } from "react-icons/ci";
import { BiPlus, BiUser } from "react-icons/bi";
import pdfImg from "../assets/Images/pdfImg.png";
import TableCompo from "../CommonComponents/TableCompo";
import Checkbox from "../CommonComponents/Checkbox";
import siteJson from "../data/SiteData.json";
import stateData from "../data/state.json";
import cityData from "../data/city.json";

import "../css/pages.css";
import "../css/dataTable.css";
import "../css/commonCss.css";
import _ from "underscore";
import jsPDF from "jspdf";
// import { format } from "date-fns";
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";
const SiteMaster = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [flag, setFlag] = useState();
  const [siteData, setSiteData] = useState([]);
  const [district, setDistrict] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();

  const ArrState = [];
  const getEmployeeList = async () => {
    // try {
    // const response = await axios.get(
    //   "https://mocki.io/v1/c6b1a681-4ec1-44b2-8c6e-4d88dd04a8ce"
    // );
    // alert(JSON.stringify(siteData.Data));
    setSiteData(siteJson.Data);
    // alert(response.data.length)
    setFilteredItems(siteJson.Data);

    for (let i = 0; i < stateData.states.length; i++) {
      var data = stateData.states[i]["state"];
      ArrState.push(data);
      // console.log(data)
    }
    // alert(ArrState)
    setState(ArrState);
  };
  const { jsPDF } = require("jspdf");
  function generatePDF(data) {
    const doc = new jsPDF();
    doc.text("hello" + data);
    doc.save("document.pdf");
  }

  const getSiteDataForEdit = (site) => {
    // alert(JSON.stringify(site))
    navigate("/masters/customer/SiteMaster/createSite", { state: site });
  };
  const columns = [
    {
      name: "Site",
      selector: (row) => row.Site,
      sortable: true,
      id: "name",
    },
    {
      name: "Supervisor",
      selector: (row) => row.Supervisor,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Site Budget",
      selector: (row) => row.Site_Budget,

      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,

      sortable: true,
    },
    {
      name: "Update",
      cell: (row) => (
        <div>
          {" "}
          <button
            className="btn btn-default update"
            type="button"
            onClick={() => getSiteDataForEdit(row)}
          >
            <img src={editImg} alt="edit" />
          </button>
          <button
            className="btn btn-default update"
            type="button"
            onClick={() => generatePDF(row)}
          >
            <img src={pdfImg} alt="pdfImg" />
          </button>{" "}
        </div>
      ),
    },
  ];

  const checkboxValue = (e, data) => {
    // alert(e.target.checked);
    var filteredListData;
    var concatData;

    var filteredAreaListArr = [];
    if (e.target.checked) {
      filteredListData = _.where(filteredItems, {
        Executive: data,
      });
      concatData = filteredAreaListArr.concat(filteredListData);
      setCheckedItem(concatData);
    } else {
      var removedData = filteredItems.filter((e) => {
        return e.Executive !== data;
      });
      setCheckedItem(removedData);
    }
  };

  useEffect(() => {
    getEmployeeList();
  }, []);

  // Search functionality
  const onSearch = (data, filterData) => {
    alert(data);
    var cityValue = data;
    if (filterData == "city" && checkedItem.length == 0) {
      alert("by" + filteredItems);
      const result = filteredItems.filter((item) => {
        return (
          item.Location.toLowerCase().match(cityValue) ||
          item.Location.match(cityValue)
        );
      });
      alert(JSON.stringify(result));
      setFilteredItems(result);
    } else if (checkedItem.length > 0) {
      const result = checkedItem.filter((item) => {
        return item.Site.toLowerCase().match(data) || item.Site.match(data);
      });
      setCheckedItem(result);
    } else {
      const result = siteData.filter((item) => {
        return (
          item.Site.toLowerCase().match(data) ||
          item.Supervisor.toLowerCase().match(data) ||
          item.Location.toLowerCase().match(data) ||
          item.Site.match(data)
        );
      });
      setFilteredItems(result);
    }
  };

  const makeList = ["Vikas Malap", "Suraj Kadam", "Nik Joshi", "Pritesh Kale"];

  const onChangeState = (event) => {
    // console.log(e);
    const value = event.target.value;
    // alert(JSON.stringify(stateData.states))
    var singleState = _.findWhere(stateData.states, { state: value });
    // alert(JSON.stringify(singleState.districts))
    setDistrict(singleState["districts"]);
  };
  const onChangeDistrict = (event) => {
    var districtValue = event.target.value;
    var singleDistrict = _.findWhere(cityData.city, {
      district: districtValue,
    });
    // alert(JSON.stringify(singleState.city))
    setCity(singleDistrict.city);
  };
  return (
    <div>
      <div className="titleDiv">
        {/* <img src={profileImg} alt="owner"></img> */}
        <BiUser size={20} color={"var(--purple-color"} />
        <h5 className="title">Site</h5>
      </div>

      <Row className="rowTable">
        <Col className="filter" md={2}>
          <h5 className="colHeader"> Filters </h5>

          <div className="checkFilterDiv">
            <h5 className="checkHeader">Executives</h5>
            <div className="checkboxDiv">
              {makeList &&
                makeList.map((data, index) => {
                  return (
                    <div className="checkfilter">
                      <input
                        type="checkbox"
                        onClick={(e) => {
                          checkboxValue(e, data);
                        }}
                      />
                      <p className="checkbox_label">{data}</p>
                    </div>
                  );
                })}
            </div>
            <h5 className="checkHeaderCity">State</h5>
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

              <h5 className="checkHeaderCity">Location</h5>
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
                checkedItem.length > 0 ? checkedItem : filteredItems,
                "siteMaster",
              ]}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SiteMaster;
