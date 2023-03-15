import React,{useState, useEffect} from 'react'
import { Container,Card,Row,Col,Form,Button,InputGroup } from 'react-bootstrap';
import MultiStepProgressBar from '../CommonComponents/MultiStepProgressBar';
import { BiChevronLeft, BiUser } from "react-icons/bi";
import Input from '../CommonComponents/Input';
import Dropdown from '../CommonComponents/Dropdown';
import SingleDatePicker from '../CommonComponents/DatePicker';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../CommonComponents/Checkbox';
import RadioButton from '../CommonComponents/RadioButtons';
import TextArea from '../CommonComponents/TextArea';

const noOfSteps =[1]

const DivOne = ({onButtonClick}) => {

    const handleOnChange = value => {}
    const [formData, setFormData] = useState([]);
    const [validateDivOne, setValidateDivOne] = useState(false);

    //Spare Name

    const [spareNameErrorMessage, setSpareNameErrorMessage] = useState('')
    const [invalidSpareName, setInvalidSpareName] = useState(true);

    //Unit

    const [unitErrorMessage, setUnitErrorMessage] = useState('');
    const [invalidUnit, setInvalidUnit] = useState(true);

    //Cost
    const [costErrorMessage, setCostErrorMessage] = useState('');
    const [InvalidCost, setInvalidCost] = useState(true);

    //Quantity

    const [quantityErrorMessage, setQuantityErrorMessage] = useState('');
    const [invalidQuantity, setInvalidQuantity] = useState(true);

    const addFieldsValues = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
      };

      const validateForm =(fieldName,value) =>{
        switch(fieldName) {

            case 'txt_sparename':
                
            if (value === undefined) {
                setInvalidSpareName(true);
                setSpareNameErrorMessage("Please Enter Spare Name");
              } else {
                addFieldsValues(fieldName, value);
                setInvalidSpareName(false);
                setSpareNameErrorMessage("");
                setValidateDivOne(true);
              }
              break;

              case 'txt_unit':
                if (value === undefined) {
                    setInvalidUnit(true);
                    setUnitErrorMessage("Please Enter Unit");
                  } else {
                    addFieldsValues(fieldName, value);
                    setInvalidUnit(false);
                    setUnitErrorMessage("");
                    setValidateDivOne(true);
                  }
                  break;

                  case 'txt_cost':
                    if (value === undefined) {
                        setInvalidCost(true);
                        setCostErrorMessage("Please Enter Cost");
                      } else {
                        addFieldsValues(fieldName, value);
                        setInvalidCost(false);
                        setCostErrorMessage("");
                        setValidateDivOne(true);
                      }
                      break;

                    case "txt_quantity":
                        if (value === undefined) {
                            setInvalidQuantity(true);
                            setQuantityErrorMessage("Please Select Quantity");
                          } else {
                            addFieldsValues(fieldName, value);
                            setInvalidQuantity(false);
                            setQuantityErrorMessage("");
                            setValidateDivOne(true);
                          }
                          break;
        }

      }

      return (

        <>
        <Card>
            <Card.Header className='cardHeader'>Spare Details</Card.Header>
            <Card.Body>
                <Row className='mb-3'>
                <Col>
                <Input
                    
                    controlId='txt_spareid'
                    label='Spare ID'
                    type='text'
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_spareid", inputValue);
                    }}
                    
                    />
                </Col>    
                <Col>
               

               <Input
               required
               controlId='txt_sparename'
               label='Spare Name'
               type='text'
               onChangeInputHandler={(inputValue) => {
                 validateForm("txt_sparename", inputValue);
               }}
               
               />
               {invalidSpareName === true ?(
                  <Form.Text className="position-relative mandatoryField">
                  {spareNameErrorMessage}
                </Form.Text>
              ) : (
                <></>
               )}
               </Col>

               <Col>
               

               <Input
               required
               controlId='txt_unit'
               label='Unit'
               type='text'
               onChangeInputHandler={(inputValue) => {
                 validateForm("txt_unit", inputValue);
               }}
               
               />
               {invalidUnit === true ?(
                  <Form.Text className="position-relative mandatoryField">
                  {unitErrorMessage}
                </Form.Text>
              ) : (
                <></>
               )}
               </Col>

               <Col>
               

               <Input
               required
               controlId='txt_cost'
               label='Cost'
               type='text'
               onChangeInputHandler={(inputValue) => {
                 validateForm("txt_cost", inputValue);
               }}
               
               />
               {InvalidCost === true ?(
                  <Form.Text className="position-relative mandatoryField">
                  {costErrorMessage}
                </Form.Text>
              ) : (
                <></>
               )}
               </Col>
                </Row>
                <Row className='mb-3'>
                <Col md={3}>
               

               <Input
               required
               controlId='txt_quantity'
               label='Quantity'
               type='text'
               onChangeInputHandler={(inputValue) => {
                 validateForm("txt_quantity", inputValue);
               }}
               
               />
               {invalidQuantity === true ?(
                  <Form.Text className="position-relative mandatoryField">
                  {quantityErrorMessage}
                </Form.Text>
              ) : (
                <></>
               )}
               </Col>
                </Row>

                <Button type='button' className='alignLeft'
                onClick ={()=> {
                    if (validateDivOne === true) {
                        onButtonClick("");
                      } else {
                        
                        validateForm('txt_sparename', formData.txt_sparename)
                        validateForm('txt_unit', formData.txt_unit)
                        validateForm('txt_cost', formData.txt_cost)
                        validateForm('txt_quantity',formData.txt_quantity)
                      }
                }}> 
                Save
                </Button>
                <Button type='button' className='alignLeft' onClick={()=>{
                    window.location.reload(true)
                }} >Cancel</Button>
            </Card.Body>
        </Card>
        </>
      )

}

const CreateSpare = () => {
    const navigate = useNavigate();
    const [div,setDiv] = useState('divOne');

    const nextDiv = (div) => {
        setDiv(div)
    };

    const nextDivNumber = (divNumber) => {
        switch (divNumber) {
            case '1':
                setDiv('divOne');
                break;
             
        }
    };
  return (
    <Container>
        <div>
            <div className='titleDiv'>
            <BiChevronLeft size={20} color={"var(--purple-color"} / >
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Spares</h6>
            </div>
            <Container className='step-progress-bar-div'>
                <MultiStepProgressBar div={div} onDivNumberClick = {nextDivNumber} noOfSteps= {noOfSteps} />
            {{
                divOne: <DivOne onButtonClick ={nextDiv} />,
                
            }
            [div]
            }
            
            </Container>
        </div>
    </Container>
  )
}



export default CreateSpare