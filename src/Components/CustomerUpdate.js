import React,{useState, useEffect} from 'react'
import { Container,Card,Row,Col,Form,Button,InputGroup } from 'react-bootstrap';
import MultiStepProgressBar from '../CommonComponents/MultiStepProgressBar';
import { BiChevronLeft, BiUser } from "react-icons/bi";
import Input from '../CommonComponents/Input';
import Dropdown from '../CommonComponents/Dropdown';
import SingleDatePicker from '../CommonComponents/DatePicker';
import { useNavigate,useLocation} from 'react-router-dom';
import Checkbox from '../CommonComponents/Checkbox';
import RadioButton from '../CommonComponents/RadioButtons';
import TextArea from '../CommonComponents/TextArea';
import axios from 'axios';
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
const noOfSteps = [1,2]
;const DivOne = ({props}) => {
    
    const [item,setItem] =useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [checkedItem, setCheckedItem] = useState([])
    const [filteredList,setFilteredList] = useState([])
    const [search, setSearch] = useState("");
    const getCustomer = async () => {
        try {
          const response = await axios.get('https://mocki.io/v1/d1f404a4-9af0-450e-99b6-111ac045377a');
           setItem(response.data);
          setFilteredItems(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(()=>{
        getCustomer();
    })

    const location = useLocation();

    var customerDetails = location.state;
    const [customerData,setCustomerData] =useState(customerDetails);
    const[formData,setFormData] = useState([]);
    const navigate = useNavigate();
    const handleOnChange = (value) => {};
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

    //for fields
    const [code, setCode] = useState(
        customerData === undefined || customerData === null ? null : customerData.code
      );

    const [customerName,setCustomerName] = useState(
        customerData === undefined || customerData === null ? null : customerData.Customer
    )
    const [area, setArea] = useState(
        customerData === undefined || customerData === null ? null : customerData.Area
      );

      const [state, setState] = useState(
        customerData === undefined || customerData === null ? null : customerData.state
      );

      const [city, setCityData] = useState(
        customerData === undefined || customerData === null ? null : customerData.city
      );

      const [pincode, setPincode] = useState(
        customerData === undefined || customerData === null ? null : customerData.pinCode
      );

      const [mobileno,setMobileNo] = useState(
        customerData === undefined || customerData === null ? null : customerData.Mobile
      )

      const [ status,setStatus] = useState(
        customerData === undefined || customerData === null ? null : customerData.Status
      )

      const [starterDate,setStarterDate] = useState(
        customerData === undefined || customerData === null ? null : customerData.Starter_date
      )

      const [closerDate,setCloserDate] = useState(
        customerData === undefined || customerData === null ? null : customerData.Closer_date
      )
let arr = [];
var secondArr= [];

const validateForm = (fieldName, value)=>{

switch (fieldName){
    case 'txt_CustomerId':
        setFormData({...formData,[fieldName]:value})
        setInvalidCustomerId(false);
        setCustomerIdErrorMessage('')

        break;

    case 'txt_customer_name':
        setFormData({...formData,[fieldName]:value})
        setInvalidCustomerName(false);
        setCustomerNameErrorMessage('')
        break;
    case 'txt_customer_no':
        setFormData({...formData,[fieldName]:value})
        setInvalidCustomerNo(false);
        setCustomerNoErrorMessage('')
    case 'drp_city':
        setFormData({...formData,[fieldName]:value})
        setInvalidCity(false);
        setDropdownCityErrorMessage('')
        break;
    case 'drp_state':   
        setFormData({...formData,[fieldName]:value})
        setInvalidState(false);
        setDropdownStateErrorMessage('');
        break;
    case'drp_customer_Area':
    setFormData({...formData,[fieldName]:value})
    setInvalidCustomerArea(false);
    setDropdownAreaErrorMessage('');
    break;
    case 'drp_status':
        setFormData({...formData,[fieldName]:value})
        setInvalidStatus(false);
        setDropdownStatusErrorMessage('');
        break;
    case 'txt_pincode':
        setFormData({...formData,[fieldName]:value});
        setInvalidCustomerPinCode(false);
        setCustomerPinCodeErrorMessage('');
        break;
    default:
        break;

}
}
      const getSiteData = () => {
        
        if(formData.txt_CustomerId == undefined || formData.txt_CustomerId == ''){
           
                setInvalidCustomerId(true);
                setCustomerIdErrorMessage('Please enter code')
        } else if(formData.txt_customer_name == undefined || formData.txt_customer_name == ''){
            setInvalidCustomerName(true);
            setCustomerNameErrorMessage('Please enter Name')
    }
    else if(formData.txt_customer_no == undefined || formData.txt_customer_no == ''){
        setInvalidCustomerNo(true);
        setCustomerNoErrorMessage('Please enter Number')
}else if(formData.drp_state == undefined || formData.drp_state == ''){
    setInvalidState(true);
    setDropdownStateErrorMessage('Please enter State')
}else if(formData.drp_city == undefined || formData.drp_city == ''){
    setInvalidCity(true);
    setDropdownCityErrorMessage('Please enter City')
} else if(formData.drp_customer_Area == undefined || formData.drp_customer_Area == ''){
    setInvalidCustomerArea(true);
    setDropdownAreaErrorMessage('Please enter Area')
} 
else if(formData.drp_status == undefined || formData.drp_status == ''){
    setInvalidState(true);
    setDropdownStatusErrorMessage('Please enter Status')
}else if(formData.txt_pincode == undefined || formData.txt_pincode == ''){
    setInvalidCustomerPinCode(true);
    setCustomerPinCodeErrorMessage('Please enter Pincode')
}
else {
    
    let sessionData = sessionStorage.getItem('add_customer');
    let parsedJson = JSON.parse(sessionData);
    arr.push(parsedJson);
    alert(JSON.stringify(formData))
    secondArr.push(formData);
    const allData = arr.concat(secondArr);
    sessionStorage.removeItem("add_customer");
}
      }
      return (
        <>
        {" "}
        <Card>
            <Card.Header className='cardHeader'>Customer Details</Card.Header>
            <Card.Body className='formScrollbar'>
                <Row className='mb-3'>
                <Col>
                    <Input
                    required
                    controlId='txt_CustomerId'
                    value={code}
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
                    value={customerName}
                    label ='Name'
                    type='text'
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_customer_name", inputValue);
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
                    value={mobileno}
                    label='Mobile Number'
                    type='number'
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_customer_no", inputValue);
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
                value={state==null ? '':state}
                defaultValue={dropdownOptionsState}
                options={dropdownOptionsState}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_state", dropdownOptionsState[dropDownValue-1].value);
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
                value={city == null ? '':city}
                options={dropdownOptionsCity}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm('drp_city',dropdownOptionsCity[dropDownValue-1].value)
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
                    value = {area == null ? '': area}
                    label='Area'
                    options={dropdownOptions}
                    onChangeInputHandler={(dropDownValue) => {
                      validateForm("drp_customer_Area", dropdownOptions[dropDownValue-1].value);
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
                <Col md={4}>
                    <Dropdown
              required
                label="Status"
                controlId="drp_status"
                value={status == null? '' : status}
                options={dropdownStatusOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm('drp_status',dropdownStatusOptions[dropDownValue-1].value)
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
                  
                    <Col md={4}>
                    <Input
                    required
                    controlId='txt_pincode'
                    value={pincode}
                    label='pincode'
                    type='number'
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_pincode", inputValue);
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
                <Button className='alignRight' type='button' onClick={()=>{getSiteData()}}>
                    Save
                </Button>
            </Card.Body>
        </Card>
        </>
      )

}
const CustomerUpdate = () => {
  const navigate = useNavigate();

  const [div, setDiv] = useState("divOne");

  const nextDiv = (div) => {
    setDiv(div);
  };
  const onBackButton = () => {
    navigate("/masters/customer");
  };

  return (
    <>
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
          <h6 className="title">Update Customer</h6>
        </div>
        <Container className="step-progress-bar-div">
          {/* <MultiStepProgressBar div={div} onDivNumberClick={nextDivNumber} /> */}
          {
            {
              divOne: <DivOne onButtonClick={nextDiv} />,
            
            }[div]
          }
        </Container>
      </div>
    </Container>
    </>
  )
}

export default CustomerUpdate