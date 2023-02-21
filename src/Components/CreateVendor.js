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

  const [code, setCode] = useState([]);
  const [formData, setFormData] = useState([]);
  //  alert(JSON.stringify(formData))

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
        setVendorData({...vendorData, [fieldName]: value})
        // if (value !== undefined && value !== "")
        setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_name":
        setInvalidItem(false);
        // alert(JSON.stringify(vendorData))
        setTxtItemNameErrorMessage("");
        setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_contact_person":
        setFormData({ ...formData, [fieldName]: value });
      case "txt_vendorGst":
        setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_address1":
        setInvalidAddress(false);
        setTxtAddressErrorMessage("");
        setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_address2":
        setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_email1":
        setInvalidEmail(false);
        setTxtEmailErrorMessage("");
        setFormData({ ...formData, [fieldName]: value });
        break;

      case "txt_email2":
        setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_telephone1":
        setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_telephone2":
        setFormData({ ...formData, [fieldName]: value });
        break;
      case "txt_cell1":
        setInvalidCell(false);
        setTxtCellErrorMessage("");
        setFormData({ ...formData, [fieldName]: value });

        break;
      case "txt_cell2":
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
        {vendorData !== undefined && vendorData !== null ? (
          <Card.Body>
            <Row className="mb-3">
              <Col>
                <Input
                  required
                  controlId="txt_code"
                  label="Code"
                  type="text"
                  value={vendorData.code}
                  key="txt_code"
                  // value={vendorData.code?  vendorData.code: code}
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
                  key="txt_name"
                  // editable= {true}
                  value={vendorData.company}
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
                  key="txt_contact_person"
                  defaultValue={vendorData.contact_person}
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
                  key="txt_vendor_gst"
                  value={vendorData.vendorGst}
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
                  key="txt_address1"
                  value={vendorData.address}
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
                  key="txt_address2"
                  value={vendorData.addressSecond}
                  onChangeInputHandler={(inputValue) => {
                    validateForm(
                      "txt_address2",
                      inputValue.currentTarget.value
                    );
                  }}
                />
              </Col>
              <Col>
                <Input
                  // required
                  controlId="txt_email1"
                  label="Primary Email"
                  type="text"
                  key="txt_email1"
                  value={vendorData.email}
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
                  key="txt_email2"
                  value={vendorData.email2}
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
                  key="txt_telephone1"
                  value={vendorData.mobile}
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
                  key="txt_telephone2"
                  value={vendorData.mobile2}
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
                  key="txt_cell1"
                  value={vendorData.cell1}
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
                  key="txt_cell2"
                  value={vendorData.cell2}
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
        ) : (
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_code"
                label="Code"
                type="text"
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
                onChangeInputHandler={(inputValue) => {
                  // alert(inputValue)
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
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_cell2", inputValue.currentTarget.value);
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
         )} 
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
