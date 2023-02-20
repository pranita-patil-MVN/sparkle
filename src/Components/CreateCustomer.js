import React,{useState, useEffect} from 'react'
import { Container,Card,Row,Col,Form } from 'react-bootstrap';
import MultiStepProgressBar from '../CommonComponents/MultiStepProgressBar';
import { BiChevronLeft, BiUser } from "react-icons/bi";
import Input from '../CommonComponents/Input';
import Dropdown from '../CommonComponents/Dropdown';
import SingleDatePicker from '../CommonComponents/DatePicker';

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
    const handleOnChange = (value) => {};
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
                    label='Customer Id'
                    type='text'
                  
                    
                    />
                    </Col>
                    <Col>
                    <Input
                    required
                    controlId='txt_customer_name'
                    label ='Customer Name'
                    type='text'
                    />
                    </Col>
                    <Col>
                    <Input
                    required
                    controlId='txt_customer_no'
                    label='Customer Number'
                    type='number'
                    />
                    </Col>
                    

                </Row>
                <Row className='mb-3'>
                    <Col>
                    <Input
                    required
                    controlId='txt_customer_Location'
                    label='Location'
                    type='text'
                    />
                    </Col>

                    <Col>
              <Dropdown
              required
                label="State"
                controlId="drp_state"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
            </Col>
            <Col>
            <Dropdown
              required
                label="City"
                controlId="drp_city"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
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
                    <Dropdown
              required
                label="Status"
                controlId="drp_status"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
                    </Col>
                </Row>
                
            </Card.Body>
        </Card>
        </>
    )
}

const DivTwo = ({onButtonClick}) => {
    const handleOnChange = (value) => {};
    const [date_of_birth, setDateOfBirth] = useState();
    return(
        <Container>
            <Card>
                <Card.Header className='cardHeader'>Customer Representative Details</Card.Header>
                <Card.Body>
                    <Row className='mb-3'>
                        <Col>
                        <Input 
                        required
                        controlId='txt_customerrep_name'
                        label='Customer Representative'
                        type='text'
                        />
                    
                        </Col>
                        <Col>
                        <SingleDatePicker
                required
                label="Date of Birth"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
                        </Col>
                        <Col>
                        <Dropdown
              required
                label="Department"
                controlId="drp_department"
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                  handleOnChange(dropDownValue);
                }}
              />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Input 
                        required
                        controlId='txt_customerrep_no'
                        label='Mobile Number'
                        type='number'
                        />
                        </Col>
                        <Col>
                        <Input 
                        required
                        controlId='txt_customerrep_email'
                        label='Email Id'
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
            <MultiStepProgressBar div={div} onDivNumberClick ={nextDivNumber} />
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