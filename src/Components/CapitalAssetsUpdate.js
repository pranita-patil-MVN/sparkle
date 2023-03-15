
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
  const dropdownOptionsCustomer = [
    {
      id: 1,
      value: "ACG Pharma",
    },
    {
      id: 2,
      value: "B.U.Bhandari",
    },
    {
      id: 3,
      value: "Chakote Group",
    },
    {
      id: 4,
      value: "Devi Construction",
    },
    {
      id: 5,
      value: "Emcure",
    },
    {
      id: 6,
      value: "GTT Communication",
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

  const noOfSteps=[1]

const DivOne = ({props}) => {
    const location = useLocation();
    let assetDetails = location.state;
  const [capitalAssetsData, setCapitalAssetsData] = useState(assetDetails);
 
  const handleOnChange = (value) => {};
 
    // const getCapitalList = async() =>{
    //     try{
    //         const response = await axios.get('https://mocki.io/v1/0d4eb849-be23-4e7c-898e-d8fdbe0077c1')
    //         setCapitalItem(response.data);
    //         setFilteredItems(response.data);

    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // };
    const navigate = useNavigate();
    const [formData, setFormData] = useState([]);
    const [validateDivOne, setValidateDivOne] = useState(false);
      //for SubCategroy field
  const [subCategoryErrorMessage, setSubCategoryErrorMessage] = useState("")
  const [invalidSubCategory, setInvalidSubCategory] = useState(true)
  // for Serial No field
  const [serialNoErrorMessage, setSerialNoErrorMessage] = useState('');
  const [invalidSerialNo, setInvalidSerialNo] = useState(true);
    
    // For Category Dropdown
    const [dropdownCategoryErrorMessage, setdropdownCategoryErrorMessage] = useState("");
    const [invalidCategory, setInvalidCategory] = useState(true);
      // For Status
      const [dropdownVendorErrorMessage, setDropdownVendorErrorMessage] = useState("");
      const [invalidVendor, setInvalidVendor] = useState(true);
     
//description
const [invalidDescription, setInvalidDescription] = useState(true);
const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('')
//make
const [makeErrorMessage, setMakeErrorMessage] = useState('')
const [invalidMake, setInvalidMake] = useState(true)

//Purchase Price

const [invalidPurchasePrice, setInvalidPurchasePrice] = useState(true);
const [purchasePriceErrorMesssage, setPurchasePriceErrorMessage] = useState('')

 // For Model
 const [modelErrorMessage, setModelErrorMessage] =
 useState("");
const [invalidModel, setInvalidModel] = useState(true);
//DOP
const [invalidDOP, setInvalidDOP] = useState(true);
const [dopErrorMessage, setDOPErrorMessage] = useState('')

//for fields
const [category, setCategory] = useState(
    capitalAssetsData === undefined || capitalAssetsData === null ? null : capitalAssetsData.category
  );
  const [subCategory, setSubCategory] = useState(
    capitalAssetsData === undefined || capitalAssetsData === null ? null : capitalAssetsData.subCategory
  );

  const [serialNo, setSerialNo] = useState(
    capitalAssetsData === undefined || capitalAssetsData === null ? null : capitalAssetsData.Sr_No
  );

  const [make, setMake] = useState(
    capitalAssetsData === undefined || capitalAssetsData === null ? null : capitalAssetsData.Make
  );
  const [model, setModel] = useState(
    capitalAssetsData === undefined || capitalAssetsData === null ? null : capitalAssetsData.Model
  );
  const [dateOfPurchase, setDateOfPurchase] = useState(
    capitalAssetsData === undefined || capitalAssetsData === null ? null : capitalAssetsData.Purchase_Date

  );
  const [description, setDescription] = useState(
    capitalAssetsData === undefined || capitalAssetsData === null ? null : capitalAssetsData.Description
  );

  const [purchasePrice, setPurchasePrice] = useState(
    capitalAssetsData === undefined || capitalAssetsData === null ? null : capitalAssetsData.purchasePrice
  );

  const [vendor, setVendor] = useState(
    capitalAssetsData === undefined || capitalAssetsData === null ? null : capitalAssetsData.vendor
  );

  let arr = [];
var secondArr= [];

const validateForm = (fieldName, value)=>{
    switch(fieldName){
        case 'drp_category':
            setFormData({...formData,[fieldName]:value})
            setInvalidCategory(false)
            setdropdownCategoryErrorMessage('')
            break;
        case 'drp_subcategory':
            setFormData({...formData,[fieldName]:value})
            setInvalidSubCategory(false)
            setSubCategoryErrorMessage('')
            break;
        case 'txt_serialno':
            setFormData({...formData,[fieldName]:value})
            setInvalidSerialNo(false)
            setSerialNoErrorMessage('')
            break;
        case 'txt_make':
            setFormData({...formData,[fieldName]:value})
            setInvalidMake(false)
            setMakeErrorMessage('')
            break;
        case 'txt_model':
            setFormData({...formData,[fieldName]:value})
            setInvalidModel(false)
            setModelErrorMessage('')
            break;
        case 'date_dop':
            setFormData({...formData,[fieldName]:value})
            setInvalidDOP(false)
            setDOPErrorMessage('')
            break;
        case 'txt_description':
            setFormData({...formData,[fieldName]:value})
            setInvalidDescription(false)
            setDescriptionErrorMessage('')
            break;
        case 'txt_purchaseprice':
            setFormData({...formData,[fieldName]:value})
            setInvalidPurchasePrice(false)
            setPurchasePriceErrorMessage('')
            break;
        case 'drp_vendor':
            setFormData({...formData,[fieldName]:value})
            setInvalidVendor(false)
            setDropdownVendorErrorMessage('')
            break;
        default:
            break;


    }
}

    const getCapitalData = () => {
        if(formData.drp_category == undefined || formData.drp_category == ''){
           
            setInvalidCategory(true);
            setdropdownCategoryErrorMessage('Please enter Category')
    }else if(formData.drp_subcategory == undefined || formData.drp_subcategory == ''){
        setInvalidSubCategory(true);
        setSubCategoryErrorMessage('Please enter Sub category')
}else if(formData.txt_serialno == undefined || formData.txt_serialno == ''){
    setInvalidSerialNo(true);
    setSerialNoErrorMessage('Please enter Sr.No')
}else if(formData.drp_vendor == undefined || formData.drp_vendor == ''){
    setInvalidVendor(true);
    setDropdownVendorErrorMessage('Please enter Vendor')
}else if(formData.txt_make == undefined || formData.txt_make == ''){
    setInvalidMake(true);
    setMakeErrorMessage('Please enter Make')
}else if(formData.txt_model == undefined || formData.txt_model == ''){
    setInvalidModel(true);
    setModelErrorMessage('Please enter Model')
}else if(formData.txt_description == undefined || formData.txt_description == ''){
    setInvalidDescription(true);
    setDescriptionErrorMessage('Please enter Description')
}else if(formData.txt_purchaseprice == undefined || formData.txt_purchaseprice == ''){
    setInvalidPurchasePrice(true);
    setPurchasePriceErrorMessage('Please enter Purchase Price')
}else if(formData.date_dop == undefined || formData.date_dop == ''){
    setInvalidDOP(true);
    setDOPErrorMessage('Please enter Name')
}else {
    let sessionData = sessionStorage.getItem('add_capitalAsset');
    let parsedJson = JSON.parse(sessionData);
    arr.push(parsedJson);
    alert(JSON.stringify(formData))
    secondArr.push(formData);
    const allData = arr.concat(secondArr);
    alert(JSON.stringify(allData));
    sessionStorage.removeItem("add_capitalAsset");
}
    };

return (
    <>
    {" "}
    <Card>
        <Card.Header className='cardHeader'>Asset Details</Card.Header>
        <Card.Body>
        <Row className="mb-3">
            <Col>
            <Dropdown
              required
                label="Category"
                controlId="drp_category"
                value = {category == null ? '':category}
                defaultValue = {dropdownOptions}
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                    validateForm("drp_category", dropdownOptions[dropDownValue-1].value);
                  }}
              />
              {invalidCategory === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownCategoryErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
                    <Dropdown
              required
                label="Sub-Category"
                controlId="drp_subcategory"
                value = {subCategory == null ? '':subCategory}
                defaultValue={dropdownOptions}
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                    validateForm("drp_subcategory", dropdownOptions[dropDownValue-1].value);
                  }}
              />

{invalidSubCategory === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {subCategoryErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}

                    </Col>

        </Row>
        <Row className='mb-3'>
        <Col>
               

               <Input
               required
               controlId='txt_serialno'
               value={serialNo}
               label='Serial No.'
               type='text'
               onChangeInputHandler={(inputValue) => {
                 validateForm("txt_serialno", inputValue);
               }}
               
               />
               {invalidSerialNo === true ?(
                  <Form.Text className="position-relative mandatoryField">
                  {serialNoErrorMessage}
                </Form.Text>
              ) : (
                <></>
               )}
               </Col>
               <Col>
                    <Input
                    required
                    controlId='txt_make'
                    value = {make}
                    label ='Make'
                    disabled
                    type='text'
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_make", inputValue);
                    }}
                    />
                    {invalidMake === true ?(
                       <Form.Text className="position-relative mandatoryField">
                       {makeErrorMessage}
                     </Form.Text>
                   ) : (
                     <></>
                    )}
                    </Col>
                    <Col>
              <Input
                required
                controlId="txt_model"
                value ={model}
                label="Model"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_model", inputValue);
                }}
              />
              {invalidModel === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {modelErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Row className='mb-3'>
            <Col>
                    <Input
                    value = {description}
                required
                controlId="txt_description"
                label="Description"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_description", inputValue);
                }}
              />
               {invalidDescription === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {descriptionErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
                    <Col>
                    <Input
                required
                value = {purchasePrice}
                controlId="txt_purchaseprice"
                label="Purchase Price"
                type="text"
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_purchaseprice", inputValue);
                }}
              />
               {invalidPurchasePrice === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {purchasePriceErrorMesssage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col >
                    <Dropdown
              required
                label="Vendor"
                controlId="drp_vendor"
                value =  {vendor == null ? ' ': vendor}
                defaultValue = {dropdownOptions}
                options={dropdownOptions}
                onChangeDropDownHandler={(dropDownValue) => {
                    validateForm("drp_vendor", dropdownOptions[dropDownValue-1].value);
                  }}
              />


     
      
      
      
       
      

{invalidVendor === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {dropdownVendorErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
                    </Col>
            </Row>
        </Row>
        <Button className='alignRight' type='button' onClick={()=>{getCapitalData()}}>
            Save
        </Button>
        </Card.Body>
    </Card>
    </>
)

}
const CapitalAssetsUpdate = () => {
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
          <h6 className="title">Update Capital Assets</h6>
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

export default CapitalAssetsUpdate