
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

const DivOne =() => {
    const location = useLocation();
    let spareDetails = location.state;
  const [spareAssetsData, setSpareAssetsData] = useState(spareDetails);
  const navigate = useNavigate();
  const handleOnChange = (value) => {};

 
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

// fpr fields 
    const [spareId, setSpareId] = useState(
        spareAssetsData === undefined || spareAssetsData === null ? null : spareAssetsData.spareId
      );
      const [spareName, setSpareName] = useState(
        spareAssetsData === undefined || spareAssetsData === null ? null : spareAssetsData.spareName
      );
      const [unit, setUnit] = useState(
        spareAssetsData === undefined || spareAssetsData === null ? null : spareAssetsData.unit

      );
      const [cost, setCost] = useState(
        spareAssetsData === undefined || spareAssetsData === null ? null : spareAssetsData.cost
      );
      const [quanity, setQuantity] = useState(
        spareAssetsData === undefined || spareAssetsData === null ? null : spareAssetsData.quanity
      );

let arr = [];
var secondArr= [];

const validateForm = (fieldName, value)=>{

    switch (fieldName){
        case 'txt_sparename':
            setFormData({...formData,[fieldName]:value})
            setInvalidSpareName(false)
            setSpareNameErrorMessage('')
            break;
        case 'txt_unit':
            setFormData({...formData,[fieldName]:value})
            setInvalidUnit(false);
            setUnitErrorMessage('')
            break;
        case 'txt_cost':
            setFormData({...formData,[fieldName]:value})
            setInvalidCost(false);
            setCostErrorMessage('')
            break;
        case 'txt_quantity':
            setFormData({...formData,[fieldName]:value})
            setInvalidQuantity(false);
            setQuantityErrorMessage('')
        default:
            break;

    
    }
}

//Save button function

const getSpareData = ()=> {
    if(formData.txt_sparename == undefined || formData.txt_sparename == ''){
        setInvalidSpareName(true);
        setSpareNameErrorMessage('please enter spare name')
    } else if (formData.txt_unit == undefined || formData.txt_unit == ''){
        setInvalidUnit(true);
        setUnitErrorMessage('Please enter Unit')
    } else if( formData.txt_cost == undefined || formData.txt_cost == ''){
        setInvalidCost(true);
        setCostErrorMessage('Please enter cost')
    } else if (formData.txt_quantity == undefined || formData.txt_quantity == ''){
            setInvalidQuantity(true);
            setQuantityErrorMessage('Please enter cost')
    }
    else {
        let sessionData = sessionStorage.getItem('add_spare');
        let parsedJson = JSON.parse(sessionData);
        arr.push(parsedJson);
        alert(JSON.stringify(formData))
        secondArr.push(formData);
        
        const allData = arr.concat(secondArr);
        alert(allData)
        sessionStorage.removeItem("add_spare");
    }
}

return (
    <>
    <Card>
        <Card.Header className='cardHeader'>Spare Details</Card.Header>
        <Card.Body className='formScrollbar'>
            <Row className='mb-3'>
            <Col>
               

               <Input
               value={spareName}
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
               value={unit}
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
               value={cost}
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
               <Col md={3}>
               

               <Input
               value={quanity}
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
            <Button className='alignRight' type='button' onClick={()=>{getSpareData()}}>
                Save
                 </Button>
        </Card.Body>
    </Card>
    </>
)
}


const SpareUpdate = () => {
    const navigate = useNavigate();

    const [div, setDiv] = useState("divOne");
  
    const nextDiv = (div) => {
      setDiv(div);
    };
    const onBackButton = () => {
      navigate("/masters/capitalAssets");
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
          <h6 className="title">Update Spare Assets</h6>
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

export default SpareUpdate