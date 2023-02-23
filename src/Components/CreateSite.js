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
import { json, useLocation, useNavigate } from "react-router-dom";
import MultiStepProgressBar from "../CommonComponents/MultiStepProgressBar";
import Dropdown from "../CommonComponents/Dropdown";
import Input from "../CommonComponents/Input";
import RadioButton from "../CommonComponents/RadioButtons";
import SingleDatePicker from "../CommonComponents/DatePicker";
import { BiChevronLeft, BiUser } from "react-icons/bi";
import TextArea from "../CommonComponents/TextArea";
import siteJson from "../data/SiteData.json";
import placeholder from "../assets/Images/Placeholder.png";

const dropdownOptionsState = [
  {
    id: 1,
    value: "Andaman Nicobar",
  },
  {
    id: 2,
    value: "Assam",
  },
  {
    id: 3,
    value: "Bihar",
  },
  {
    id: 4,
    value: "Chandigarh",
  },
  {
    id: 5,
    value: "Delhi",
  },
  {
    id: 6,
    value: "Goa",
  },
  {
    id: 7,
    value: "Haryana",
  },
];
const dropdownOptionsCity = [
  {
    id: 1,
    value: "Agra",
  },
  {
    id: 2,
    value: "Akola",
  },
  {
    id: 3,
    value: "Balaghat",
  },
  {
    id: 4,
    value: "Beed",
  },
  {
    id: 5,
    value: "Chennai",
  },
  {
    id: 6,
    value: "Guwahati",
  },
  {
    id: 7,
    value: "Indore",
  },
  {
    id: 7,
    value: "Pune",
  },
];
const dropdownOptionsLocation = [
  {
    id: 1,
    value: "Karvenagar",
  },
  {
    id: 2,
    value: "Baner",
  },
  {
    id: 3,
    value: "Warje",
  },
  {
    id: 4,
    value: "Sus road",
  },
  {
    id: 5,
    value: "Pashan",
  },
  {
    id: 6,
    value: "Bawdhan",
  },
  {
    id: 7,
    value: "Sinhgad road",
  },
 
];
const dropdownOptionsZone = [
  {
    id: 1,
    value: "North",
  },
  {
    id: 2,
    value: "South",
  },
  {
    id: 3,
    value: "East",
  },
  {
    id: 4,
    value: "West",
  },
];
const dropdownOptionsStatus = [
  {
    id: 1,
    value: "Active",
  },
  {
    id: 2,
    value: "Inactive",
  },
  {
    id: 3,
    value: "Suspended",
  },
];
const dropdownOptionsType = [
  {
    id: 1,
    value: "ESIC",
  },
  {
    id: 2,
    value: "Non-ESIC",
  },
];
const dropdownOptionsCustomer = [
  {
    id: 1,
    value: "ACG Pharma",
  },
  {
    id: 2,
    value: "B.U.Bhandari",
  },
  {
    id: 3,
    value: "Chakote Group",
  },
  {
    id: 4,
    value: "Devi Construction",
  },
  {
    id: 5,
    value: "Emcure",
  },
  {
    id: 6,
    value: "GTT Communication",
  },
];
const noOfSteps = [1, 2];
const DivOne = ({ onButtonClick }) => {
  const location = useLocation();

  
  const site = location.state;
  const [sitesData, setSitesData] = useState(site);

  const navigate = useNavigate();
  const handleOnChange = (value) => {};
  const salutationArr = ["5", "6", "7"];
  const genderArr = ["Male", "Female", "Other"];
  const maritalStatusArr = ["Married", "Unmarried"];

  const [formData, setFormData] = useState([]);

  const [validateDivOne, setValidateDivOne] = useState(false);

  // For City Zone
  const [dropdownZoneErrorMessage, setDropdownZoneErrorMessage] = useState("");
  const [invalidZone, setInvalidZone] = useState(true);

  // For Working days in week
  const [dropdownWorkingDaysErrorMessage, setDropdownWorkingDaysErrorMessage] =
    useState("");
  const [invalidWorkingDays, setInvalidWorkingDays] = useState(true);

  // For Budget
  const [budgetErrorMessage, setBudgetErrorMessage] = useState("");
  const [invalidBudget, setInvalidBudget] = useState(true);

  // For Status
  const [statusErrorMessage, setStatusErrorMessage] = useState("");
  const [invalidStatus, setInvalidStatus] = useState(true);

  // For Type
  const [typeErrorMessage, setTypeErrorMessage] = useState("");
  const [invalidType, setInvalidType] = useState(true);

  // For Start Day Salary
  const [startdaysalaryErrorMessage, setStartdaysalaryErrorMessage] =
    useState("");
  const [invalidStartdaysalary, setInvalidStartdaysalary] = useState(true);

  // For Customer
  const [customerErrorMessage, setCustomerErrorMessage] = useState("");
  const [invalidCustomer, setInvalidCustomer] = useState(true);

  // For SEZ UnSEZ Value
  const [sezErrorMessage, setSezErrorMessage] = useState();
  const [invalidSez, setInvalidSez] = useState();

  const [aadhar_number, setAadharNumber] = useState();

  const [txt_salutation_error_message, setTxtSalutationErrorMessage] =
    useState("");
  const [invalidSalutation, setInvalidSalutation] = useState(true);
  const [salutation, setSalutation] = useState();

const[gstApplicable,setGstApplicable]=useState(false);

  const [siteData, setSiteData] = useState([]);

  // for fields
  const[customerData,setCustomerData]=useState (
    sitesData === undefined || sitesData === null ? null : sitesData.customer 
  );

  const[applicable,setApplicable]=useState();

  const[customerGst,setCustomerGst]=useState();

  const[siteName,setSiteName]=useState(
    sitesData === undefined || sitesData === null ? null : sitesData.Site
  );

  const[sezSite,setSezSite]=useState();

  const[type,setType]=useState();

  const[manpower,setManpower]=useState();

  const[siteBudget,setSiteBudget]=useState();

  const[siteZone,setSiteZone]=useState();

  const[workingDays,setWorkingDays]=useState();

  const[salary,setSalary]=useState();

  const[material,setMaterial]=useState();

  const[siteStatus,setSiteStatus]=useState();

  useEffect(() => {
    // alert(JSON.stringify(site));
    setSiteData(site);
  }, []);

  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case "drp_customer":
        if (value === undefined||value=="") {
    setValidateDivOne(false);
    // setFormData({ ...formData, [fieldName]: value });
        } else {
          setFormData({ ...formData, [fieldName]: value });
          setInvalidCustomer(false);
          setCustomerErrorMessage("");
          setValidateDivOne(true);
        }
        break;
        case "rad_gstApllicable":
          // alert(value)
          if (value=="Yes"){
            setGstApplicable(true)
          }else{ setGstApplicable(false)}
         
          setFormData({ ...formData, [fieldName]: value });
          break;
          
      case "txt_manpower":
        setFormData({ ...formData, [fieldName]: value });
        break;
        case "rad_materialprovided":
          setFormData({ ...formData, [fieldName]: value });
          break;
      // case "txt_remark":
      //   setFormData({ ...formData, [fieldName]: value });
      //   break;

        //  case "drp_customer":
        //   if (value === undefined) {
        //     setInvalidCustomer(true);
        //     setCustomerErrorMessage("Please Select customer");
        //   } else {
        //     setInvalidCustomer(false);
        //     setCustomerErrorMessage("");
        //     setValidateDivOne(true);
        //     setFormData({ ...formData, [fieldName]: value });
        //   }
  
    
        // break;

        case "rad_sez":
          if (value === undefined ||value=="") {
            setValidateDivOne(false);
            // setFormData({ ...formData, [fieldName]: value });
          } else {
            setInvalidSez(false);
            setSezErrorMessage("");
            setValidateDivOne(true);
            setFormData({ ...formData, [fieldName]: value });
          }
          break;
   
      case "drp_zone":
        if (value === undefined || value=="") {
          setValidateDivOne(false)
          // setFormData({ ...formData, [fieldName]: value });
        } else {
          setFormData({ ...formData, [fieldName]: value });
          setInvalidZone(false);
          setDropdownZoneErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "rad_workingdays":
        if (value === undefined ) {
          setValidateDivOne(false)
          // setFormData({ ...formData, [fieldName]: value });
        } else {
          setFormData({ ...formData, [fieldName]: value });
          setInvalidWorkingDays(false);
          setDropdownWorkingDaysErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "txt_budget":
        // alert(value)
        if (value === undefined ||value=="" || value== null) {
          setValidateDivOne(false)
          setFormData({ ...formData, [fieldName]: value });
        } else {
          setFormData({ ...formData, [fieldName]: value });
          setInvalidBudget(false);
          setBudgetErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "drp_Status":
        // if (value === undefined) {
        //   setInvalidStatus(true);
        //   setStatusErrorMessage("Please Select Status");
        // } else {
          setFormData({ ...formData, [fieldName]: value });
          setInvalidStatus(false);
          setStatusErrorMessage("");
          setValidateDivOne(true);
        // }
        break;
      case "drp_type":
        if (value === undefined) {
          setValidateDivOne(false)
          // setFormData({ ...formData, [fieldName]: value });
        } else {
          setFormData({ ...formData, [fieldName]: value });
          setInvalidType(false);
          setTypeErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "txt_salaryProcessing":
        if (value === undefined) {
          setValidateDivOne(false)
          setFormData({ ...formData, [fieldName]: value });
        } else {
          setFormData({ ...formData, [fieldName]: value });
          setInvalidStartdaysalary(false);
          setStartdaysalaryErrorMessage("");
          setValidateDivOne(true);
        }
        break;
     
       
        case "txt_customergst":
          setFormData({ ...formData, [fieldName]: value });
          break;
          case "txt_sitename":
            setFormData({ ...formData, [fieldName]: value });
            break;
  

      default:
    }
  };

  const onNextPage=()=>{
    if(formData.drp_customer == undefined || formData.drp_customer == ""){
      setInvalidCustomer(true);
      setCustomerErrorMessage("Please Select State");
    }
    else if(formData.rad_sez == undefined || formData.rad_sez == ""){
      setInvalidSez(true);
      setSezErrorMessage("Please Select SEZ");
    }
    else if(formData.drp_type == undefined || formData.drp_type == ""){
      setInvalidType(true);
      setTypeErrorMessage("Please Select Type");
    }
    else if(formData.txt_budget === undefined || formData.txt_budget === ""){
      setInvalidBudget(true);
      setBudgetErrorMessage("Please Select Budget");
    }
    else if(formData.drp_zone == undefined || formData.drp_zone == ""){
      setInvalidZone(true);
      setDropdownZoneErrorMessage("Please Select Zone");
    }
    else if(formData.rad_workingdays == undefined || formData.rad_workingdays == ""){
      setInvalidWorkingDays(true);
      setDropdownWorkingDaysErrorMessage("Please Select Working days");
    }
    else if(formData.txt_salaryProcessing == undefined || formData.txt_salaryProcessing == ""){
      setInvalidStartdaysalary(true);
      setStartdaysalaryErrorMessage("Please Select date");
    }
    else{
      alert(JSON.stringify(formData))
      onButtonClick("divTwo");
      
          sessionStorage.setItem("add_site", JSON.stringify(formData));
    }
  }


  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Site Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="Customer"
                controlId="drp_customer"
                value={customerData}
                options={dropdownOptionsCustomer}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm(
                    "drp_customer",
                    dropdownOptionsCustomer[dropDownValue - 1].value
                  );
                }}
              />
              {invalidCustomer === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {customerErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            {/* <Col>
              <RadioButton
                controlId="rad_gstApllicable"
                label="Is GST Applicable?   "
                options={["Yes", "No"]}
                
                onChangeInputHandler={(inputValue) => {
                  alert(inputValue)
                  validateForm("rad_gstApllicable", inputValue);
                }}
              />
            </Col> */}
            {/* <Col>
              <Input
                controlId="txt_customergst"
                label="Customer GST"
                type="text"
                disabled= {gstApplicable === true ? false : true}
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_customergst",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col> */}
            <Col>
              <Input
                controlId="txt_sitename"
                label="Site name"
                type="text"
             value={siteName}
                onChangeInputHandler={(inputValue) => {
                  // alert(JSON.stringify(inputValue))
                  validateForm("txt_sitename", inputValue.currentTarget.value);
                }}
                
              />
            </Col>
          </Row>
          <Row className="mb-3">
          
          <Col>
              <RadioButton
                required
                controlId="rad_sez"
                label="SEZ"
                options={["Non-SEZ", "SEZ"]}
                onChangeInputHandler={(dropDownValue) => {
                  validateForm("rad_sez", dropDownValue);
                }}
              />
              {invalidSez === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {sezErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>

            <Col>
              <Dropdown
                required
                label="Type"
                controlId="drp_type"
                options={dropdownOptionsType}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm(
                    "drp_type",
                    dropdownOptionsType[dropDownValue - 1].value
                  );
                }}
              />
              {invalidType === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {typeErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
          

<Col>
              <Input
                controlId="txt_manpower"
                label="Total Agreed Manpower"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_manpower", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <Input
                required
                controlId="txt_budget"
                label="Budget"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_budget", inputValue);
                }}
              />
              {invalidBudget === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {budgetErrorMessage}
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
                label="Zone"
                controlId="drp_zone"
                options={dropdownOptionsZone}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm(
                    "drp_zone",
                    dropdownOptionsZone[dropDownValue - 1].value
                  );
                }}
              />
              {invalidZone === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownZoneErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>

            <Col>
              <RadioButton
                required
                controlId="rad_workingdays"
                label="Working days in week"
                options={salutationArr}
                onChangeInputHandler={(value) => {
                  validateForm("rad_workingdays", value);
                }}
              />
              {invalidWorkingDays === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownWorkingDaysErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Input
                required
                controlId="txt_salaryProcessing"
                label="Start Day For Salary Processing"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_salaryProcessing", inputValue);
                }}
              />
              {invalidStartdaysalary === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {startdaysalaryErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <RadioButton
                controlId="rad_materialprovided"
                label="Material provided at site"
                options={["Yes", "No"]}
                onChangeInputHandler={(inputValue) => {
                  validateForm("rad_materialprovided", inputValue);
                }}
              />
            </Col>
            

           
            {/* <Col>
              <SingleDatePicker
                required
                label="Date of Birth"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
            </Col> */}
            
          </Row>
          <Row className="mb-3">
          <Col>
              <Dropdown
                required
                label="Status"
                controlId="drp_Status"
                options={dropdownOptionsStatus}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm(
                    "drp_Status",
                    dropdownOptionsStatus[dropDownValue - 1].value
                  );
                }}
              />
              {invalidStatus === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {statusErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
          <Col>
              <TextArea
                 required
                controlId="txt_remark"
                label="Remarks"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_remark", inputValue);
                }}
              />
            </Col> 
        
         
           
            <Col></Col>
            <Col></Col>
            {/* <Col>
              <RadioButton
                controlId=""
                label="Marital Status"
                options={maritalStatusArr}
              />
            </Col> */}
            {/* <Col>
              <Input
                controlId=""
                label="Spouse Name"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col> */}
            {/* <Col>
              <SingleDatePicker
                label="Spouse Date of Birth"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
            </Col> */}
          </Row>
          {/* <Row className="mb-3">
            <Col>
              <Input
                required
                controlId=""
                label="Mother Name"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <SingleDatePicker
                label="Mother Date of Birth"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Input
                controlId=""
                label="Father Name"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <SingleDatePicker
                label="Father Date of Birth"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
            </Col>
          </Row> */}
          <Button
            type="button"
            className="alignRight"
            onClick={() => {
            onNextPage()
            }}
          >
            Next
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

const DivTwo = ({ onButtonClick }) => {
  const [formData2, setFormData2] = useState([]);

 // For state dropdown
 const [dropdownStateErrorMessage, setDropdownStateErrorMessage] =
 useState("");
const [invalidState, setInvalidState] = useState(false);

// For City Dropdown
const [dropdownCityErrorMessage, setDropdownCityErrorMessage] = useState("");
const [invalidCity, setInvalidCity] = useState(false);

// For Location Dropdown
const [dropdownLocationErrorMessage, setDropdownLocationErrorMessage] = useState("");
const [invalidLocation, setInvalidLocation] = useState(false);

  

  const validateForm2 = (fieldName, value) => {
    alert(value);
    switch (fieldName) {
     
      case "drp_state":
        // if (value === undefined) {
        //   setInvalidState(true);
        //   setDropdownStateErrorMessage("Please Select State");
        // } else {
          setFormData2({ ...formData2, [fieldName]: value });
          setInvalidState(false);
          setDropdownStateErrorMessage("");
          // setValidateDivTwo(true);
        // }
        case "drp_city":
          // if (value === undefined) {
          //   setInvalidCity(true);
          //   setDropdownCityErrorMessage("Please Select City");
          // } else {
            setFormData2({ ...formData2, [fieldName]: value });
            setInvalidCity(false);
            setDropdownCityErrorMessage("");
           
          // }
          break;
          // case "drp_location":
          //   if (value === undefined) {
          //     setInvalidLocation(true);
          //     setDropdownLocationErrorMessage("Please Select Location");
          //   } else {
           
              setInvalidLocation(false);
              setDropdownLocationErrorMessage("");
              setFormData2({ ...formData2, [fieldName]: value });
             
            // }
            break;
            case "txt_address":
              setFormData2({ ...formData2, [fieldName]: value });
              break;
              case "txt_gps":
        setFormData2({ ...formData2, [fieldName]: value });
        break;
     
      default:
    }
  };
  var arr = [];
  var secondArr = [];
  const handleOnChange = (value) => {};
  const getSiteData = () => {
    // if (formData2.drp_customer == undefined || formData2.drp_customer == "") {
    //   setInvalidCustomer(true);
    //   setCustomerErrorMessage("Please Select customer");
    // } 
    if(formData2.drp_state == undefined || formData2.drp_state == ""){
      setInvalidState(true);
      setDropdownStateErrorMessage("Please Select State");
    }
    else if(formData2.drp_city == undefined || formData2.drp_city == ""){
      setInvalidCity(true);
            setDropdownCityErrorMessage("Please Select City");
    } else if(formData2.drp_location == undefined || formData2.drp_location == ""){
      setInvalidLocation(true);
            setDropdownLocationErrorMessage("Please Select Location");
    } 
    
//  else if (formData2.rad_sez == undefined || formData2.rad_sez == "") {
//       setInvalidSez(true);
//       setSezErrorMessage("Please Select value");
//     } 

    else {
      // alert(JSON.stringify(formData2))
      var sessionData = sessionStorage.getItem("add_site");
      var parsedJson = JSON.parse(sessionData);
      arr.push(parsedJson);
      //  alert(JSON.stringify(formData2))
      secondArr.push(formData2);
      //  setFormData2(arr)
      const allData = arr.concat(secondArr);
      alert(JSON.stringify(allData));
      sessionStorage.removeItem("add_site");
    }
  };
  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Address Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
          <Col>
              <Dropdown
                required
                label="State"
                controlId="drp_state"
                options={dropdownOptionsState}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm2(
                    "drp_state",
                    dropdownOptionsState[dropDownValue - 1].value
                  );
                }}
              />
              {invalidState === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownStateErrorMessage}
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
                options={dropdownOptionsCity}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm2(
                    "drp_city",
                    dropdownOptionsCity[dropDownValue - 1].value
                  );
                }}
              />
              {invalidCity === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownCityErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Dropdown
                required
                label="Location"
                controlId="drp_location"
                options={dropdownOptionsLocation}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm2(
                    "drp_location",
                    dropdownOptionsLocation[dropDownValue - 1].value
                  );
                }}
              />
              {invalidLocation === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownLocationErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>

            <Col>
              <Input
                controlId="txt_address"
                label="Address"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm2("txt_address", inputValue.currentTarget.value);
                }}
              />
            </Col>
         

          </Row>
          <Row className="mb-3">
          <Col>
              <Input
                controlId="txt_gps"
                label="GPS"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm2("txt_gps", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>

          <Button type="button" onClick={() => onButtonClick("divOne")}>
            Back
          </Button>
          <Button
            type="button"
            className="alignRight"
            onClick={() => getSiteData()}
          >
            Save
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

const CreateSite = () => {
  const navigate = useNavigate();
  const [div, setDiv] = useState("divOne");

  const nextDiv = (div) => {
    setDiv(div);
  };
  const nextDivNumber = (divNumber) => {
    switch (divNumber) {
      case "1":
        setDiv("divOne");
        break;
      case "2":
        setDiv("divTwo");
        break;
      default:
        setDiv("1");
    }
  };
  const goToBackPage = () => {
    if (div == "divTwo") {
      setDiv("divOne");
    } else {
      navigate(-1);
    }
  };

  return (
    <Container>
      <div>
        <div className="titleDiv">
          <BiChevronLeft
            size={20}
            color={"var(--purple-color"}
            onClick={() => goToBackPage()}
          />
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Add Site</h6>
        </div>
        <Container className="step-progress-bar-div">
          <MultiStepProgressBar
            div={div}
            onDivNumberClick={nextDivNumber}
            noOfSteps={noOfSteps}
          />
          {
            {
              divOne: <DivOne onButtonClick={nextDiv} />,
              divTwo: <DivTwo onButtonClick={nextDiv} />,
            }[div]
          }
        </Container>
      </div>
    </Container>
  );
};

export default CreateSite;
