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
import CardHeader from 'react-bootstrap/esm/CardHeader';

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
const DivOne = ({onButtonClick}) => {
    const location = useLocation();
    const [formData, setFormData] = useState([]);
    const [validateDivOne, setValidateDivOne] = useState(false);

    //Site
    const [ invalidSite, setInvalidSite] = useState(true);
    const [siteErrorMessage,setSiteErrorMessage] = useState('');

    //Shift
    const [invalidShift, setInvalidShift] = useState(true);
    const [ shiftErrorMessage,setShiftErrorMessage] = useState('');

    //unassignedEmployees

    const [invalidUnassignedEmployees, setInvalidUnassignedEmployees] = useState(true)
    const [unassignnedEmployeesErrorMessage,setUnassignedEmployeesErrorMessage] = useState('')
    const [date_of_birth, setDateOfBirth] = useState();
 const addFieldsValues = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
      };

        const validateForm =(fieldName,value) =>{
        switch(fieldName) {

            case 'drp_sitename':
                
            if (value === undefined) {
                setInvalidSite(true);
                setSiteErrorMessage("Please Enter Site Name");
              } else {
                addFieldsValues(fieldName, value);
                setInvalidSite(false);
                setSiteErrorMessage("");
                setValidateDivOne(true);
              }
              break;

            case 'drp_shift':
                
              if (value === undefined) {
                  setInvalidShift(true);
                  setShiftErrorMessage("Please Select Shift");
                } else {
                  addFieldsValues(fieldName, value);
                  setInvalidShift(false);
                  setShiftErrorMessage("");
                  setValidateDivOne(true);
                }
                break;
            case 'txt_unassignedemployees':
                
                if (value === undefined) {
                    setInvalidUnassignedEmployees(true);
                    setUnassignedEmployeesErrorMessage("Please Enter Unassigned Employees");
                  } else {
                    addFieldsValues(fieldName, value);
                    setInvalidUnassignedEmployees(false);
                    setUnassignedEmployeesErrorMessage("");
                    setValidateDivOne(true);
                  }
                  break;
        }
        }

        return (
            <>
            <Card>
                <Card.Header className='cardHeader'>Assign Employee</Card.Header>
                <Card.Body>
                    <Row className='mb-3'>
                        <Col>
                        <Dropdown
              required
                label="Site"
                controlId="drp_sitename"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_sitename", dropDownValue);
                }}
              />
              {invalidSite === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {siteErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
                        </Col>

                        <Col>
                        <Dropdown
              required
                label="Shift"
                controlId="drp_shift"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_shift", dropDownValue);
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
                        <SingleDatePicker
                
                label="Assign From Date"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col md={4}>
                        <Input
               required
               controlId='txt_unassignedemployees'
               label='Unassigned Employee'
               type='text'
               onChangeInputHandler={(inputValue) => {
                 validateForm("txt_unassignedemployees", inputValue);
               }}
               
               />
               {invalidUnassignedEmployees === true ?(
                  <Form.Text className="position-relative mandatoryField">
                  {unassignnedEmployeesErrorMessage}
                </Form.Text>
              ) : (
                <></>
               )}
                        </Col>
                    </Row>
                    <Button className='alignRight' type='button' onClick ={()=>{
                      if (validateDivOne === true) {
                        onButtonClick("");
                      } else {
                        
                        validateForm('drp_sitename', formData.drp_sitename)
                        validateForm('drp_shift', formData.drp_shift)
                        validateForm('txt_unassignedemployees', formData.txt_unassignedemployee)
                        
                      }
                    }}
                    >
                        Save
                    </Button>
                    <Button className='alignLeft' type='button' onClick={()=>{
                        window.location.reload(true)
                    }}>Cancel</Button>
                </Card.Body>
            </Card>
            </>
        )

}


const AssignEmployee = () => {
    const navigate = useNavigate();

    const [div, setDiv] = useState("divOne");
  
    const nextDiv = (div) => {
      setDiv(div);
    };
    const onBackButton = () => {
      navigate("/masters/capitalAssets");
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
          <h6 className="title">Assign Employee</h6>
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
  )
}

export default AssignEmployee