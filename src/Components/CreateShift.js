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
import "../css/shift.css"
import MultiStepProgressBar from "../CommonComponents/MultiStepProgressBar";
// import Dropdown from "../CommonComponents/Dropdown";
import Input from "../CommonComponents/Input";
// import RadioButton from "../CommonComponents/RadioButtons";
// import TextArea from "../CommonComponents/TextArea";
import { BiChevronLeft, BiUser } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment/moment";

// import placeholder from "../assets/Images/Placeholder.png";

const DivOne = ({ onButtonClick }) => {
  // const handleOnChange = (value) => { };

  const location = useLocation()

  var shiftDetails = location.state
  const [shiftData, setShiftData] = useState(shiftDetails)

  // const [itemValue, setItemValue] = useState();
  // const [itemNameErrorMessage, setTxtItemNameErrorMessage] = useState("");

  // const [invalidItem, setInvalidItem] = useState(true);
  const [formData, setFormData] = useState([]);

  const [invalidShift, setInvalidShift] = useState(false);
  const [shiftErrorMessage, setShiftErrorMessage] = useState("")

  const [workingHours, setWorkingHours] = useState(false)
  const [workingHoursErrorMessage, setWorkingHoursErrorMessage] = useState("")

  const [invalidShtiftTime, setInvalidShiftTime] = useState(false)
  const [invalidShtiftTimeErrMsg, setInvalidShtiftTimeErrMsg] = useState("")

  const [invalidShiftEndTime, setInvalidShiftEndTime] = useState(false)
  const [invalidShtiftEndErrMsg, setInvalidShtiftEndErrMsg] = useState("")

  const [invalidBreakOneStart, setInvalidBreakOneStart] = useState(false)
  const [invalidBreakOneStartErrMsg, setInvalidBreakOneStartErrMsg] = useState("")

  const [invalidBreakTwoStart, setInvalidBreakTwoStart] = useState(false)
  const [invalidBreakTwoStartErrMsg, setInvalidBreakTwoStartErrMsg] = useState("")

    const [startTime, setstartTime] = useState();
    const [endTime, setEndTime] = useState();

  //   const [txt_salutation_error_message, setTxtSalutationErrorMessage] =
  //     useState("");
  //   const [invalidSalutation, setInvalidSalutation] = useState(true);
  //   const [salutation, setSalutation] = useState();

  //   const [date_of_birth, setDateOfBirth] = useState();

  const [shift, setShift] = useState(
    shiftData === undefined || shiftData == null ? null : shiftData.shift
  );

  const [shiftTime, setShiftTime] = useState(
    shiftData === undefined || shiftData == null ? null : shiftData.shift_start_time
  );

  const [workingHrs, setWorkingHrs] = useState(
    shiftData === undefined || shiftData == null ? null : shiftData.working_hrs
  );

  const [shiftEndTime, setShiftEndTime] = useState(
    shiftData === undefined || shiftData == null ? null : shiftData.shift_end_time
  );

  const addFieldsValues = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case "txt_shift":
        // if (value === "" || value === undefined) {
        //   setInvalidShift(true)
        //   setShiftErrorMessage("Please enter a shift.")
        // } else {
        // addFieldsValues(fieldName, value);
        setInvalidShift(false)
        setShiftErrorMessage("")
        setShift(value)
        setFormData({
          ...formData,
          [fieldName]: value
        });
        // setValidateDivOne(true)
        // }

        break;
      case "tpick_shift_start_time":
        // if (value === "" || value === undefined) {
        //   setInvalidShtiftTimeErrMsg(true)
        //   setInvalidShtiftTimeErrMsg("Please select a valid time.")
        // } else {
        // alert(tpick_shift_start_time)
        setInvalidShiftTime(false)
        setInvalidShtiftTimeErrMsg("")
        setShiftTime(value)
        setFormData({
          ...formData,
          [fieldName]: value
        });
        // setValidateDivOne(true)
        // }
        break;
      case "tpick_shift_end_time":
        setInvalidShiftEndTime(false)
        setInvalidShtiftEndErrMsg("")
        setShiftEndTime(value)
        setFormData({
          ...formData,
          [fieldName]: value
        });
        break;
      case "txt_working_hours":
        // if(value === "" || value === undefined) {
        //   setWorkingHours(true)
        //   setWorkingHoursErrorMessage("Please enter valid working hours.")
        // } else {  
        setWorkingHours(false)
        setWorkingHoursErrorMessage("")
        setWorkingHrs(value)
        setFormData({
          ...formData,
          [fieldName]: value
        });
        // setValidateDivOne(true)
        // } 
        break;
      case "tpick_break_1_start":
        setFormData({
          ...formData,
          [fieldName]: value
        });
        break;
      case "tpick_break_1_duration":
        setFormData({
          ...formData,
          [fieldName]: value
        });
        break;
      case "tpick_lunch_start":
        setFormData({
          ...formData,
          [fieldName]: value
        });
        break;
      case "tpick_lunch_duration":
        setFormData({
          ...formData,
          [fieldName]: value
        });
        break;
      case "tpick_break_2_start":
        setFormData({
          ...formData,
          [fieldName]: value
        });
        break;
      case "tpick_break_2_duration":
        setFormData({
          ...formData,
          [fieldName]: value
        });
        break;

      default:
    }
  };

  const getShiftData = () => {
    // alert(formData.txt_shift)
    if (formData.txt_shift === undefined || formData.txt_shift === "") {
      setInvalidShift(true)
      setShiftErrorMessage("Shift name is required.")
    } else if (formData.tpick_shift_start_time === undefined || formData.tpick_shift_start_time === "") {
      setInvalidShiftTime(true)
      setInvalidShtiftTimeErrMsg("Shift start time is required.")
    } else if (formData.tpick_shift_end_time === undefined || formData.tpick_shift_end_time === "") {
      setInvalidShiftEndTime(true)
      setInvalidShtiftEndErrMsg("Shift end time is required.")
    }
    else if (formData.txt_working_hours === undefined || formData.txt_working_hours === "") {
      setWorkingHours(true)
      setWorkingHoursErrorMessage("Working hours are required.")
    }
    else {
      alert(JSON.stringify(formData))
    }
  }
  const navigate = useNavigate();
  
  // const startShiftTimeValidation = moment().set({ 'hour': splitedHour, 'minute': splitedMinute })
  // alert(startShiftTimeValidation)
  // alert(myArray1[4])
  // alert(startShiftTimeValidation)

  // const endShiftTimeValidation = moment().set({ 'hour': 12, 'minute': 24 })
  // var myArrString = endShiftTimeValidation.toString()
  // const myArray = myArrString.split(" ")
  // alert(myArray[4])
  // alert((endShiftTimeValidation.toString()))

  const onClickOfSave = () =>{
    var startShiftTimeValidation
    var endShiftTimeValidation
    if (formData.tpick_shift_start_time !== undefined ){
      var myArrString = formData.tpick_shift_start_time
      // alert('====>'+(myArrString))
      const myArray1 = myArrString.split(":")
      // var split = myArray1.split(",")
      // alert('====>123==>'+myArray1[0])
      // var splitData = myArray1[4]
      //  var split = splitData.split(":")
       var splitedHour = myArray1[0]
       var splitedMinute = myArray1[1]
      //  alert(splitedMinute)
       startShiftTimeValidation = moment().set({ 'hour': splitedHour, 'minute': splitedMinute })
      // setstartTime(startShiftTimeValidation)
      // alert(startShiftTimeValidation)
    }
    if (formData.tpick_shift_end_time !== undefined ){
      var myArrString = formData.tpick_shift_end_time
      // alert('====>'+(myArrString))
      const myArray1 = myArrString.split(":")
      // var split = myArray1.split(",")
      // alert('====>123==>'+myArray1[0])
      // var splitData = myArray1[4]
      //  var split = splitData.split(":")
       var splitedHour = myArray1[0]
       var splitedMinute = myArray1[1]
  //      alert(splitedMinute)
       endShiftTimeValidation = moment().set({ 'hour': splitedHour, 'minute': splitedMinute })
  // setEndTime(endShiftTimeValidation)
      // alert(endShiftTimeValidation)
    }
   
    const differenceBtwnStartAndEndTime = moment(startShiftTimeValidation).isBefore(endShiftTimeValidation)
    alert(differenceBtwnStartAndEndTime)
  }
  
  // const goToBackPage = () => {
  //   navigate(-1);
  // }
  return (
    <>
      {" "}
      <Card>
        <Card.Header className="cardHeader">Shift Details</Card.Header>
        <Card.Body className="formScrollbar">
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_shift"
                label=" Shift"
                type="text"
                value={shift}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_shift", inputValue);
                }}
              />
              {invalidShift === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {shiftErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Input
                required
                controlId="tpick_shift_start_time"
                label="Shift start time"
                type="time"
                value={shiftTime}
                onChangeInputHandler={(inputValue) => {
                  validateForm("tpick_shift_start_time", inputValue);
                }}
              />
              {invalidShtiftTime === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {invalidShtiftTimeErrMsg}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Input
                required
                controlId="tpick_shift_end_time"
                label="Shift end time"
                type="time"
                value={shiftEndTime}
                onChangeInputHandler={(inputValue) => {
                  validateForm("tpick_shift_end_time", inputValue);
                }}
              />
              {invalidShiftEndTime === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {invalidShtiftEndErrMsg}
                </Form.Text>
              ) : (<></>)}
            </Col>
            <Col>
              <Input
                required
                controlId="txt_working_hours"
                label="Working hours"
                type="text"
                value={workingHrs}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_working_hours", inputValue);
                }}
              />
              {workingHours === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {workingHoursErrorMessage}
                </Form.Text>
              ) : (<></>)}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Input
                // required
                controlId="tpick_break_1_start"
                label="Break 1 Start"
                type="time"
                onChangeInputHandler={(inputValue) => {
                  validateForm("tpick_break_1_start", inputValue.currentTarget.value);
                }}
              />
              {invalidBreakOneStart === true ? (
                invalidShift << invalidBreakOneStart
              ) : (<>{false}</>)}
            </Col>
            <Col>
              <Input
                // required
                controlId="tpick_break_1_duration"
                label="Break 1 duration(Min)"
                type="time"
                onChangeInputHandler={(inputValue) => {
                  validateForm("tpick_break_1_duration", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="tpick_lunch_start"
                label="Lunch Start"
                type="time"
                onChangeInputHandler={(inputValue) => {
                  validateForm("tpick_lunch_start", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="tpick_lunch_duration"
                label="Lunch Duration(Min)"
                type="time"
                onChangeInputHandler={(inputValue) => {
                  validateForm("tpick_lunch_duration", inputValue.currentTarget.value);
                }}
              />
            </Col>

          </Row>

          <Row className="mb-3">
            <Col>
              <Input
                // required
                controlId="tpick_break_2_start"
                label="Break 2 Start"
                type="time"
                onChangeInputHandler={(inputValue) => {
                  validateForm("tpick_break_2_start", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <Input
                // required
                controlId="tpick_break_2_duration"
                label="Break 2 Duration"
                type="time"
                onChangeInputHandler={(inputValue) => {
                  validateForm("tpick_break_2_duration", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>

          <div className="d-flex justify-content-end formBtn">
            <Button
              type="button"
              className="alignLeft mr-5"
              onClick={() => {
                // getShiftData();
                // alert(getShiftData())
                onClickOfSave()
                }}
            >Save</Button>
            <Button
              type="button"
              className="alignRight"
              onClick={() => navigate(-1)}
            >Cancel</Button>
          </div>
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

  const navigate = useNavigate();

  // const goToBackPage = () => {
  //   navigate(-1);
  // }
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
          <BiChevronLeft size={20}
            color={"var(--purple-color"}
            onClick={() => navigate(-1)}
          />
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Add Shift</h6>
        </div>
        <Container className="step-progress-bar-div">
          {/* <MultiStepProgressBar div={div} onDivNumberClick={nextDivNumber} /> */}
          {
            {
              divOne: <DivOne />,
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
