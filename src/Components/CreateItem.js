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
    const handleOnChange=(value)=>{};

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
        if (value === "" ||value === undefined) {
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
        <Card.Header className="cardHeader">Personal Details</Card.Header>
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
                  validateForm("txt_code", inputValue);
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
                  handleOnChange(dropDownValue);
                }}
              />
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
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col>
                  <RadioButton
                    controlId=""
                    label="Apply Deduction"
                    options={["Yes", "No"]}
                  />
                </Col>
                 <Col>
                 <Dropdown
                    required
                    label="Unit of Measure"
                    controlId="drp_measurement_unit"
                    options={dropdownMeasurementUnitsOptions}
                    onChangeDropDownHandler={(dropDownValue) => {
                      handleOnChange(dropDownValue);
                    }}
                  />
                </Col>
                <Col>
              <Input
                controlId="txt_make"
                label="Make"
                type="textArea"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_information", inputValue);
                }}
              />
            </Col>
              </Row>
         
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="text_rate"
                label="Rate(₹)"
                type="text"
                onChangeInputHandler={(inputValue) => {}}
              />
            </Col>
            <Col>
              <Row>
                <Col xl={4} lg={4} md={4}>
                  <Input
                    // required
                    controlId="text_cgst"
                    label="CGST(%)"
                    type="text"
                    onChangeInputHandler={(inputValue) => {}}
                  />
                </Col>
                <Col xl={4} lg={4} md={4}>
                  <Input
                    // required
                    controlId="text_sgst"
                    label="SGST(%)"
                    type="text"
                    onChangeInputHandler={(inputValue) => {}}
                  />
                </Col>
                <Col xl={4} lg={4} md={4}>
                  <Input
                    // required
                    controlId="text_igst"
                    label="IGST(%)"
                    type="text"
                    onChangeInputHandler={(inputValue) => {}}
                  />
                </Col>
              </Row>
            </Col>

            <Col>
              <Input
                // required
                controlId="text_hsn/sac"
                label="HSN/SAC"
                type="email"
                onChangeInputHandler={(inputValue) => {}}
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
                    handleOnChange("txt_remark", inputValue);
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
                    handleOnChange("txt_information", inputValue);
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
             
                validateForm("txt_item", itemValue);
                // validateForm("txt_first_name");
                // validateForm("txt_middle_name");
                // validateForm("txt_last_name");
                // validateForm("txt_aadhar_number", aadhar_number);
              
            }}
          >
            Save
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

// const DivTwo = ({ onButtonClick }) => {
//   const [date_of_birth, setDateOfBirth] = useState();

//   const handleOnChange = (value) => {};
//   return (
//     <>
//       {" "}
//       <Card>
//         <Card.Header className="cardHeader">Job Details</Card.Header>
//         <Card.Body>
//           <Row className="mb-3">
//             <Col>
//               <RadioButton
//                 controlId=""
//                 label="Previous Employer"
//                 options={["Yes", "No"]}
//               />
//             </Col>
//             <Col>
//               <Input
//                 controlId="txt_years_of_experience"
//                 label="Years of experience"
//                 type="number"
//                 onChangeInputHandler={(inputValue) => {}}
//               />
//             </Col>
//             <Col>
//               <SingleDatePicker
//                 required
//                 label="Joining Date"
//                 value={date_of_birth}
//                 onChangeDateHandler={(inputValue) => {}}
//               />
//             </Col>
//             <Col>
//               <Dropdown
//                 label="Designation"
//                 controlId="drp_designation"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//           </Row>
//           <Row className="mb-3">
//             <Col>
//               <Input
//                 controlId="txt_temp_code"
//                 label="Temporary Code"
//                 type="text"
//                 onChangeInputHandler={(inputValue) => {}}
//               />
//             </Col>
//             <Col>
//               <Input
//                 controlId="txt_permanant_code"
//                 label="Permanant Code"
//                 type="text"
//                 onChangeInputHandler={(inputValue) => {}}
//               />
//             </Col>
//             <Col>
//               <Dropdown
//                 label="Role"
//                 controlId="drp_role"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//             <Col>
//               <Dropdown
//                 label="Department"
//                 controlId="drp_department"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//           </Row>
//           <Row className="mb-3">
//             <Col>
//               <Dropdown
//                 required
//                 label="Site"
//                 controlId="drp_site"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//             <Col>
//               <Row>
//                 <Col>
//                   <RadioButton
//                     controlId=""
//                     label="Allow Login"
//                     options={["Yes", "No"]}
//                   />
//                 </Col>
//                 <Col>
//                   <Dropdown
//                     required
//                     label="Status"
//                     controlId="drp_status"
//                     options={dropdownOptions}
//                     onChangeDropDownHandler={(dropDownValue) => {
//                       handleOnChange(dropDownValue);
//                     }}
//                   />
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//           <Button type="button" onClick={() => onButtonClick("divOne")}>
//             Back
//           </Button>
//           <Button
//             type="button"
//             className="alignRight"
//             onClick={() => {
//               onButtonClick("divThree");
//             }}
//           >
//             Next
//           </Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// const DivThree = ({ onButtonClick }) => {
//   const handleOnChange = (value) => {};
//   return (
//     <>
//       {" "}
//       <Card>
//         <Card.Header className="cardHeader">Address Details</Card.Header>
//         <Card.Body>
//           <Row className="mb-3">
//             <Col>
//               <Input
//                 controlId="txt_temp_address"
//                 label="Temporary Address"
//                 type="textarea"
//                 onChangeInputHandler={(inputValue) => {}}
//               />
//             </Col>
//             <Col>
//               <Dropdown
//                 label="State"
//                 controlId="drp_state"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//             <Col>
//               <Dropdown
//                 label="City"
//                 controlId="drp_city"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//             <Col>
//               <Col>
//                 <Input
//                   controlId="txt_temp_pincode"
//                   label="Pin code"
//                   type="text"
//                   onChangeInputHandler={(inputValue) => {}}
//                 />
//               </Col>
//             </Col>
//           </Row>
//           <Row className="mb-3">
//             <Col>
//               <Col>
//                 <RadioButton
//                   controlId=""
//                   label=""
//                   options={["Same As temporary"]}
//                 />
//               </Col>
//             </Col>
//             <Col></Col>
//             <Col></Col>
//             <Col></Col>
//           </Row>
//           <Row className="mb-3">
//             <Col>
//               <Input
//                 controlId="txt_temp_address"
//                 label="Temporary Address"
//                 type="textarea"
//                 onChangeInputHandler={(inputValue) => {}}
//               />
//             </Col>
//             <Col>
//               <Dropdown
//                 label="State"
//                 controlId="drp_state"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//             <Col>
//               <Dropdown
//                 label="City"
//                 controlId="drp_city"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//             <Col>
//               <Col>
//                 <Input
//                   controlId="txt_temp_pincode"
//                   label="Pin code"
//                   type="text"
//                   onChangeInputHandler={(inputValue) => {}}
//                 />
//               </Col>
//             </Col>
//           </Row>
//           <Button type="button" onClick={() => onButtonClick("divTwo")}>
//             Back
//           </Button>
//           <Button
//             type="button"
//             className="alignRight"
//             onClick={() => onButtonClick("divFour")}
//           >
//             Next
//           </Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// const DivFour = ({ onButtonClick }) => {
//   const handleOnChange = (value) => {};
//   return (
//     <>
//       {" "}
//       <Card>
//         <Card.Header className="cardHeader">Other Details</Card.Header>
//         <Card.Body>
//           <Row className="mb-3">
//             <Col>
//               <Dropdown
//                 label="Blood Group"
//                 controlId="drp_blood_group"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//             <Col>
//               <Input
//                 controlId="txt_height"
//                 label="Height(Cm)"
//                 type="number"
//                 onChangeInputHandler={(inputValue) => {}}
//               />
//             </Col>
//             <Col>
//               <Input
//                 controlId="txt_weight"
//                 label="Weight(Kg)"
//                 type="number"
//                 onChangeInputHandler={(inputValue) => {}}
//               />
//             </Col>
//             <Col>
//               <Input
//                 controlId="txt_mother_tongue"
//                 label="Mother Tongue"
//                 type="text"
//                 onChangeInputHandler={(inputValue) => {}}
//               />
//             </Col>
//           </Row>
//           <Row className="mb-3">
//             <Col>
//               <Input
//                 controlId="txt_nominee"
//                 label="Nominee"
//                 type="text"
//                 onChangeInputHandler={(inputValue) => {}}
//               />
//             </Col>
//             <Col>
//               <Dropdown
//                 label="Relation"
//                 controlId="drp_relation"
//                 options={dropdownOptions}
//                 onChangeDropDownHandler={(dropDownValue) => {
//                   handleOnChange(dropDownValue);
//                 }}
//               />
//             </Col>
//             <Col></Col>
//             <Col></Col>
//           </Row>
//           <Button type="button" onClick={() => onButtonClick("divTwo")}>
//             Back
//           </Button>
//           <Button
//             type="button"
//             className="alignRight"
//             onClick={() => onButtonClick("divFive")}
//           >
//             Save
//           </Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// const DivFive = ({ onButtonClick }) => {
//   return (
//     <>
//       {" "}
//       <Card>
//         <Card.Header className="cardHeader">Documents</Card.Header>
//         <Card.Body>
//           <Row className="mb-3">
//             <Col>
//               <Figure>
//                 <Figure.Image width={171} height={180} src={placeholder} />
//                 <Figure.Caption>
//                   Photo<sup className="mandatoryField">*</sup>
//                 </Figure.Caption>
//               </Figure>
//             </Col>
//             <Col>
//               <Figure>
//                 <Figure.Image width={171} height={180} src={placeholder} />
//                 <Figure.Caption>
//                   Joining Form<sup className="mandatoryField">*</sup>
//                 </Figure.Caption>
//               </Figure>
//             </Col>
//             <Col>
//               <Figure>
//                 <Figure.Image width={171} height={180} src={placeholder} />
//                 <Figure.Caption>PAN Card</Figure.Caption>
//               </Figure>
//             </Col>
//           </Row>
//           <Row className="mb-3">
//             <Col>
//               <Figure>
//                 <Figure.Image width={171} height={180} src={placeholder} />
//                 <Figure.Caption>
//                   Aadhar Card Front<sup className="mandatoryField">*</sup>
//                 </Figure.Caption>
//               </Figure>
//             </Col>
//             <Col>
//               <Figure>
//                 <Figure.Image width={171} height={180} src={placeholder} />
//                 <Figure.Caption>
//                   Aadhar Card Back<sup className="mandatoryField">*</sup>
//                 </Figure.Caption>
//               </Figure>
//             </Col>
//             <Col>
//               <Figure>
//                 <Figure.Image width={171} height={180} src={placeholder} />
//                 <Figure.Caption>Bank Passbook</Figure.Caption>
//               </Figure>
//             </Col>
//           </Row>

//           <Button type="button" onClick={() => onButtonClick("divFour")}>
//             Back
//           </Button>
//           <Button
//             type="button"
//             className="alignRight"
//             onClick={() => console.log("div 5 clicked")}
//           >
//             Save
//           </Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };
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
