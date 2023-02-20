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
import { json, useNavigate } from "react-router-dom";
import MultiStepProgressBar from "../CommonComponents/MultiStepProgressBar";
import Dropdown from "../CommonComponents/Dropdown";
import Input from "../CommonComponents/Input";
import RadioButton from "../CommonComponents/RadioButtons";
import SingleDatePicker from "../CommonComponents/DatePicker";
import { BiChevronLeft, BiUser } from "react-icons/bi";
import TextArea from "../CommonComponents/TextArea";

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
const noOfSteps  =  [1,2];
const DivOne = ({ onButtonClick }) => {
  const navigate = useNavigate();
  const handleOnChange = (value) => {};
  const salutationArr = ["5", "6", "7"];
  const genderArr = ["Male", "Female", "Other"];
  const maritalStatusArr = ["Married", "Unmarried"];

  const [formData, setFormData] = useState([]);

  const [validateDivOne, setValidateDivOne] = useState(false);

  // For state dropdown
  const [dropdownStateErrorMessage, setDropdownStateErrorMessage] =
    useState("");
  const [invalidState, setInvalidState] = useState(true);

  // For City Dropdown
  const [dropdownCityErrorMessage, setDropdownCityErrorMessage] = useState("");
  const [invalidCity, setInvalidCity] = useState(true);

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

  const [aadhar_number, setAadharNumber] = useState();

  const [txt_salutation_error_message, setTxtSalutationErrorMessage] =
    useState("");
  const [invalidSalutation, setInvalidSalutation] = useState(true);
  const [salutation, setSalutation] = useState();

  const [date_of_birth, setDateOfBirth] = useState();

  
  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case "txt_gps":
          setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_location":
          setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_address":
          setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_manpower":
          setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_remark":
          setFormData({ ...formData, [fieldName]: value });
        break;
      case "drp_state":
        if (value === undefined) {
          setInvalidState(true);
          setDropdownStateErrorMessage("Please Select State");
        } else {
            setFormData({ ...formData, [fieldName]: value });
          setInvalidState(false);
          setDropdownStateErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "drp_city":
        if (value === undefined) {
          setInvalidCity(true);
          setDropdownCityErrorMessage("Please Select City");
        } else {
            setFormData({ ...formData, [fieldName]: value });
          setInvalidCity(false);
          setDropdownCityErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "drp_zone":
        if (value === undefined) {
          setInvalidZone(true);
          setDropdownZoneErrorMessage("Please Select Zone");
        } else {
            setFormData({ ...formData, [fieldName]: value });
          setInvalidZone(false);
          setDropdownZoneErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "rad_workingdays":
        if (value === undefined) {
          setInvalidWorkingDays(true);
          setDropdownWorkingDaysErrorMessage("Please Select Date");
        } else {
            setFormData({ ...formData, [fieldName]: value });
          setInvalidWorkingDays(false);
          setDropdownWorkingDaysErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "txt_budget":
        if (value === undefined) {
          setInvalidBudget(true);
          setBudgetErrorMessage("Please enter budget");
        } else {
            setFormData({ ...formData, [fieldName]: value });
          setInvalidBudget(false);
          setBudgetErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "drp_Status":
        if (value === undefined) {
          setInvalidStatus(true);
          setStatusErrorMessage("Please Select Status");
        } else {
            setFormData({ ...formData, [fieldName]: value });
          setInvalidStatus(false);
          setStatusErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "drp_type":
        if (value === undefined) {
          setInvalidType(true);
          setTypeErrorMessage("Please Select Type");
        } else {
            setFormData({ ...formData, [fieldName]: value });
          setInvalidType(false);
          setTypeErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "txt_salaryProcessing":   
        if (value === undefined) {
          setInvalidStartdaysalary(true);
          setStartdaysalaryErrorMessage("Please Enter Start Date of Salary processing");
        } else {
          setFormData({ ...formData, [fieldName]: value });
          setInvalidStartdaysalary(false);
          setStartdaysalaryErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "drp_customer":
        if (value === undefined) {
          setInvalidCustomer(true);
          setStartdaysalaryErrorMessage("Please Select Customer");
        } else {
          setFormData({ ...formData, [fieldName]: value });
          setInvalidCustomer(false);
          setCustomerErrorMessage("");
          setValidateDivOne(true);
        }
        break;

      default:
    }
  };

  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Customer Site Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Input
                controlId="txt_gps"
                label="GPS"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_gps",inputValue.currentTarget.value);
                  
                }}
              />
            </Col>
            <Col>
              <Input
                controlId="txt_location"
                label="Location"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_location", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <Input
                controlId="txt_address"
                label="Address"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_address", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <Dropdown
                required
                label="State"
                controlId="drp_state"
                options={dropdownOptionsState}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_state", dropdownOptionsState[dropDownValue-1].value)
                 
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
          </Row>
          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="City"
                controlId="drp_city"
                options={dropdownOptionsCity}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_city", dropdownOptionsCity[dropDownValue-1].value);
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
            {/* <Col>
              <Input
                required
                controlId="txt_aadhar_number"
                label="Aadhar Number"
                type="text"
                value={aadhar_number}
                onChangeInputHandler={(inputValue) => {
                  setAadharNumber(inputValue);
                  validateForm("txt_aadhar_number");
                }}
              />
              {invalidAdhar === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {txt_aadhar_number_error_message}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col> */}

            <Col>
              <Dropdown
                required
                label="Zone"
                controlId="drp_zone"
                options={dropdownOptionsZone}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_zone", dropdownOptionsZone[dropDownValue-1].value);
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
              <Input
                controlId="txt_manpower"
                label="Total Agreed Manpower"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_manpower", inputValue);
                }}
              />
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
         
          </Row>
          <Row className="mb-3">
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

            <Col>
              <Dropdown
                required
                label="Status"
                controlId="drp_Status"
                options={dropdownOptionsStatus}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_Status", dropdownOptionsStatus[dropDownValue-1].value);
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
              <Dropdown
                required
                label="Type"
                controlId="drp_type"
                options={dropdownOptionsType}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_type", dropdownOptionsType[dropDownValue-1].value);
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
            {/* <Col>
              <SingleDatePicker
                required
                label="Date of Birth"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
            </Col> */}
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
          </Row>
          <Row className="mb-3">
            <Col>
              <TextArea
                // required
                controlId="txt_remark"
                label="Remarks"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_remark", inputValue);
                }}
              />
            </Col>
            <Col>
              <RadioButton
                controlId="rad_previousemployer"
                label="Previous Employer"
                options={["Yes", "No"]}
                onChangeInputHandler={(inputValue) => {
                  validateForm("rad_previousemployer", inputValue);
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
              if (validateDivOne === true) {
                onButtonClick("divTwo");

                sessionStorage.setItem("add_site",JSON.stringify(formData))
                

              } else {
                validateForm("txt_gps");
                validateForm("txt_location");
                validateForm("txt_address");
                validateForm("txt_remark");
                validateForm("txt_manpower");
                validateForm("rad_previousemployer");
                validateForm("drp_state", formData.drp_state);
                validateForm("drp_city", formData.drp_city);
                validateForm("drp_zone", formData.drp_zone);
                validateForm("rad_workingdays", formData.rad_workingdays);
                validateForm("txt_budget", formData.txt_budget);
                validateForm("drp_Status", formData.txt_budget);
                validateForm("drp_type", formData.drp_type);
                validateForm(
                  "txt_salaryProcessing",
                  formData.txt_salaryProcessing
                );
              }
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

  // For customer
  const [customerErrorMessage, setCustomerErrorMessage] = useState();
  const [invalidCustomer, setInvalidCustomer] = useState();

  // For SEZ UnSEZ Value
  const [sezErrorMessage, setSezErrorMessage] = useState();
  const [invalidSez, setInvalidSez] = useState();

  const validateForm2 = (fieldName, value) => {
    alert(value)
    switch (fieldName) {
      case "drp_customer":
        if (value === undefined) {
          setInvalidCustomer(true);
          setCustomerErrorMessage("Please Select customer");
        } else {
          setInvalidCustomer(false);
          setCustomerErrorMessage("");
          // setValidateDivOne(true);
          setFormData2({ ...formData2, [fieldName]: value });
        }
        break;
      case "txt_customergst":
        setFormData2({ ...formData2, [fieldName]: value });
        break;

      case "rad_gstApllicable":
        setFormData2({ ...formData2, [fieldName]: value });
        break;
      case "txt_sitename":
        setFormData2({ ...formData2, [fieldName]: value });
        break;
      case "rad_sez":
        if (value === undefined) {
          setInvalidSez(true);
          setSezErrorMessage("Please Select value");
        } else {
          setInvalidSez(false);
          setSezErrorMessage("");
          // setValidateDivOne(true);
          setFormData2({ ...formData2, [fieldName]: value });
        }
        break;
      default:
    }
  };
  var arr=[];
  var secondArr=[];
  const handleOnChange = (value) => {};
  const getSiteData = () => {
if(formData2.drp_customer==undefined || formData2.drp_customer == ""){
  setInvalidCustomer(true);
  setCustomerErrorMessage("Please Select customer");
}else if(formData2.rad_sez==undefined || formData2.rad_sez == ""){
  setInvalidSez(true);
  setSezErrorMessage("Please Select value");
}
else{
  // alert(JSON.stringify(formData2))
 var sessionData = sessionStorage.getItem("add_site")
 var parsedJson=JSON.parse(sessionData)
arr.push(parsedJson)
//  alert(JSON.stringify(formData2))
 secondArr.push(formData2)
//  setFormData2(arr)
const allData = arr.concat(secondArr)
 alert(JSON.stringify(allData))
 sessionStorage.removeItem("add_site")
}

  }
  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Job Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="Customer"
                controlId="drp_customer"
                options={dropdownOptionsCustomer}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm2("drp_customer", dropdownOptionsCustomer[dropDownValue-1].value);
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
            <Col>
              <Input
                controlId="txt_customergst"
                label="Customer GST"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm2("txt_customergst", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <RadioButton
                controlId="rad_gstApllicable"
                label="Is GST Applicable?                "
                options={["Yes", "No"]}
                onChangeInputHandler={(inputValue) => {
                  validateForm2("rad_gstApllicable", inputValue);
                }}
              />
            </Col>
            <Col>
              <Input
                controlId="txt_sitename"
                label="Site name"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm2("txt_sitename", inputValue.currentTarget.value);
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
                  validateForm2("rad_sez", dropDownValue);
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

            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
         
          <Button type="button" onClick={() => onButtonClick("divOne") } >
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
      // case "3":
      //   setDiv("divThree");
      //   break;
      // case "4":
      //   setDiv("divFour");
      //   break;
      // case "5":
      //   setDiv("divFive");
      //   break;
      default:
        setDiv("1");
    }
  };
  const goToBackPage = () => {
    if(div=="divTwo"){
      setDiv("divOne")
    }
  else
{
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
            onClick={ ()=>goToBackPage()}
          />
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Add Site</h6>
        </div>
        <Container className="step-progress-bar-div">
          <MultiStepProgressBar div={div} onDivNumberClick={nextDivNumber} noOfSteps={noOfSteps}/>
          {
            {
              divOne: <DivOne onButtonClick={nextDiv} />,
              divTwo: <DivTwo onButtonClick={nextDiv} />,
              // divThree: <DivThree onButtonClick={nextDiv} />,
              // divFour: <DivFour onButtonClick={nextDiv} />,
              // divFive: <DivFive onButtonClick={nextDiv} />,
            }[div]
          }
        </Container>
      </div>
    </Container>
  );
};

export default CreateSite;
