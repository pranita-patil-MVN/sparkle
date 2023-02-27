import React, { useState, useEffect, useRef } from "react";
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
import { useNavigate, useLocation } from "react-router-dom";
import placeholder from "../assets/Images/Placeholder.png";
import itemJson from "../data/itemData.json";
import itemDataJson from "../data/itemJson.json";
import itemStatusJson from "../data/itemStatus.json";
import itemUnitJsonData from "../data/itemUnit.json";
import _ from "underscore";

const DivOne = ({ onButtonClick }) => {
  const location = useLocation();
  const itemsDetails = location.state;

  // var ref=useRef(items)
  const navigate = useNavigate();
  const handleOnChange = (value) => {};

  const [itemsData, setItemsData] = useState(itemsDetails);
  // const [itemsData, setItemsData] = useState([]);
  const [editableItemData, setEditableItemData] = useState();
  // for item name
  const [itemValue, setItemValue] = useState("");
  const [itemNameErrorMessage, setTxtItemNameErrorMessage] = useState("");
  const [invalidItem, setInvalidItem] = useState(false);

  // for category dropdown
  const [categoryDropdownErrorMessage, setCategoryDropdownErrorMessage] =
    useState("");
  const [invalidCategory, setInvalidCategory] = useState(false);
  const [categoryJson, setJsonCategory] = useState(itemDataJson.Data);
  const [statusJson,setStatusJson]=useState(itemStatusJson.Data);
  const [itemUnitJson,setItemUnitJson]=useState(itemUnitJsonData.Data)
  const [category, setCategory] = useState([]);
  const [statusArray, setStatusArray] = useState([]);
  const [itemUnitArray, setItemUnitArray] = useState([]);
  // alert(JSON.stringify(CategoryJson))

  useEffect(() => {
    JsonDataItem();
  }, []);
  const JsonDataItem = () => {
    const itemArray = [];
    const statusArray=[];
    const unitArray=[];
    for (let i = 0; i < categoryJson.length; i++) {
      var data = categoryJson[i].value;
      // alert(data);
      itemArray.push({
        label: i,
        value: data,
      });
      setCategory(itemArray);
    }
    for(let j=0;j<statusJson.length;j++){
      var data = statusJson[j].value;
      // alert(data);
      statusArray.push({
        label: j,
        value: data,
      });
      setStatusArray(statusArray);
    }

    for(let k=0;k<itemUnitJson.length;k++){
      var data = itemUnitJson[k].value;
      unitArray.push({
        label: k,
        value: data,
      });
      setItemUnitArray(unitArray);
    }
  };
  // for status dropdown
  const [statusDropdownErrorMessage, setStatusDropdownErrorMessage] =
    useState("");
  const [invalidStatus, setInvalidStatus] = useState(false);

  // for measurement unit
  const [unitErrorMessage, setUnitErrorMessage] = useState("");
  const [invalidUnit, setInvalidUnit] = useState(false);

  // for item rate
  const [itemRateErrorMessage, setItemRateErrorMessage] = useState("");
  const [invalidRate, setInvalidRate] = useState(false);

  // for cgst%
  const [cgstErrorMessage, setCgstErrorMessage] = useState("");
  const [invalidCgst, setInvalidCgst] = useState(false);

  // for sgst%
  const [sgstErrorMessage, setSgstErrorMessage] = useState("");
  const [invalidSgst, setInvalidSgst] = useState(false);

  // for Igst%
  const [igstErrorMessage, setIgstErrorMessage] = useState("");
  const [invalidIgst, setInvalidIgst] = useState(false);

  const [itemName, setItemName] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.items
  );
  const [itemCategory, setItemCategory] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.category
  );
  // alert(JSON.stringify( itemsDetails.category))
  const [itemMake, setItemMake] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.make
  );
  const [measurementUnit, setMeasurementUnit] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.unit
  );
  const [itemRate, setItemRate] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.rate
  );
  const [itemCgst, setItemCgst] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.cgst
  );
  const [itemSgst, setItemSgst] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.sgst
  );
  const [itemIgst, setItemIgst] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.igst
  );
  const [itemHsn, setItemHsn] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.hsn
  );
  const [itemDeduction, setItemDeduction] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.deduction
  );
  const [itemStatus, setItemStatus] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.status
  );
  const [itemRemark, setItemRemark] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.remark
  );
  const [itemInformation, setItemInformation] = useState(
    itemsData === undefined || itemsData === null ? null : itemsData.information
  );

 
 
 
  const validateForm = (fieldName, value) => {
    // alert(typeof(value))
    var expression = "^[0-9]*$";
    switch (fieldName) {
      case "txt_item":
        setInvalidItem(false);
        setTxtItemNameErrorMessage("");
        setItemName(value);

        // }
        break;
      // case "txt_code":
      //   setItemsData({
      //     ...itemsData,
      //     [fieldName]: value,
      //   });
      //   break;
      case "drp_category":
        setItemCategory(value);
        setInvalidCategory(false);
        setCategoryDropdownErrorMessage("");
        // setItemsData({
        //   ...itemsData,
        //   [fieldName]: value,
        // });
        // }
        break;
      case "drp_status":
        // if (value === "" || value === undefined) {
        //   setInvalidStatus(true);
        //   setStatusDropdownErrorMessage("Select status");
        // } else {
          setItemStatus(value)
        setInvalidStatus(false);
        setStatusDropdownErrorMessage("");
        // setItemsData({
        //   ...itemsData,
        //   [fieldName]: value,
        // });
        // }
        break;
      case "rad_deduction_status":
        setItemDeduction(value)
        // setItemsData({
        //   ...itemsData,
        //   [fieldName]: (value),
        // });
        break;
      case "drp_measurement_unit":
        // if (value === "" || value === undefined) {
        //   setInvalidUnit(true);
        //   setUnitErrorMessage("Select unit");
        // } else {
          setMeasurementUnit(value)
        setInvalidUnit(false);
        setUnitErrorMessage("");
        setItemsData({
          ...itemsData,
          [fieldName]: value,
        });
        // }
        break;
      case "txt_make":
        setItemMake(value)
        // setItemsData({
        //   ...itemsData,
        //   [fieldName]: value,
        // });
        break;
      case "txt_rate":
        if (value.match(expression)) {
          setItemRate(value)
          // setItemsData({
          //   ...itemsData,
          //   [fieldName]: value,
          // });
          setInvalidRate(false);
          setItemRateErrorMessage("");
        } else {
          setInvalidRate(true);
          setItemRateErrorMessage("Invalid rate");
        }
        break;

      case "text_cgst":
        if (value.match(expression)) {
          // setItemsData({
          //   ...itemsData,
          //   [fieldName]: value,
          // });
          setItemCgst(value)
          setInvalidCgst(false);
          setCgstErrorMessage("");
        } else {
          setInvalidCgst(true);
          setCgstErrorMessage("Invalid CGST");
        }
        break;
      case "text_sgst":
        if (value.match(expression)) {
          // setItemsData({
          //   ...itemsData,
          //   [fieldName]: value,
          // });
          setItemSgst(value)
          setInvalidSgst(false);
          setSgstErrorMessage("");
        } else {
          setInvalidSgst(true);
          setSgstErrorMessage("Invalid SGST");
        }
        break;
      case "text_igst":
        if (value.match(expression)) {
          // setItemsData({
          //   ...itemsData,
          //   [fieldName]: value,
          // });
          setItemIgst(value)
          setInvalidIgst(false);
          setIgstErrorMessage("");
        } else {
          setInvalidIgst(true);
          setIgstErrorMessage("Invalid IGST");
        }
        break;
      case "text_hsn":
        // setItemsData({
        //   ...itemsData,
        //   [fieldName]: value,
        // });
        setItemHsn(value)
        break;
      case "txt_remark":
        // setItemsData({
        //   ...itemsData,
        //   [fieldName]: value,
        // });
        setItemRemark(value)
        break;
      case "txt_information":
        // setItemsData({
        //   ...itemsData,
        //   [fieldName]: value,
        // });
        setItemInformation(value)
        break;
      default:
        break;
    }
  };

  const getItemsData = () => {
    if (itemName === null ||itemName === undefined || itemName == "") {
      setInvalidItem(true);
      setTxtItemNameErrorMessage("Please fill the item");
    } else if (
      itemCategory === null ||
      itemCategory === undefined ||
      itemCategory == ""
    ) {
      setInvalidCategory(true);
      setCategoryDropdownErrorMessage("Please select category");
    } else if (
      measurementUnit === null ||
      measurementUnit === undefined ||
      measurementUnit == ""
    ) {
      setInvalidUnit(true);
      setUnitErrorMessage("Please select unit");
    } else if (itemRate === null || itemRate === undefined || itemRate == "") {
      setInvalidRate(true);
      setItemRateErrorMessage("Please fill rate");
    } else if (
      itemStatus === null ||
      itemStatus === undefined ||
      itemStatus == ""
    ) {
      setInvalidStatus(true);
      setStatusDropdownErrorMessage("Please select status");
    } else {
    var data=[{name:itemName},{category:itemCategory},{make:itemMake},{unit:measurementUnit},{rate:itemRate},{cgst:itemCgst},{sgst:itemSgst},{igst:itemIgst},{hsn:itemHsn},{deduction:itemDeduction},{status:itemStatus},{remark:itemRemark},{information:itemInformation}]
      alert(JSON.stringify(data));
    }
  };
  return (
    <>
      <Card>
        <Card.Header className="cardHeader">Item Details</Card.Header>
        <Card.Body className="formScrollbar">
          <Row className="mb-3">
            <Col>
              <Input
                required
                controlId="txt_code"
                label="Code"
                type="text"
                // value={itemsData.txt_code}
                // defaultValue={editableItemData!=undefined?editableItemData.code:itemsData.txt_code}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_code", inputValue.currentTarget.value);
                }}
                disabled={true}
              />
            </Col>
            <Col>
              <Input
                required
                controlId="txt_item"
                label=" Item"
                type="text"
                value={itemName}
                // ref={ref.current.items}
                // defaultValue={editableItemData!=undefined?editableItemData.items:itemsData.txt_item}
                // value={itemsData.items!=undefined?itemsData.items:itemsData.txt_item}
                // value={ref!=undefined?ref.current.items:itemsData.txt_item}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_item", inputValue);
                }}
                disabled={false}
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
              <Dropdown
                required
                label="Category"
                controlId="drp_category"
                defaultValue={itemCategory}
                value={itemCategory}
                options={category}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm("drp_category", dropDownValue);
                }}
              />
              {invalidCategory === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {categoryDropdownErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>

            <Col>
              <Input
                controlId="txt_make"
                label="Make"
                type="text"
                value={itemMake}
              
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_make", inputValue.currentTarget.value);
                }}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="Unit of Measure"
                controlId="drp_measurement_unit"
                // value={measurementUnit}
                defaultValue={measurementUnit}
                value={measurementUnit}
                options={itemUnitArray}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm(
                    "drp_measurement_unit",
                    dropDownValue
                  );
                }}
              />
              {invalidUnit === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {unitErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <Row>
                <Col>
                  <Input
                    required
                    controlId="txt_rate"
                    label="Rate(₹)"
                    type="text"
                    value={itemRate}
                    onChangeInputHandler={(inputValue) => {
                      validateForm("txt_rate", inputValue);
                    }}
                  />
                  {invalidRate === true ? (
                    <Form.Text className="position-relative mandatoryField">
                      {itemRateErrorMessage}
                    </Form.Text>
                  ) : (
                    <></>
                  )}
                </Col>
                <Col>
                  <Input
                    // required
                    controlId="text_cgst"
                    label="CGST(%)"
                    type="text"
                    value={itemCgst}
                    onChangeInputHandler={(inputValue) => {
                      validateForm("text_cgst", inputValue.currentTarget.value);
                    }}
                  />
                  {invalidCgst === true ? (
                    <Form.Text className="position-relative mandatoryField">
                      {cgstErrorMessage}
                    </Form.Text>
                  ) : (
                    <></>
                  )}
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Input
                    // required
                    controlId="text_sgst"
                    label="SGST(%)"
                    type="text"
                    value={itemSgst}
                    onChangeInputHandler={(inputValue) => {
                      validateForm("text_sgst", inputValue.currentTarget.value);
                    }}
                  />
                  {invalidSgst === true ? (
                    <Form.Text className="position-relative mandatoryField">
                      {sgstErrorMessage}
                    </Form.Text>
                  ) : (
                    <></>
                  )}
                </Col>
                <Col>
                  <Input
                    // required
                    controlId="text_igst"
                    label="IGST(%)"
                    type="text"
                    value={itemIgst}
                    onChangeInputHandler={(inputValue) => {
                      validateForm("text_igst", inputValue.currentTarget.value);
                    }}
                  />
                  {invalidIgst === true ? (
                    <Form.Text className="position-relative mandatoryField">
                      {igstErrorMessage}
                    </Form.Text>
                  ) : (
                    <></>
                  )}
                </Col>
                <Col>
                  <Input
                    // required
                    controlId="text_hsn"
                    label="HSN/SAC"
                    type="text"
                    value={itemHsn}
                    onChangeInputHandler={(inputValue) => {
                      validateForm("text_hsn", inputValue.currentTarget.value);
                    }}
                  />
                  {invalidIgst === true ? (
                    <Form.Text className="position-relative mandatoryField">
                      {igstErrorMessage}
                    </Form.Text>
                  ) : (
                    <></>
                  )}
                </Col>
              </Row>
            </Col>
            <Col>
              <RadioButton
                controlId="rad_deduction_status"
                label="Apply Deduction"
                options={["Yes","No"]}
                defaultValue={itemDeduction}
                value={itemDeduction}
                checked={true}
                onChangeInputHandler={(optionValue) => {
                  validateForm("rad_deduction_status", optionValue);
                }}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Dropdown
                required
                label="Status"
                controlId="drp_status"
                defaultValue={itemStatus}
                value={itemStatus}
                options={statusArray}
                onChangeDropDownHandler={(dropDownValue) => {
                  validateForm(
                    "drp_status",
                    dropDownValue
                  );
                }}
              />
              {invalidStatus === true ? (
                <Form.Text className="position-relative mandatoryField">
                  {statusDropdownErrorMessage}
                </Form.Text>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <TextArea
                // required
                controlId="txt_remark"
                label="Remarks"
                type="text"
                value={itemRemark}
                onChangeInputHandler={(inputValue) => {
                  validateForm("txt_remark", inputValue.currentTarget.value);
                }}
              />
            </Col>
            <Col>
              <TextArea
                // required
                controlId="txt_information"
                label="Information"
                type="textArea"
                value={itemInformation}
                onChangeInputHandler={(inputValue) => {
                  validateForm(
                    "txt_information",
                    inputValue.currentTarget.value
                  );
                }}
              />
            </Col>
            <Col></Col>
          </Row>

          <div className="d-flex justify-content-end formBtn">
            <Button
              type="button"
              className="alignRight mr-5"
              onClick={() => {
                getItemsData();
              }}
            >
              Save
            </Button>
            <Button
              type="button"
              className="alignRight"
              onClick={() => window.location.reload()}
            >
              Cancel
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const CreateItem = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <div className="titleDiv" onClick={() => navigate(-1)}>
          <BiChevronLeft size={20} color={"var(--purple-color"} />
          <BiUser size={20} color={"var(--purple-color"} />
          <h6 className="title">Add Item</h6>
        </div>
        <div className="step-progress-bar-div">
          <DivOne />
        </div>
      </div>
    </Container>
  );
};

export default CreateItem;
