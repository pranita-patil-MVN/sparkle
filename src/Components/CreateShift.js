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

import placeholder from "../assets/Images/Placeholder.png";

const DivOne = ({ onButtonClick }) => {
  const handleOnChange = (value) => { };

  const [itemValue, setItemValue] = useState();
  const [itemNameErrorMessage, setTxtItemNameErrorMessage] = useState("");
  const [invalidItem, setInvalidItem] = useState(true);
  //   const [aadhar_number, setAadharNumber] = useState();

  //   const [txt_salutation_error_message, setTxtSalutationErrorMessage] =
  //     useState("");
  //   const [invalidSalutation, setInvalidSalutation] = useState(true);
  //   const [salutation, setSalutation] = useState();

  //   const [date_of_birth, setDateOfBirth] = useState();

  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case "txt_item":
        if (value === "" || value === undefined) {
          setInvalidItem(true);
          setTxtItemNameErrorMessage("Invalid Item.");
        } else {
          setItemValue(value)
          setInvalidItem(false);
          setTxtItemNameErrorMessage("");
          //   setValidateDivOne(true);
        }
        break;
      //   case "txt_aadhar_number":
      //     if (value === undefined || value.length < 12) {
      //       setInvalidAdhar(true);
      //       setTxtAadharNumberErrorMessage("Invalid Aadhar Number.");
      //     } else {
      //       setInvalidAdhar(false);
      //       setTxtAadharNumberErrorMessage("");
      //     }
      //     break;
      default:
        break;
    }
  };

  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Shift Details</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_item"
                label=" Shift"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_item", inputValue);
                }}
              />
            </Col>
            <Col>
              <Input
                required
                controlId="txt_code"
                label="Shift Start Time"
                type="time"
              // onChangeInputHandler={(inputValue) => {
              //   validateForm("txt_item", inputValue);
              // }}
              />
            </Col>
            <Col>
              <Input
                required
                label="Working Hours"
                type="text"
              onChangeInputHandler={(inputValue) => {
                validateForm("txt_item", inputValue);
              }}
              />
            </Col>
            <Col>
              <Input
                // required
                label="Break 1 Start"
                type="time"
              // onChangeInputHandler={(inputValue) => {
              //   validateForm("txt_item", inputValue);
              // }}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Input
                // required
                controlId="txt_code"
                label="Break 1 duration(Min)"
                type="time"
              // onChangeInputHandler={(inputValue) => {
              //   validateForm("txt_item", inputValue);
              // }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_code"
                label="Lunch Start"
                type="time"
              // onChangeInputHandler={(inputValue) => {
              //   validateForm("txt_item", inputValue);
              // }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_code"
                label="Lunch Duration(Min)"
                type="time"
              // onChangeInputHandler={(inputValue) => {
              //   validateForm("txt_item", inputValue);
              // }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="txt_code"
                label="Break 2 Start"
                type="time"
              // onChangeInputHandler={(inputValue) => {
              //   validateForm("txt_item", inputValue);
              // }}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Input
                // required
                controlId="txt_code"
                label="Break 2 Duration"
                type="time"
              // onChangeInputHandler={(inputValue) => {
              //   validateForm("txt_item", inputValue);
              // }}
              />
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>

          <Button
            type="button"
            className="alignLeft"
          >Save</Button>
          <Button
            type="button"
            className="alignLeft"
          >Cancel</Button>
        </Card.Body>
      </Card>
    </>
  );
};


const CreateShift = () => {
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
          <h6 className="title">Add Shift</h6>
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

export default CreateShift;
