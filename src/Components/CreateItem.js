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
import TextArea from "../CommonComponents/TextArea";
import { BiChevronLeft, BiUser } from "react-icons/bi";
import {useNavigate } from "react-router-dom";
import placeholder from "../assets/Images/Placeholder.png";

const dropdownStatusOptions = [
  {
    id: 1,
    value: "AVAILABLE",
  },
  {
    id: 2,
    value: "END_OF_LIFE",
  },
  {
    id: 3,
    value: "NOT_IN_USE",
  },
  {
    id: 4,
    value: "WITHDRAWN",
  },
];
const dropdownCategoryOptions = [
  {
    id: 1,
    value: "Accessories",
  },
  {
    id: 2,
    value: "Chemicals",
  },
  {
    id: 3,
    value: "Consumables",
  },
  {
    id: 4,
    value: "Stationery",
  },
  {
    id: 5,
    value: "Toiletories",
  },
  {
    id: 6,
    value: "Uniform",
  },
];
const dropdownMeasurementUnitsOptions = [
  {
    id: 1,
    value: "Kg",
  },
  {
    id: 2,
    value: "Liters",
  },
  {
    id: 3,
    value: "Number",
  },
  {
    id: 4,
    value: "Packet",
  },
  {
    id: 5,
    value: "Pair",
  },
  {
    id: 6,
    value: "Set",
  },
];
const DivOne = ({ onButtonClick }) => {
  const navigate=useNavigate();
  const handleOnChange = (value) => {};

  const [formData, setFormData] = useState([]);

  // for item name
  const [itemValue, setItemValue] = useState("");
  const [itemNameErrorMessage, setTxtItemNameErrorMessage] = useState("");
  const [invalidItem, setInvalidItem] = useState(false);

  // for category dropdown
  const [categoryDropdownErrorMessage, setCategoryDropdownErrorMessage] =
    useState("");
  const [invalidCategory, setInvalidCategory] = useState(false);

  // for status dropdown
  const [statusDropdownErrorMessage, setStatusDropdownErrorMessage] =
    useState("");
  const [invalidStatus, setInvalidStatus] = useState(false);

  // for measurement unit
  const [unitErrorMessage, setUnitErrorMessage] = useState("");
  const [invalidUnit, setInvalidUnit] = useState(false);

  // for item rate
  const [itemRateErrorMessage, setItemRateErrorMessage] = useState("");
  const [invalidRate, setInvalidRate] = useState(false);

  const addFieldsValues = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case "txt_item":
        // if (value === "" || value === undefined) {
        //   setInvalidItem(true);
        //   setTxtItemNameErrorMessage("Invalid Item");
        // } else {
          setInvalidItem(false);
          setTxtItemNameErrorMessage("");
          setFormData({
            ...formData,
            [fieldName]: value,
          });
          
        // }
        break;
      case "txt_code":
        setFormData({
          ...formData,
          [fieldName]: value,
        });
        break;
      case "drp_category":
        // if (value === "" || value === undefined) {
        //   setInvalidCategory(true);
        //   setCategoryDropdownErrorMessage("Select category");
        // } else {
          setInvalidCategory(false);
          setCategoryDropdownErrorMessage("");
          setFormData({
            ...formData,
            [fieldName]: value,
          });
        // }
        break;
      case "drp_status":
        // if (value === "" || value === undefined) {
        //   setInvalidStatus(true);
        //   setStatusDropdownErrorMessage("Select status");
        // } else {
          setInvalidStatus(false);
          setStatusDropdownErrorMessage("");
          setFormData({
            ...formData,
            [fieldName]: value,
          });
        // }
        break;
      case "rad_deduction_status":
        setFormData({
          ...formData,
          [fieldName]: value,
        });
        break;
      case "drp_measurement_unit":
        // if (value === "" || value === undefined) {
        //   setInvalidUnit(true);
        //   setUnitErrorMessage("Select unit");
        // } else {
          setInvalidUnit(false);
          setUnitErrorMessage("");
          setFormData({
            ...formData,
            [fieldName]: value,
          });
        // }
        break;
      case "txt_make":
        setFormData({
          ...formData,
          [fieldName]: value,
        });
        break;

      case "txt_rate":
        var expression= "^[0-9]*$";
        if (value.match(expression)){
          setFormData({
            ...formData,
            [fieldName]: value,
          });
          setInvalidRate(false);
          setItemRateErrorMessage("");
        }
        else{
           setInvalidRate(true);
        setItemRateErrorMessage("Invalid rate");
        }
        // if (value === "" || value === undefined) {
        //   setInvalidRate(true);
        //   setItemRateErrorMessage("Invalid rate");
        // } else {
         
        // }
        break;

      case "text_cgst":
       var expression= "/^(100(\.0{1,2})?|([0-9]?[0-9](\.[0-9]{1,2})))$/"
        if (value != undefined) {
          setFormData({
            ...formData,
            [fieldName]: value,
          });
        }
        break;
      case "text_sgst":
        setFormData({
          ...formData,
          [fieldName]: value,
        });
        break;
      case "text_igst":
        setFormData({
          ...formData,
          [fieldName]: value,
        });
        break;
      case "text_hsn":
        setFormData({
          ...formData,
          [fieldName]: value,
        });
        break;
      case "txt_remark":
        setFormData({
          ...formData,
          [fieldName]: value,
        });
        break;
      case "txt_information":
        setFormData({
          ...formData,
          [fieldName]: value,
        });
        break;
      default:
        break;
    }
  };

  const getItemsData = () => {
    if (formData.txt_item ===undefined) {
      setInvalidItem(true);
        setTxtItemNameErrorMessage("Please fill the item");
    }  else if (!formData.drp_category) {
      setInvalidCategory(true);
      setCategoryDropdownErrorMessage("Please select category");
    } else if (!formData.drp_status) {
      setInvalidStatus(true)
      setStatusDropdownErrorMessage("Please select status");
    }  else if (!formData.drp_measurement_unit) {
      setInvalidUnit(true)
      setUnitErrorMessage("Please select measurement unit");
    }  else if (!formData.txt_rate) {
      setInvalidRate(true)
      setItemRateErrorMessage("Please fill rate");
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Item details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_item"
                label=" Item"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_item", inputValue);
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
                controlId="txt_code"
                label="Code"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_code", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <Dropdown
                required
                label="Category"
                controlId="drp_category"
                options={dropdownCategoryOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_category", dropdownCategoryOptions[dropDownValue-1].value);
                }}
              />
              {invalidCategory === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {categoryDropdownErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>

            <Col></Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="Status"
                controlId="drp_status"
                options={dropdownStatusOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_status", dropdownStatusOptions[dropDownValue-1].value);
                }}
              />
              {invalidStatus === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {statusDropdownErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <RadioButton
                controlId="rad_deduction_status"
                label="Apply Deduction"
                options={["Yes", "No"]}
                onChangeInputHandler={(optionValue) => {
                  validateForm("rad_deduction_status", optionValue);
                }}
              />
            </Col>
            <Col>
              <Dropdown
                required
                label="Unit of Measure"
                controlId="drp_measurement_unit"
                options={dropdownMeasurementUnitsOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_measurement_unit", dropdownMeasurementUnitsOptions[dropDownValue-1].value);
                }}
              />
              {invalidUnit === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {unitErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Input
                controlId="txt_make"
                label="Make"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_make", inputValue.currentTarget.value);
                }}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_rate"
                label="Rate(₹)"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_rate", inputValue);
                }}
              />
              {invalidRate === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {itemRateErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Row>
                <Col xl={4} lg={4} md={4}>
                  <Input
                    // required
                    controlId="text_cgst"
                    label="CGST(%)"
                    type="text"
                    onChangeInputHandler={(inputValue) => {
                      validateForm("text_cgst", inputValue.currentTarget.value);
                    }}
                  />
                </Col>
                <Col xl={4} lg={4} md={4}>
                  <Input
                    // required
                    controlId="text_sgst"
                    label="SGST(%)"
                    type="text"
                    onChangeInputHandler={(inputValue) => {
                      validateForm("text_sgst", inputValue.currentTarget.value);
                    }}
                  />
                </Col>
                <Col xl={4} lg={4} md={4}>
                  <Input
                    // required
                    controlId="text_igst"
                    label="IGST(%)"
                    type="text"
                    onChangeInputHandler={(inputValue) => {
                      validateForm("text_igst", inputValue.currentTarget.value);
                    }}
                  />
                </Col>
              </Row>
            </Col>

            <Col>
              <Input
                // required
                controlId="text_hsn"
                label="HSN/SAC"
                type="email"
                onChangeInputHandler={(inputValue) => {
                  validateForm("text_hsn", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col></Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <TextArea
                // required
                controlId="txt_remark"
                label="Remarks"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_remark", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <TextArea
                // required
                controlId="txt_information"
                label="Information"
                type="textArea"
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_information",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>

       
         <div className="d-flex justify-content-end formBtn">
            <Button
            type="button"
            className="alignRight mr-5"
            onClick={() => {
              getItemsData();
            }}
          >
            Save
          </Button>
          <Button   
          type="button"
            className="alignRight"
            onClick={()=>navigate(-1)}
            >
            Cancel
          </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const CreateItem = () => {
  const [div, setDiv] = useState("divOne");


  const nextDiv = (div) => {
    setDiv(div);
  };
  return (
    <Container>
      <div>
        <div className="titleDiv">
          <BiChevronLeft size={20} color={"var(--purple-color"} />
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Add Item</h6>
        </div>
        <div className="step-progress-bar-div">
          <DivOne/>
           
        </div>
      </div>
    </Container>
  );
};

export default CreateItem;
