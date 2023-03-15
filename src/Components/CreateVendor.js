import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Container,
  Form,
  Figure,
} from "react-bootstrap";
import MultiStepProgressBar from "../CommonComponents/MultiStepProgressBar";
import Input from "../CommonComponents/Input";
import _ from "underscore";
import stateData from "../data/state.json";
import cityData from "../data/city.json";
import areaJson from "../data/area.json";
import Dropdown from "../CommonComponents/Dropdown";
import vendorJson from "../data/vendorData.json";
import { BiChevronLeft, BiUser } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
const DivOne = ({ props }) => {
  const location = useLocation();

  var vendorDetails = location.state;
  // alert(JSON.stringify(vendorDetails));
  const [vendorData, setVendorData] = useState(vendorDetails);
  const [formData, setFormData] = useState(vendorDetails);
  // const [vendorCityJson, setVendorDataArray] = useState(
  //   vendorData === undefined || vendorData === null
  //   ? cityData.city
  //   : vendorDetails);
  const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);
  const [state, setStateData] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);

  // alert(JSON.stringify(vendorCityJson))

  // For Vendor code
  const [invalidCode, setInvalidCode] = useState(false);
  const [itemCodeErrorMessage, setTxtCodeErrorMessage] = useState("");

  // For Vendor name
  const [invalidItem, setInvalidItem] = useState(false);
  const [itemNameErrorMessage, setTxtItemNameErrorMessage] = useState("");

  // For Address 1
  const [invalidAddress, setInvalidAddress] = useState(false);
  const [addressErrorMessage, setTxtAddressErrorMessage] = useState("");

  //For Cell 1
  const [invalidCell, setInvalidCell] = useState(false);
  const [cellErrorMessage, setTxtCellErrorMessage] = useState("");

  //For Email 1
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailErrorMessage, setTxtEmailErrorMessage] = useState("");

  //For state dropdown
  const [invalidState, setInvalidState] = useState(false);
  const [stateErrorMessage, setStateErrorMessage] = useState("");

  //For city dropdown
  const [invalidCity, setInvalidCity] = useState(false);
  const [cityErrorMessage, setCityErrorMessage] = useState("");
  //For area dropdown
  const [invalidArea, setInvalidArea] = useState(false);
  const [areaErrorMessage, setAreaErrorMessage] = useState("");

  //For pinCode
  const [invalidPin, setInvalidPin] = useState(false);
  const [pinErrorMessage, setPinErrorMessage] = useState("");

  // For fields
  const [code, setCode] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.code
  );
  const [company, setCompany] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.company
  );
  const [contactPerson, setContactPerson] = useState(
    vendorData === undefined || vendorData === null
      ? null
      : vendorData.contact_person
  );
  const [stateValueFromJSon, setState] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.state
  );

  const [areaValueFromJSon, setArea] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.area
  );

  const [cityValueFromJSon, setCityData] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.city
  );

  const [vendorGst, setVendorGst] = useState(
    vendorData === undefined || vendorData === null
      ? null
      : vendorData.vendorGst
  );
  const [primaryAddress, setPrimaryAddress] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.address
  );
  const [secondaryAddress, setSecondaryAddress] = useState(
    vendorData === undefined || vendorData === null
      ? null
      : vendorData.addressSecond
  );
  const [primaryPin, setPrimaryPin] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.pinCode
  );
  const [primaryEmail, setPrimaryEmail] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.email
  );
  const [secondaryEmail, setSecondaryEmail] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.email
  );
  const [PrimaryLandLine, setPrimaryLandLine] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.mobile
  );
  const [SecondaryLandLine, setSecondaryLandLine] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.mobile
  );
  const [PrimaryMobile, setPrimaryMobile] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.cell
  );
  const [SecondaryMobile, setSecondaryMobile] = useState(
    vendorData === undefined || vendorData === null ? null : vendorData.cell
  );
  const [areaDataFromJson, setAreaDataFromJson] = useState([]);

  const saveVendorData = () => {
    // alert(JSON.stringify(vendorData));
    if (company === undefined || company === null || company === "") {
      setInvalidItem(true);
      setTxtItemNameErrorMessage("Please enter name");
    } else if (
      primaryAddress === undefined ||
      primaryAddress === "" ||
      primaryAddress === null
    ) {
      setInvalidAddress(true);
      setTxtAddressErrorMessage("Please enter address ");
    } else if (
      stateValueFromJSon === undefined ||
      stateValueFromJSon === "" ||
      stateValueFromJSon === null
    ) {
      setInvalidState(true);
      setStateErrorMessage("Please select state");
    } else if (
      cityValueFromJSon === undefined ||
      cityValueFromJSon === "" ||
      cityValueFromJSon === null
    ) {
      setInvalidCity(true);
      setCityErrorMessage("Please select city");
    } else if (
      areaValueFromJSon === undefined ||
      areaValueFromJSon === "" ||
      areaValueFromJSon === null
    ) {
      setInvalidArea(true);
      setAreaErrorMessage("Please select area");
    } else if (
      primaryPin === undefined ||
      primaryPin === "" ||
      primaryPin === null
    ) {
      setInvalidPin(true);
      setPinErrorMessage("Please enter pin code");
    } else {
      var vendorDetailsData = [
        { name: company },
        { address: primaryAddress },
        { state: stateValueFromJSon },
        { city: cityValueFromJSon },
        { area: areaValueFromJSon },
        { pin_code: primaryPin },
      ];
      alert(JSON.stringify(vendorDetailsData));
    }
  };
  const onCancelButton = () => {
    window.location.reload();
    // alert(JSON.stringify(stateValueFromJSon) + "==>" +JSON.stringify(cityValueFromJSon) + "==>" +"====>" +JSON.stringify(areaValueFromJSon) )
  };

  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case "txt_code":
        setInvalidCode(false);
        setTxtCodeErrorMessage("");
        // alert(JSON.stringify(value))
        // setVendorData({ ...vendorData, [fieldName]: value });
        // if (value !== undefined && value !== "")
        setCode(value);
        setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_name":
        setInvalidItem(false);
        // alert(JSON.stringify(vendorData))
        setTxtItemNameErrorMessage("");
        setCompany(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_contact_person":
        // alert(fieldName)
        // alert("Person")
        setContactPerson(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_vendor_gst":
        // alert("GST")
        // alert(fieldName)
        setVendorGst(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_address1":
        setInvalidAddress(false);
        setTxtAddressErrorMessage("");
        setPrimaryAddress(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_address2":
        setSecondaryAddress(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "drp_state":
        onChangeState(value);
        setInvalidState(false);
        setStateErrorMessage("");
        // setState(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "drp_city":
        onChangeDistrict(value);

        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_pin":
        setPrimaryPin(value);
        setInvalidPin(false);
        setPinErrorMessage("");
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "drp_area":
        // alert(typeof(value))
        setArea(value);
        setInvalidArea(false);
        setAreaErrorMessage("");
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_email1":
        setInvalidEmail(false);
        setTxtEmailErrorMessage("");
        setPrimaryEmail(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_email2":
        setSecondaryEmail(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_telephone1":
        setPrimaryLandLine(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_telephone2":
        setSecondaryLandLine(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_cell1":
        setInvalidCell(false);
        setTxtCellErrorMessage("");
        setPrimaryMobile(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_cell2":
        setSecondaryMobile(value);
        // setVendorData({ ...vendorData, [fieldName]: value });
        // setFormData({ ...formData, [fieldName]: value });

        break;
      // drp_area
      // case "drp_area":
      //   setArea(value)
      //   // setFormData({ ...formData, [fieldName]: value });

      //   break;

      default:
        break;
    }
  };
  var ArrState = [];
  var arrDistrict = [];
  const onChangeState = (e) => {
    // alert(e);
    const value = e;
    setState(value);
    var singleState = _.findWhere(stateData.states, { state: value });
    // alert(JSON.stringify(singleState))
    for (let j = 0; j < singleState.districts.length; j++) {
      var data = singleState.districts[j];
      // ArrState.push(data);
      arrDistrict.push({
        label: j,
        value: data,
      });
      // console.log(data)
    }
    // alert(JSON.stringify(ArrCity))
    setDistrict(arrDistrict);
  };

  const onChangeDistrict = (e) => {
    var arrCity = [];
    // alert(e)
    var districtValue = e;
    setCityData(districtValue);
    setInvalidCity(false);
    setCityErrorMessage("");
    var singleDistrict = _.findWhere(cityData.city, {
      district: districtValue,
    });
    for (let k = 0; k < singleDistrict.city.length; k++) {
      var data = singleDistrict.city[k];
      // ArrState.push(data);
      arrCity.push({
        label: k,
        value: data,
      });
      // console.log(data)
    }

    // alert("City"+JSON.stringify(arrCity))
    setCity(arrCity);
  };
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
    } else if (data == "search" && checkedItem.length == 0) {
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

  //   var ArrState=[];
  useEffect(() => {
    getVendorList();
    // alert("hi")
  }, []);

  const getVendorList = () => {
    var ArrState = [];
    var arrCity = [];
    var arrArea = [];
    var area = [];
    for (let i = 0; i < stateData.states.length; i++) {
      var data = stateData.states[i]["state"];
      // ArrState.push(data);
      ArrState.push({
        label: i,
        value: data,
      });
      // console.log(data)
    }
    setStateData(ArrState);
    // if (vendorData !== undefined && vendorData !== null ) {
    for (let j = 0; j < cityData.city.length; j++) {
      // alert(cityData.city[j])
      var data = cityData.city[j].city;
      for (var i = 0; i < data.length; i++) {
        arrCity.push({
          label: i,
          value: data[i],
        });
      }
    }
    setDistrict(arrCity);
    setCity(arrArea);

    for (let i = 0; i < areaJson.area.length; i++) {
      area.push({
        label: i,
        value: areaJson.area[i].value,
      });
    }
    setAreaDataFromJson(area);
  };

  // alert(state)
  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Vendor Details</Card.Header>

        <Card.Body className="formScrollbar">
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_code"
                label="Code"
                type="text"
                value={code}
                disabled={true}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_code", inputValue);
                }}
              />
              {invalidCode === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {itemCodeErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Input
                required
                controlId="txt_name"
                label="Name"
                type="text"
                // editable= {true}
                value={company}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_name", inputValue);
                }}
              />
              {invalidItem === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {itemNameErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_contact_person"
                label="Contact Person"
                type="text"
                value={contactPerson}
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_contact_person",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_vendor_gst"
                label="Vendor GST"
                type="text"
                value={vendorGst}
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_vendor_gst",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_address1"
                label="Primary Address"
                type="text"
                value={primaryAddress}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_address1", inputValue);
                }}
              />
              {invalidAddress === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {addressErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="State"
                controlId="drp_state"
                value={stateValueFromJSon !== null ? stateValueFromJSon : ""}
                defaultValue={stateValueFromJSon}
                options={state !== undefined ? state : ""}
                disabled={
                  vendorData !== undefined && vendorData !== null ? true : false
                }
                // disabled={true}
                // options={dropdownMeasurementUnitsOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_state", dropDownValue);
                  // validateForm("drp_state", state[dropDownValue-1].value);
                }}
              />
              {invalidState === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {stateErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Dropdown
                required
                label="City"
                controlId="drp_city"
                options={district}
                defaultValue={cityValueFromJSon}
                value={cityValueFromJSon !== null ? cityValueFromJSon : ""}
                disabled={
                  vendorData !== undefined && vendorData !== null ? true : false
                }
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_city", dropDownValue);
                  // validateForm("drp_city", dropdownMeasurementUnitsOptions[dropDownValue-1].value);
                }}
              />
              {invalidCity === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {cityErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Dropdown
                required
                label="Area"
                controlId="drp_area"
                options={areaDataFromJson}
                defaultValue={areaValueFromJSon}
                value={areaValueFromJSon !== null ? areaValueFromJSon : ""}
                disabled={
                  vendorData !== undefined && vendorData !== null ? true : false
                }
                // onChangeDropDownHandler={(dropDownValue) => {
                //   validateForm("drp_area", dropdownMeasurementUnitsOptions[dropDownValue-1].value);
                // }}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_area", dropDownValue);
                }}
              />
              {invalidArea === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {areaErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            {/* Pin code */}
            <Col>
              <Input
                required
                controlId="txt_pin"
                label="Pin Code"
                type="text"
                value={primaryPin}
                disabled={
                  vendorData !== undefined && vendorData !== null ? true : false
                }
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_pin", inputValue);
                }}
              />
              {invalidPin === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {pinErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_email1"
                label="Primary Email"
                type="text"
                value={primaryEmail}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_email1", inputValue.currentTarget.value);
                }}
              />
              {invalidEmail === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {emailErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_telephone1"
                label="Primary Landline No."
                type="text"
                value={PrimaryLandLine}
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_telephone1",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>
            <Col>
              <Input
                required
                controlId="txt_cell1"
                label="Primary Mobile No."
                type="text"
                value={PrimaryMobile}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_cell1", inputValue);
                }}
              />
              {invalidCell === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {cellErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Input
                // required
                controlId="txt_address2"
                label="Secondary Address"
                type="text"
                value={secondaryAddress}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_address2", inputValue.currentTarget.value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="State"
                controlId="drp_state"
                value={stateValueFromJSon !== null ? stateValueFromJSon : ""}
                defaultValue={stateValueFromJSon}
                options={state !== undefined ? state : ""}
                disabled={
                  vendorData !== undefined && vendorData !== null ? true : false
                }
                // disabled={true}
                // options={dropdownMeasurementUnitsOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_state", dropDownValue);
                  // validateForm("drp_state", state[dropDownValue-1].value);
                }}
              />
            </Col>
            <Col>
              <Dropdown
                required
                label="City"
                controlId="drp_city"
                options={district}
                defaultValue={cityValueFromJSon}
                value={cityValueFromJSon !== null ? cityValueFromJSon : ""}
                disabled={
                  vendorData !== undefined && vendorData !== null ? true : false
                }
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_city", dropDownValue);
                  // validateForm("drp_city", dropdownMeasurementUnitsOptions[dropDownValue-1].value);
                }}
              />
            </Col>
            <Col>
              <Dropdown
                required
                label="Area"
                controlId="drp_area"
                options={areaDataFromJson}
                defaultValue={areaValueFromJSon}
                value={areaValueFromJSon !== null ? areaValueFromJSon : ""}
                disabled={
                  vendorData !== undefined && vendorData !== null ? true : false
                }
                // onChangeDropDownHandler={(dropDownValue) => {
                //   validateForm("drp_area", dropdownMeasurementUnitsOptions[dropDownValue-1].value);
                // }}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_area", dropDownValue);
                }}
              />
            </Col>
            {/* Pin code */}
            <Col>
              <Input
                required
                controlId="txt_pin"
                label="Pin Code"
                type="text"
                value={primaryPin}
                disabled={
                  vendorData !== undefined && vendorData !== null ? true : false
                }
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_pin", inputValue);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Input
                // required
                controlId="txt_telephone2"
                label="Secondary Email"
                type="text"
                value={SecondaryLandLine}
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_telephone2",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_telephone2"
                label="Secondary Landline No."
                type="text"
                value={SecondaryLandLine}
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_telephone2",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>

            <Col>
              <Input
                // required
                controlId="txt_cell2"
                label="Secondary Mobile No."
                type="text"
                value={SecondaryMobile}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_cell2", inputValue);
                }}
              />
            </Col>
          </Row>

          <div className="d-flex justify-content-end formBtn">
            <Button
              type="button"
              className="alignRight mr-5"
              onClick={() => {
                saveVendorData();
              }}
            >
              Save
            </Button>
            <Button
              type="button"
              className="alignRight"
              onClick={() => {
                onCancelButton();
              }}
            >
              Cancel
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const CreateVendor = (props) => {
  const navigate = useNavigate();

  const [div, setDiv] = useState("divOne");

  const nextDiv = (div) => {
    setDiv(div);
  };
  const onBackButton = () => {
    navigate("/masters/vendor");
  };

  return (
    <Container>
      <div>
        <div className="titleDiv">
          <BiChevronLeft
            onClick={() => {
              onBackButton();
            }}
            size={20}
            color={"var(--purple-color"}
          />
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Add vendor</h6>
        </div>
        <Container className="step-progress-bar-div">
          {/* <MultiStepProgressBar div={div} onDivNumberClick={nextDivNumber} /> */}
          {
            {
              divOne: <DivOne onButtonClick={nextDiv} />,
              //   divTwo: <DivTwo onButtonClick={nextDiv} />,
              //   divThree: <DivThree onButtonClick={nextDiv} />,
              //   divFour: <DivFour onButtonClick={nextDiv} />,
              //   divFive: <DivFive onButtonClick={nextDiv} />,
            }[div]
          }
        </Container>
      </div>
    </Container>
  );
};

export default CreateVendor;
