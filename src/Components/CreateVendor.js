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
import { BiChevronLeft, BiUser } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
const DivOne = ({ onButtonClick }) => {
  const navigate = useNavigate();
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

  const [formData, setFormData] = useState([]);
  //  alert(JSON.stringify(formData))

  const saveVendorData = () => {
    // alert(formData)
    if (formData.txt_Name === undefined || formData.txt_Name === "") {
      setInvalidItem(true);
      setTxtItemNameErrorMessage("Please enter name");
    } else if (formData.txt_Address1 === undefined || formData.txt_Address1 === "") {
      setInvalidAddress(true);
      setTxtAddressErrorMessage("Please enter Address ");
    } else if (formData.txt_Cell1 === undefined || formData.txt_Cell1 === "") {
      setInvalidCell(true);
      setTxtCellErrorMessage("Please enter cell");
    } else {
      alert(JSON.stringify(formData));
    }
  };
  const onCancelButton = () => {
   window.location.reload()
  };

  const validateForm = (fieldName, value) => {
    // alert(fieldName)

    switch (fieldName) {
      case "txt_Code":
        // if (value !== undefined && value !== "")
        setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_Name":
        // alert(fieldName)
        // if (value !== "" && value !== undefined) {
        setInvalidItem(false);
        setTxtItemNameErrorMessage("");
        setFormData({ ...formData, [fieldName]: value });

        // }
        break;

      case "txt_contactPerson":
        setFormData({ ...formData, [fieldName]: value });
      case "txt_vendorGst":
        setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_Address1":
        setInvalidAddress(false);
        setTxtAddressErrorMessage("");
        setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_Address2":
        setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_Email1":
        setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_Email2":
        setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_Telephone1":
        setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_Telephone2":
        setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_Cell1":
        setInvalidItem(false);
        setTxtItemNameErrorMessage("");
        setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_Cell2":
        setFormData({ ...formData, [fieldName]: value });

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

const CreateVendor = () => {
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
