import React,{useState, useEffect} from 'react'
import { Container,Card,Row,Col,Form,Button } from 'react-bootstrap';
import MultiStepProgressBar from '../CommonComponents/MultiStepProgressBar';
import { BiChevronLeft, BiUser } from "react-icons/bi";
import Input from '../CommonComponents/Input';
import Dropdown from '../CommonComponents/Dropdown';
import SingleDatePicker from '../CommonComponents/DatePicker';
import { useNavigate } from 'react-router-dom';

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
  const dropdownStatusOptions =[

    {id:1,
    value:'Active'},
    {
      id: 2,
      value:'Inactive'
    },
    {
      id:3,
      value:'Suspended'
    }
  ]
const noOfSteps=[1,2]
const DivOne = ({onButtonClick}) => {
  const handleOnChange = (value) => {};
  const [formData, setFormData] = useState([]);
    const [validateDivOne, setValidateDivOne] = useState(false);
    //for state dropdown
    const [invalidState, setInvalidState] = useState(true);
    const [dropdownStateErrorMessage, setDropdownStateErrorMessage] =
    useState("");
  // For City Dropdown
  const [dropdownCityErrorMessage, setDropdownCityErrorMessage] = useState("");
  const [invalidCity, setInvalidCity] = useState(true);
    // For Status
    const [dropdownStatusErrorMessage, setDropdownStatusErrorMessage] = useState("");
    const [invalidStatus, setInvalidStatus] = useState(true);
  //for customer id field
  const [customerIdErrorMessage, setCustomerIdErrorMessage] = useState("")
  const [invalidCustomerId, setInvalidCustomerId] = useState(true)
  //for customer name field
  const [customerNameErrorMessage, setCustomerNameErrorMessage] = useState("")
  const [invalidCustomerName, setInvalidCustomerName] = useState(true)
//for customer Number field
const [customerNoErrorMessage, setCustomerNoErrorMessage] = useState("")
const [invalidCustomerNo, setInvalidCustomerNo] = useState(true)
//for customer location field
const [dropdownAreaErrorMessage, setDropdownAreaErrorMessage] = useState("")
const [invalidCustomerArea, setInvalidCustomerArea] = useState(true)
const [customerPinCodeErrorMessage,setCustomerPinCodeErrorMessage] = useState('')
const[invalidCustomerPinCode, setInvalidCustomerPinCode] = useState(true)
    const addFieldsValues = (fieldName, value) => {
      setFormData({ ...formData, [fieldName]: value });
    };

    const validateForm =(fieldName, value)=>{

      switch(fieldName){
        case 'txt_CustomerId':
          
            if (value === undefined) {
              setInvalidCustomerId(true);
              setCustomerIdErrorMessage("Please Enter Customer Id");
            } else {
              addFieldsValues(fieldName, value);
              setInvalidCustomerId(false);
              setCustomerIdErrorMessage("");
              setValidateDivOne(true);
            }
            break;
            case 'txt_customer_name':
          
            if (value === undefined) {
              setInvalidCustomerName(true);
              setCustomerNameErrorMessage("Please Enter Customer Name");
            } else {
              addFieldsValues(fieldName, value);
              setInvalidCustomerName(false);
              setCustomerNameErrorMessage("");
              setValidateDivOne(true);
            }
            break;
            case 'txt_customer_no':
          
            if (value === undefined) {
              setInvalidCustomerNo(true);
              setCustomerNoErrorMessage("Please Enter Customer Number");
            } else {
              addFieldsValues(fieldName, value);
              setInvalidCustomerNo(false);
              setCustomerNoErrorMessage("");
              setValidateDivOne(true);
            }
            break;

            case 'drp_customer_Area':
            
            if (value === undefined) {
              setInvalidCustomerArea(true);
              setDropdownAreaErrorMessage("Please Enter Customer Area");
            } else {
              addFieldsValues(fieldName, value);
              setInvalidCustomerArea(false);
              setDropdownAreaErrorMessage("");
              setValidateDivOne(true);
            }
            break;
        case "drp_state":
        if (value === undefined) {
          setInvalidState(true);
          setDropdownStateErrorMessage("Please Select State");
        } else {
          addFieldsValues(fieldName, value);
          setInvalidState(false);
          setDropdownStateErrorMessage("");
          setValidateDivOne(true);
        }
        break;
        case 'drp_city':
          if (value === undefined) {
            setInvalidCity(true);
            setDropdownCityErrorMessage("Please Select City");
          } else {
            addFieldsValues(fieldName, value);
            setInvalidCity(false);
            setDropdownCityErrorMessage("");
            setValidateDivOne(true);
          }
          break;

        case 'drp_status':
          if (value === undefined) {
            setInvalidStatus(true);
            setDropdownStatusErrorMessage("Please Select Status");
          } else {
            addFieldsValues(fieldName, value);
            setInvalidStatus(false);
            setDropdownStatusErrorMessage("");
            setValidateDivOne(true);
          }
          break;

          case  'txt_customerPinCode':
            if (value === undefined) {
              setInvalidCustomerPinCode(true);
              setCustomerPinCodeErrorMessage("Please Enter Customer Pincode");
            } else {
              addFieldsValues(fieldName, value);
              setInvalidCustomerPinCode(false);
              setCustomerPinCodeErrorMessage("");
              setValidateDivOne(true);
            }
            break;
      }
    }
    const [date_of_birth, setDateOfBirth] = useState();
    return(
        <>
        <Card>
            <Card.Header className='cardHeader'>Customer Details</Card.Header>
            <Card.Body>
                <Row className='mb-3'>
                    <Col>
                    <Input
                    required
                    controlId='txt_CustomerId'
                    label='Code'
                    type='text'
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_CustomerId", inputValue);
                    }}
                    
                    />
                    {invalidCustomerId === true ?(
                       <Form.Text className="position-relative mandatoryField">
                       {customerIdErrorMessage}
                     </Form.Text>
                   ) : (
                     <></>
                    )}
                    </Col>
                    <Col>
                    <Input
                    required
                    controlId='txt_customer_name'
                    label ='Name'
                    type='text'
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_Customer_name", inputValue);
                    }}
                    />
                     {invalidCustomerName === true ?(
                       <Form.Text className="position-relative mandatoryField">
                       {customerNameErrorMessage}
                     </Form.Text>
                   ) : (
                     <></>
                    )}
                    </Col>
                    <Col>
                    <Input
                    required
                    controlId='txt_customer_no'
                    label='Mobile Number'
                    type='number'
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_Customer_no", inputValue);
                    }}
                    />
                     {invalidCustomerNo === true ?(
                       <Form.Text className="position-relative mandatoryField">
                       {customerNoErrorMessage}
                     </Form.Text>
                   ) : (
                     <></>
                    )}
                    </Col>
                    

                </Row>
                <Row className='mb-3'>
                   <Col>
              <Dropdown
              required
                label="State"
                controlId="drp_state"
                options={dropdownOptionsState}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_state", dropDownValue);
                }}
              />
              {invalidState === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownStateErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
            <Dropdown
              required
                label="City"
                controlId="drp_city"
                options={dropdownOptionsCity}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm('drp_city',dropDownValue)
                }}
              />

{invalidCity === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownCityErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>


            <Col>
                    <Dropdown
                    required
                    controlId='drp_customer_Area'
                    label='Area'
                    options={dropdownOptions}
                    onChangeInputHandler={(dropDownValue) => {
                      validateForm("drp_customer_Area", dropDownValue);
                    }}
                    />
                     {invalidCustomerArea === true ?(
                       <Form.Text className="position-relative mandatoryField">
                       {dropdownAreaErrorMessage}
                     </Form.Text>
                   ) : (
                     <></>
                    )}
                    </Col>

                </Row>

                <Row className='mb-3'>
                    <Col>
                    <SingleDatePicker
                required
                label="Startup Date"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
                    </Col>
                    <Col>
                    <SingleDatePicker
                required
                label="Closure Date"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
                    </Col>
                  <Col>
                  <Input
                    required
                    controlId='txt_customerPinCode'
                    label='Pin code'
                    type='text'
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_customerPinCode", inputValue);
                    }}
                    
                    />
                    {invalidCustomerPinCode === true ?(
                       <Form.Text className="position-relative mandatoryField">
                       {customerPinCodeErrorMessage}
                     </Form.Text>
                   ) : (
                     <></>
                    )}
                  </Col>
                </Row>
                <Row>
                  
                  <Col md={4}>
                    <Dropdown
              required
                label="Status"
                controlId="drp_status"
                options={dropdownStatusOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm('drp_status',dropDownValue)
                }}
              />

{invalidStatus === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownStatusErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
                    </Col>
                  
                </Row>
                <Button
                
                type="button"
                className="alignRight"
                onClick={() => {
                  if (validateDivOne === true) {
                    onButtonClick("divTwo");
                  } else {
                    validateForm('drp_state',formData.drp_state);
                    validateForm('drp_city',formData.drp_city)
                    validateForm('txt_CustomerId',formData.txt_CustomerId)
                    validateForm('txt_customer_name',formData.txt_customer_name)
                    validateForm('txt_customer_no',formData.txt_customer_no)
                    validateForm('drp_customer_Area',formData.drp_customer_Area)
                    validateForm('drp_status',formData.drp_status)
                    validateForm('txt_customerPinCode',formData.txt_customerPinCode)
                  }
                }}
                
                >
                  Next
                </Button>
            </Card.Body>
        </Card>
        </>
    )
}

const DivTwo = ({onButtonClick}) => {
    const [date_of_birth, setDateOfBirth] = useState();
    const handleOnChange = (value) => {};
    return(
        <Container>
            <Card>
                <Card.Header className='cardHeader'>Customer Representative Details</Card.Header>
                <Card.Body>
                    <Row className='mb-3'>
                        <Col>
                        <Input 
                        
                        controlId='txt_customerrep_name'
                        label='Customer Representative'
                        type='text'
                        />
                    
                        </Col>
                        <Col>
                        <SingleDatePicker
                
                label="Date of Birth"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
                        </Col>
                        <Col>
                        <Dropdown
              
                label="Department"
                controlId="drp_department"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue)
                }}
              />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Input 
                        
                        controlId='txt_customerrep_no'
                        label='Mobile Number'
                        type='number'
                        />
                        </Col>
                        <Col>
                        <Input 
                        
                        controlId='txt_customerrep_email'
                        label='Email'
                        type='email'
                        />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}


const CreateCustomer = () => {
  const navigate = useNavigate();
    const [div, setDiv] = useState('divOne');

    const nextDiv = (div) => {
        setDiv(div)
    };

    const nextDivNumber = (divNumber) =>{
        switch (divNumber) {
            case "1":
                setDiv("divOne");
                break;
              case "2":
                setDiv("divTwo");
                break;
        }
    };
  return (
    <Container>
         <div>
        <div className="titleDiv">
          <BiChevronLeft size={20} color={"var(--purple-color"} />
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Customer</h6>
        </div>
        <Container className='step-progress-bar-div'>
            <MultiStepProgressBar div={div} onDivNumberClick ={nextDivNumber} noOfSteps ={noOfSteps} />
            {{
                 divOne: <DivOne onButtonClick={nextDiv} />,
                 divTwo: <DivTwo onButtonClick={nextDiv} />,
            }
            [div]
            }

        </Container>
        </div>
    </Container>
  )
}

export default CreateCustomer