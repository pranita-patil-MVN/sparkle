import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import MultiStepProgressBar from "../CommonComponents/MultiStepProgressBar";
import { BiChevronLeft, BiUser } from "react-icons/bi";
import Input from "../CommonComponents/Input";
import Dropdown from "../CommonComponents/Dropdown";
import SingleDatePicker from "../CommonComponents/DatePicker";
import { useNavigate } from "react-router-dom";
import Checkbox from "../CommonComponents/Checkbox";
import RadioButton from "../CommonComponents/RadioButtons";
import TextArea from "../CommonComponents/TextArea";
import Capital from "./capital";
import Vendor from "./Vendor";

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
const dropdownStatusOptions = [
  { id: 1, value: "Active" },
  {
    id: 2,
    value: "Inactive",
  },
  {
    id: 3,
    value: "Suspended",
  },
];

const noOfSteps = [1];
const DivOne = ({ onButtonClick }) => {
  

  const [formData, setFormData] = useState([]);
  const [validateDivOne, setValidateDivOne] = useState(false);
  //for SubCategroy field
  const [subCategoryErrorMessage, setSubCategoryErrorMessage] = useState("");
  const [invalidSubCategory, setInvalidSubCategory] = useState(true);
  // for Serial No field
  const [serialNoErrorMessage, setSerialNoErrorMessage] = useState("");
  const [invalidSerialNo, setInvalidSerialNo] = useState(true);

  // For Category Dropdown
  const [dropdownCategoryErrorMessage, setdropdownCategoryErrorMessage] =
    useState("");
  const [invalidCategory, setInvalidCategory] = useState(true);
  // For Status
  const [dropdownVendorErrorMessage, setDropdownVendorErrorMessage] =
    useState("");
  const [invalidVendor, setInvalidVendor] = useState(true);

  //make
  const [makeErrorMessage, setMakeErrorMessage] = useState("");
  const [invalidMake, setInvalidMake] = useState(true);

  // For Model
  const [modelErrorMessage, setModelErrorMessage] = useState("");
  const [invalidModel, setInvalidModel] = useState(true);
  //DOP
  const [invalidDOP, setInvalidDOP] = useState(true);
  const [dopErrorMessage, setDOPErrorMessage] = useState("");
  const addFieldsValues = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const [checkedMaintenance, setCheckedMaintenance] = useState(false);
  const [checkedWarranty, setCheckedWarranty] = useState(false);
  const [checkedIOT, setCheckedIOT] = useState(false);
  const [checkedInsured, setCheckedInsured] = useState(false);
  const [textMaint, setTextMaint] = useState("");
  const [textIOT, setTextIOT] = useState("");
  const [textInsured, setTextInsured] = useState("");

  const [dateWarranty, setDateWarranty] = useState();
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [date_of_birth, setDateOfBirth] = useState();
  const validateForm = (fieldName, value) => {
    const handleOnChange = (value) => {};
    switch (fieldName) {

      case "drp_category":
        if (value === undefined) {
          setInvalidCategory(true);
          setdropdownCategoryErrorMessage("Please Select Category");
        } else {
          addFieldsValues(fieldName, value);
          setInvalidCategory(false);
          setdropdownCategoryErrorMessage("");
          setValidateDivOne(true);
        }
        break;

      case "txt_make":
        if (value === undefined) {
          setInvalidMake(true);
          setMakeErrorMessage("Please Select Days");
        } else {
          addFieldsValues(fieldName, value);
          setInvalidMake(false);
          setMakeErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "drp_vendor":
        if (value === undefined) {
          setInvalidVendor(true);
          setDropdownVendorErrorMessage("Please select vendor");
        } else {
          addFieldsValues(fieldName, value);
          setInvalidVendor(false);
          setVendorErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "date_dop":
        if (value === undefined) {
          setInvalidDOP(true);
          setDOPErrorMessage("Please Select Date");
        } else {
          addFieldsValues(fieldName, value);
          setInvalidDOP(false);
          setDOPErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "drp_type":
        if (value === undefined) {
          setInvalidType(true);
          setTypeErrorMessage("Please Select Type");
        } else {
          addFieldsValues(fieldName, value);
          setInvalidType(false);
          setTypeErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "txt_model":
        if (value === undefined) {
          setInvalidModel(true);
          setModelErrorMessage("Please Enter Model");
        } else {
          addFieldsValues(fieldName, value);
          setInvalidModel(false);
          setModelErrorMessage("");
          setValidateDivOne(true);
        }
        break;
      case "drp_subcategory":
        if (value === undefined) {
          setInvalidSubCategory(true);
          setSubCategoryErrorMessage("Please Select Sub Category");
        } else {
          addFieldsValues(fieldName, value);
          setInvalidSubCategory(false);
          setSubCategoryErrorMessage("");
          setValidateDivOne(true);
        }
        break;

      case "txt_serialno":
        if (value === undefined) {
          setInvalidSerialNo(true);
          setSerialNoErrorMessage("Please Enter Serial No");
        } else {
          addFieldsValues(fieldName, value);
          setInvalidSerialNo(false);
          setSerialNoErrorMessage("");
          setValidateDivOne(true);
        }
        break;
    }
  };

  return (
    <>
      <Card>
        <Card.Header className="cardHeader">Customer Site Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="Category"
                controlId="drp_category"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_category", dropDownValue);
                }}
              />
              {invalidCategory === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownCategoryErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Dropdown
                required
                label="Sub-Category"
                controlId="drp_subcategory"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_subcategory", dropDownValue);
                }}
              />

              {invalidSubCategory === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {subCategoryErrorMessage}
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
                controlId="txt_serialno"
                label="Serial No."
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_serialno", inputValue);
                }}
              />
              {invalidSerialNo === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {serialNoErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Input
                required
                controlId="txt_make"
                label="Make"
                disabled
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_make", inputValue);
                }}
              />
              {invalidMake === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {makeErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>

            <Col>
              <Input
                required
                controlId="txt_model"
                label="Model"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_model", inputValue);
                }}
              />
              {invalidModel === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {modelErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <SingleDatePicker
                required
                controlId="date_dop"
                label="Date of Purchase"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {
                  validateForm("date_dop", inputValue);
                }}
              />
              {invalidDOP === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dopErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>

            <Col>
              <Input
                required
                controlId="txt_description"
                label="Description"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_description", inputValue);
                }}
              />
            </Col>
            <Col>
              <Input
                required
                controlId="txt_purchaseprice"
                label="Purchase Price"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_purchaseprice", inputValue);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <input
                className="form-check-input"
                name="checkbox"
                type="checkbox"
                checked={checkedMaintenance}
                onChange={() => {
                  if (checkedMaintenance) {
                    setTextMaint("");
                  }
                  setCheckedMaintenance(!checkedMaintenance);
                }}
              />

              <label>Maintenance Required?</label>
            </Col>
            <Col>
              <input
                className="form-check-input"
                name="checkbox"
                type="checkbox"
                checked={checkedWarranty}
                onChange={() => {
                  if (checkedWarranty) {
                    setDateWarranty("");
                  }
                  setCheckedWarranty(!checkedWarranty);
                }}
              />

              <label>Under Warranty?</label>
            </Col>
            <Col>
              <input
                name="checkbox"
                type="checkbox"
                className="form-check-input"
                checkedIOT={checkedIOT}
                onChange={() => {
                  if (checkedIOT) {
                    setTextIOT("");
                  }
                  setCheckedIOT(!checkedIOT);
                }}
              />

              <label>Is IOT device attached?</label>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label>Maintenance Frequency</label>
              <input
                className="form-control md-3"
                name="input"
                type="text"
                label="Maintenance Frequency"
                disabled={!checkedMaintenance}
                value={textMaint}
                onChange={(e) => setTextMaint(e.target.value)}
              />
            </Col>

            <Col>
              <Col>
                <label>Warranty Vaild Upto</label>
                <input
                  className="form-control md-3"
                  name="input"
                  type="date"
                  disabled={!checkedWarranty}
                  value={dateWarranty}
                  onChange={(e) => setDateWarranty(e.target.value)}
                />
              </Col>
            </Col>
            <Col>
              <label>S3 device Id</label>
              <input
                className="form-control md-3"
                name="input"
                type="text"
                label="Maintenance Frequency"
                disabled={!checkedIOT}
                value={textIOT}
                onChange={(e) => setTextIOT(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <input
                name="checkbox"
                type="checkbox"
                className="form-check-input"
                checkedInsured={checkedInsured}
                onChange={() => {
                  if (checkedInsured) {
                    setTextInsured("");
                    setDateEnd("");
                    setDateStart("");
                  }
                  setCheckedInsured(!checkedInsured);
                }}
              />

              <label>Is Insured?</label>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label>Insurance Policy No.</label>
              <input
                className="form-control md-3"
                name="input"
                type="text"
                disabled={!checkedInsured}
                value={textInsured}
                onChange={(e) => setTextInsured(e.target.value)}
              />
            </Col>
            <Col>
              <label>Start Date</label>
              <input
                className="form-control md-3"
                name="input"
                type="date"
                disabled={!checkedInsured}
                value={dateStart}
                onChange={(e) => setDateStart(e.target.value)}
              />
            </Col>

            <Col>
              <label>End Date</label>
              <input
                className="form-control md-3"
                name="input"
                type="date"
                disabled={!checkedInsured}
                value={dateEnd}
                onChange={(e) => setDateEnd(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <Dropdown
                required
                label="Vendor"
                controlId="drp_vendor"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_vendor", dropDownValue);
                }}
              />

              {invalidVendor === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownVendorErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>

            <Col md={3}>
              <TextArea controlId="txt_remarks" label="Remarks" />
            </Col>
          </Row>
          <Button
            type="button"
            className="alignRight"
            onClick={() => {
              if (validateDivOne === true) {
                onButtonClick("divTwo");
              } else {
                validateForm("drp_category", formData.drp_subcategory);
                validateForm("txt_serialno", formData.txt_serialno);
                validateForm("drp_subcategory", formData.drp_subcategory);

                validateForm("txt_make", formData.txt_make);
                validateForm("txt_model", formData.txt_model);
                validateForm("drp_vendor", formData.drp_vendor);
                validateForm("date_dop", formData.date_dop);
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

const CreateCapitalAssets = () => {
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
    }
  };
  return (
    <Container>
      <div>
        <div className="titleDiv">
          <BiChevronLeft size={20} color={"var(--purple-color"} />
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Capital Assets</h6>
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
            }[div]
          }
        </Container>
      </div>
    </Container>
  );
};

export default CreateCapitalAssets;
