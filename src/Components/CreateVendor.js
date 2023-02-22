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
import { BiChevronLeft, BiUser } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
const DivOne = ({ props }) => {
  const location = useLocation();

  var vendorDetails = location.state;
  // alert(vendorDetails);
  const [vendorData, setVendorData] = useState(vendorDetails);
  // useEffect(()=>{
  //   // alert(vendorData)

  // })

  const navigate = useNavigate();

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

  const [formData, setFormData] = useState([]);
  //  alert(JSON.stringify(formData))

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

  const saveVendorData = () => {
    // alert(JSON.stringify(formData));
    if (formData.txt_code === undefined || formData.txt_code === "") {
      setInvalidCode(true);
      setTxtCodeErrorMessage("Please enter code");
    } else if (formData.txt_name === undefined || formData.txt_name === "") {
      setInvalidItem(true);
      setTxtItemNameErrorMessage("Please enter name");
    } else if (
      formData.txt_address1 === undefined ||
      formData.txt_address1 === ""
    ) {
      setInvalidAddress(true);
      setTxtAddressErrorMessage("Please enter Address ");
    } else if (
      formData.txt_email1 === undefined ||
      formData.txt_email1 === ""
    ) {
      setInvalidEmail(true);
      setTxtEmailErrorMessage("Please enter email");
    } else if (formData.txt_cell1 === undefined || formData.txt_cell1 === "") {
      setInvalidCell(true);
      setTxtCellErrorMessage("Please enter cell");
    } else {
      alert(JSON.stringify(formData));
    }
  };
  const onCancelButton = () => {
    window.location.reload();
  };

  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case "txt_code":
        setInvalidCode(false);
        setTxtCodeErrorMessage("");
        // alert(JSON.stringify(value))
        setVendorData({ ...vendorData, [fieldName]: value });
        // if (value !== undefined && value !== "")
        setCode(value);
        // setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_name":
        setInvalidItem(false);
        // alert(JSON.stringify(vendorData))
        setTxtItemNameErrorMessage("");
        setCompany(value);
        // setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_contact_person":
        // alert(fieldName)
        // alert("Person")
        setContactPerson(value);
      // setFormData({ ...formData, [fieldName]: value });
      case "txt_vendor_gst":
        // alert("GST")
        // alert(fieldName)
        setVendorGst(value);
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_address1":
        setInvalidAddress(false);
        setTxtAddressErrorMessage("");
        setPrimaryAddress(value);
        // setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_address2":
        setSecondaryAddress(value);
        // setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_email1":
        setInvalidEmail(false);
        setTxtEmailErrorMessage("");
        setPrimaryEmail(value);
        // setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_email2":
        setSecondaryEmail(value);
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_telephone1":
        setPrimaryLandLine(value);
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_telephone2":
        setSecondaryLandLine(value);
        // setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_cell1":
        setInvalidCell(false);
        setTxtCellErrorMessage("");
        setPrimaryMobile(value);
        // setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_cell2":
        setSecondaryMobile(value);
        // setFormData({ ...formData, [fieldName]: value });

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
                required
                controlId="txt_code"
                label="Code"
                type="text"
                value={code}
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
            <Col>
              <Input
                // required
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
                controlId="txt_email2"
                label="Secondary Email"
                type="text"
                value={secondaryEmail}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_email2", inputValue.currentTarget.value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
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
            <Col>
              <Input
                // required
                controlId="txt_cell2"
                label="Secondary Mobile No."
                type="text"
                value={SecondaryMobile}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_cell2", vendorData.cell);
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
