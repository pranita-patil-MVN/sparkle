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
import Dropdown from "../CommonComponents/Dropdown";
import Input from "../CommonComponents/Input";
import RadioButton from "../CommonComponents/RadioButtons";
import SingleDatePicker from "../CommonComponents/DatePicker";
import { BiChevronLeft, BiUser } from "react-icons/bi";

import placeholder from "../assets/Images/Placeholder.png";

const dropdownOptions = [
  {
    id: 1,
    value: "One",
  },
  {
    id: 2,
    value: "Two",
  },
  {
    id: 3,
    value: "Three",
  },
  {
    id: 4,
    value: "Four",
  },
  {
    id: 5,
    value: "Five",
  },
];

const noOfSteps  =  [1,2,3,4];
const DivOne = ({ onButtonClick }) => {
  const salutationArr = ["Mr.", "Mrs.", "Ms"];
  const genderArr = ["Male", "Female", "Other"];
  const maritalStatusArr = ["Married", "Unmarried"];

  
  const [validateDivOne, setValidateDivOne] = useState(false);
  
  const [txt_aadhar_number_error_message, setTxtAadharNumberErrorMessage] =
    useState("");
  const [invalidAdhar, setInvalidAdhar] = useState(true);
  const [aadhar_number, setAadharNumber] = useState();

  const [txt_salutation_error_message, setTxtSalutationErrorMessage] =
    useState("");
  const [invalidSalutation, setInvalidSalutation] = useState(true);
  const [salutation, setSalutation] = useState();

  const [date_of_birth, setDateOfBirth] = useState();

  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case "rad_salutation":
        if (value === undefined) {
          setInvalidSalutation(true);
          setTxtSalutationErrorMessage("Invalid Salutation.");
        } else {
          setInvalidSalutation(false);
          setTxtSalutationErrorMessage("");
          setValidateDivOne(true)
        }
        break;
      case "txt_aadhar_number":
        if (value === undefined || value.length < 12) {
          setInvalidAdhar(true);
          setTxtAadharNumberErrorMessage("Invalid Aadhar Number.");
        } else {
          setInvalidAdhar(false);
          setTxtAadharNumberErrorMessage("");
        }
        break;
      default:
        break;
    }
  };

  const handleOnChange = (value) => {};

  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Personal Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <RadioButton
                required
                controlId="rad_salutation"
                label="Salutation"
                options={salutationArr}
                onChangeInputHandler={(value) => {
                  setSalutation(value);
                  validateForm("rad_salutation", value);
                }}
              />
              {invalidSalutation === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {txt_salutation_error_message}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Input
                required
                controlId="txt_first_name"
                label="First Name"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_first_name", inputValue);
                }}
              />
            </Col>
            <Col>
              <Input
                controlId="txt_middle_name"
                label="Middle Name"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_middle_name", inputValue);
                }}
              />
            </Col>
            <Col>
              <Input
                required
                controlId="txt_last_name"
                label="Last Name"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_last_name");
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
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
            </Col>
            <Col>
              <Input
                controlId=""
                label="PF Number"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Input
                controlId=""
                label="ESIC Number"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Input
                controlId=""
                label="UNA Number"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="contact_number"
                label="Contact Number"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Input
                required
                controlId="email"
                label="Email"
                type="email"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <SingleDatePicker
                required
                label="Date of Birth"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Input
                required
                controlId=""
                label="Education"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <RadioButton
                required
                controlId=""
                label="Gender"
                options={genderArr}
              />
            </Col>
            <Col>
              <RadioButton
                controlId=""
                label="Marital Status"
                options={maritalStatusArr}
              />
            </Col>
            <Col>
              <Input
                controlId=""
                label="Spouse Name"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <SingleDatePicker
                label="Spouse Date of Birth"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
            </Col>
          </Row>
          <Row className="mb-3">
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
          </Row>
          <Row className="mb-3">
            <Col>
              <Dropdown
                label="Blood Group"
                controlId="drp_blood_group"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col>
              <Input
                controlId="txt_height"
                label="Height(Cm)"
                type="number"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Input
                controlId="txt_weight"
                label="Weight(Kg)"
                type="number"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Input
                controlId="txt_mother_tongue"
                label="Mother Tongue"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Input
                controlId="txt_nominee"
                label="Nominee"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Dropdown
                label="Relation"
                controlId="drp_relation"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Button
            type="button"
            className="alignRight"
            onClick={() => {
              if (validateDivOne === true) {
                onButtonClick("divTwo");
              } else {
                validateForm("txt_salutation", salutation);
                validateForm("txt_first_name");
                validateForm("txt_middle_name");
                validateForm("txt_last_name");
                validateForm("txt_aadhar_number", aadhar_number);
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
  const [date_of_birth, setDateOfBirth] = useState();

  const handleOnChange = (value) => {};
  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Employment Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <RadioButton
                controlId=""
                label="Previous Employer"
                options={["Yes", "No"]}
              />
            </Col>
            <Col>
              <Input
                controlId="txt_years_of_experience"
                label="Years of experience"
                type="number"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <SingleDatePicker
                required
                label="Joining Date"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Dropdown
                label="Designation"
                controlId="drp_designation"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Input
                controlId="txt_temp_code"
                label="Temporary Code"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Input
                controlId="txt_permanant_code"
                label="Permanant Code"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Dropdown
                label="Role"
                controlId="drp_role"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col>
              <Dropdown
                label="Department"
                controlId="drp_department"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="Site"
                controlId="drp_site"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col>
              <Row>
                <Col> 
                  <RadioButton
                    controlId=""
                    label="Allow Login"
                    options={["Yes", "No"]}
                  />
                </Col>
                <Col>
                  <Dropdown
                    required
                    label="Status"
                    controlId="drp_status"
                    options={dropdownOptions}
                    onChangeDropDownHandler={(dropDownValue) => {
                      handleOnChange(dropDownValue);
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Button type="button" onClick={() => onButtonClick("divOne")}>
            Back
          </Button>
          <Button
            type="button"
            className="alignRight"
            onClick={() => {
              onButtonClick("divThree");
            }}
          >
            Next
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

const DivThree = ({ onButtonClick }) => {
  const handleOnChange = (value) => {};
  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Address Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Input
                controlId="txt_temp_address"
                label="Temporary Address"
                type="textarea"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Dropdown
                label="State"
                controlId="drp_state"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col>
              <Dropdown
                label="City"
                controlId="drp_city"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col>
              <Col>
                <Input
                  controlId="txt_temp_pincode"
                  label="Pin code"
                  type="text"
                  onChangeInputHandler={(inputValue) => {}}
                />
              </Col>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
            <Col>
              <RadioButton
                controlId=""
                label=""
                options={["Same As temporary"]}
              />
            </Col>
             
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Input
                controlId="txt_temp_address"
                label="Temporary Address"
                type="textarea"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Dropdown
                label="State"
                controlId="drp_state"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col>
              <Dropdown
                label="City"
                controlId="drp_city"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col>
              <Col>
                <Input
                  controlId="txt_temp_pincode"
                  label="Pin code"
                  type="text"
                  onChangeInputHandler={(inputValue) => {}}
                />
              </Col>
            </Col>
          </Row>
          <Button type="button" onClick={() => onButtonClick("divTwo")}>
            Back
          </Button>
          <Button
            type="button"
            className="alignRight"
            onClick={() => onButtonClick("divFour")}
          >
            Next
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
 
const DivFour = ({ onButtonClick }) => {
  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Documents</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Figure>
                <Figure.Image width={171} height={180} src={placeholder} />
                <Figure.Caption>
                  Photo<sup className="mandatoryField">*</sup>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <Figure.Image width={171} height={180} src={placeholder} />
                <Figure.Caption>
                  Joining Form<sup className="mandatoryField">*</sup>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <Figure.Image width={171} height={180} src={placeholder} />
                <Figure.Caption>PAN Card</Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Figure>
                <Figure.Image width={171} height={180} src={placeholder} />
                <Figure.Caption>
                  Aadhar Card Front<sup className="mandatoryField">*</sup>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <Figure.Image width={171} height={180} src={placeholder} />
                <Figure.Caption>
                  Aadhar Card Back<sup className="mandatoryField">*</sup>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <Figure.Image width={171} height={180} src={placeholder} />
                <Figure.Caption>Bank Passbook</Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <Button type="button" onClick={() => onButtonClick("divThree")}>
            Back
          </Button>
          <Button
            type="button"
            className="alignRight"
            onClick={() => console.log("div 5 clicked")}
          >
            Save
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
const CreateEmployee = () => {
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
      case "3":
        setDiv("divThree");
        break;
      case "4":
        setDiv("divFour");
        break;
      case "5":
        setDiv("divFive");
        break;
      default:
        setDiv("1");
    }
  };

  return (
    <Container>
      <div>
        <div className="titleDiv">
          <BiChevronLeft size={20} color={"var(--purple-color"} />
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Add Employee</h6>
        </div>
        <Container className="step-progress-bar-div">
          <MultiStepProgressBar div={div} onDivNumberClick={nextDivNumber} noOfSteps={noOfSteps}/>
          {
            {
              divOne: <DivOne onButtonClick={nextDiv} />,
              divTwo: <DivTwo onButtonClick={nextDiv} />,
              divThree: <DivThree onButtonClick={nextDiv} />,
              divFour: <DivFour onButtonClick={nextDiv} /> 
            }[div]
          }
        </Container>
      </div>
    </Container>
  );
};

export default CreateEmployee;
