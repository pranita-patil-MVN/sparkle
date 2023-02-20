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
import { useNavigate, useLocation } from "react-router-dom";
import placeholder from "../assets/Images/Placeholder.png";

const DivOne = ({ onButtonClick }) => {
  const navigate = useNavigate();
  // For Vendor name
  const [invalidItem, setInvalidItem] = useState(true);
  const [itemNameErrorMessage, setTxtItemNameErrorMessage] = useState("");

  // For Address 1
  const [invalidAddress, setInvalidAddress] = useState(true);
  const [addressErrorMessage, setTxtAddressErrorMessage] = useState("");

  //For Cell 1
  const [invalidCell, setInvalidCell] = useState(true);
  const [cellErrorMessage, setTxtCellErrorMessage] = useState("");

  //For Email 1
  const [invalidEmail, setInvalidEmail] = useState(true);
  const [emailErrorMessage, setTxtEmailErrorMessage] = useState("");

  const [formData, setFormData] = useState();
  //  alert(JSON.stringify(formData))

  const saveVendorData = () => {
    // alert(formData)
    if (formData === undefined) {
      alert("Please fill the fields");
    } else if (formData.txt_Name === undefined || formData.txt_Name === "") {
      setInvalidItem(true);
      setTxtItemNameErrorMessage("Name is mandatory");
    } else if (
      formData.txt_Address1 === undefined ||
      formData.txt_Address1 === ""
    ) {
      setInvalidAddress(true);
      setTxtAddressErrorMessage("Address is mandatory");
    } else if (formData.txt_Cell1 === undefined || formData.txt_Cell1 === "") {
      setInvalidCell(true);
      setTxtCellErrorMessage("Cell is mandatory");
    } else {
      alert(JSON.stringify(formData));
    }
    // alert("formData===>"+ JSON.stringify(formData))
    //     validateForm("txt_Code", formData.txt_Code);
    //     validateForm("txt_Name", formData.txt_Name);
    //     validateForm("txt_contactPerson", formData.txt_contactPerson);
    //     validateForm("txt_vendorGst", formData.txt_vendorGst);
    //     validateForm(
    //       "txt_Address1",
    //       formData.txt_Address1
    //     );
    //     validateForm("txt_Address2", formData.txt_Address2);
    //     validateForm("txt_Email1", formData.txt_Email1);
    //     validateForm("txt_Email2", formData.txt_Email2);
    //     validateForm("txt_Telephone1", formData.txt_Telephone1);
    //     validateForm("txt_Telephone2", formData.txt_Telephone2);
    //     validateForm("txt_Cell1", formData.txt_Cell1);
    //     validateForm("txt_Cell2", formData.txt_Cell2);
    //     setInvalidAddress(false)

    //    alert(formData.txt_Code)
  };
  const onCancelButton = (fieldName, value) => {
    navigate("/masters/vendor");
  };

  const validateForm = (fieldName, value) => {
    // alert(fieldName)

    switch (fieldName) {
      case "txt_Code":
        if (value !== undefined && value !== "")
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });

        break;
      case "txt_Name":
        // alert(fieldName)
        if (value !== "" && value !== undefined) {
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });
          setInvalidItem(false);
          setTxtItemNameErrorMessage("");
        }
        break;

      case "txt_contactPerson":
        if (value !== undefined && value !== "") break;
      case "txt_vendorGst":
        setFormData({ ...formData, [fieldName]: JSON.stringify(value) });
        break;
      case "txt_Address1":
        if (value !== "" && value !== undefined) {
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });
          setInvalidAddress(false);
          setTxtAddressErrorMessage("");
        }
        break;
      case "txt_Address2":
        if (value !== undefined && value !== "")
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });
        break;

      case "txt_Email1":
        if (value !== undefined && value !== "")
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });
        break;

      case "txt_Email2":
        if (value !== undefined && value !== "")
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });
        break;
      case "txt_Telephone1":
        if (value !== undefined && value !== "")
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });
        break;
      case "txt_Telephone2":
        if (value !== undefined && value !== "")
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });
        break;
      case "txt_Cell1":
        if (value !== "" && value !== undefined) {
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });
          setInvalidItem(false);
          setTxtItemNameErrorMessage("");
        }
        break;
      case "txt_Cell2":
        if (value !== undefined && value !== "")
          setFormData({ ...formData, [fieldName]: JSON.stringify(value) });

        break;

      default:
        break;
    }
  };

  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Vendor Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Input
                // required
                controlId="txt_Code"
                label="Code"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_Code", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <Input
                required
                controlId="txt_Name"
                label="Name"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_Name", inputValue);
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
                controlId="txt_contactPerson"
                label="Contact Person"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_contactPerson",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_vendorGst"
                label="Vendor GST"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_vendorGst", inputValue.currentTarget.value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_Address1"
                label="Address 1"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_Address1", inputValue);
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
            <Col>
              <Input
                // required
                controlId="txt_Address2"
                label="Address 2"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_Address2", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_Email1"
                label="Email 1 "
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_Email1", inputValue.currentTarget.value);
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
                controlId="txt_Email2"
                label="Email 2"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_Email2", inputValue.currentTarget.value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Input
                // required
                controlId="txt_Telephone1"
                label="Telephone 1"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_Telephone1",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_Telephone2"
                label="Telephone 2"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_Telephone2",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>
            <Col>
              <Input
                required
                controlId="txt_Cell1"
                label="Cell 1 "
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_Cell1", inputValue);
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
            <Col>
              <Input
                // required
                controlId="txt_code"
                label="Cell 2"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_Cell2", inputValue.currentTarget.value);
                }}
              />
            </Col>
          </Row>

          <Button
            type="button"
            // className="alignRight"
            onClick={() => {
                onCancelButton();
              }}
          >
            Cancle
          </Button>

          <Button
            type="button"
            className="alignRight"
            onClick={() => {
              saveVendorData();
            }}
          >
            Save
          </Button>
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
          <h6 className="title">Add Item</h6>
        </div>
        <Container className="step-progress-bar-div">
          <MultiStepProgressBar div={div} onDivNumberClick={nextDivNumber} />
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

export default CreateItem;
