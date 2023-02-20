import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import _ from "underscore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import profileImg from "../assets/Images/profileImg.png";
import editImg from "../assets/Images/editImg.png";
import { CiSearch, CiImport, CiExport } from "react-icons/ci";
import { BiPlus } from "react-icons/bi";
import pdfImg from "../assets/Images/pdfImg.png";
import TableCompo from "../CommonComponents/TableCompo";
import itemJson from "../data/itemData.json";
import {useNavigate,useLocation } from "react-router-dom";
import "../css/pages.css";
import "../css/dataTable.css";
import "../css/commonCss.css";
const ItemMaster = () => {
  const [search, setSearch] = useState("");
  const [itemData, setItemData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const [flag, setFlag] = useState(false);
  const [searchFlag, setSearchFlag] = useState(false);
  const [dropdownValue, setSelectedDropdownValue] = useState([]);
  const [tempState,setTempState] =useState([]);
  const [removeCheckedvalue,setRemoveCheckedvalue] =useState([]);

  const [searchValue,setSearchValue] =useState();
  const [dropdownsValue,setDropdownsValue] =useState();
  const [makeCheckBoxValue,setMakeCheckBoxValue] =useState();
  const [checkBoxStatusValue,setCheckBoxStatusValue] =useState();

  const [statusValue,setStatusValue] =useState();

  const [statusValueData,setStatusValueData] =useState();
  const navigate=useNavigate()
  var selectedDropdownValue;
  useEffect(() => {
    getItemList();
  }, []);
  const getItemDataForEdit=(name)=>{
    alert(JSON.stringify(name))
    navigate("/masters/itemMaster/createItem", { state: name });
  }
  const getItemList = async () => {
    try {
      // const response = await axios.get(
      //   "https://mocki.io/v1/c6b1a681-4ec1-44b2-8c6e-4d88dd04a8ce"
      // );
      setItemData(itemJson.Data);
      setFilteredItems(itemJson.Data);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: "Item",
      selector: (row) => row.items,
      sortable: true,
      id: "name",
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "make",
      selector: (row) => row.make,

      sortable: true,
    },
    {
      name: "Rate",
      selector: (row) => row.rate,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Update",
      cell: (row) => (
        <div>
          <button className="btn btn-default update" type="button"   
          onClick={() => getItemDataForEdit(row.items)}>
            <img src={editImg} alt="edit" />
          </button>
        </div>
      ),
    },
  ];
  

  const onSearch = (data) => {
    if(data===''){
      setSearchFlag(false)
    }
    else{
      setSearchFlag(true)
    }
    if (checkedItem.length != 0 && data !="") {
      const result = checkedItem.filter((item) => {
        return item.items.toLowerCase().match(data) || item.items.match(data);
      });
      setCheckedItem(result);
      setRemoveCheckedvalue(result)
    } else if(data==="" && flag===true) {
      const result = itemData.filter((item) => {
        return item.category.toLowerCase().match(selectedValue) || item.category.match(selectedValue);
      });
      setCheckedItem(result)
      setRemoveCheckedvalue(result)
    }
    else if(data==="" && flag===false) {
      const result = itemData.filter((item) => {
        return item.items.toLowerCase().match(data) || item.items.match(data);
      });
      setCheckedItem(result)
      setRemoveCheckedvalue(result)
    }
    else{
      const result = itemData.filter((item) => {
        return item.items.toLowerCase().match(data) || item.items.match(data);
      });
      setCheckedItem(result);
      setRemoveCheckedvalue(result)
    }
  };
  const getDropdownValue=(e)=>{
    setSelectedValue(e.target.value)
     if(checkedItem.length===0){
      selectedDropdownValue= filteredItems.filter((i) => {
        return i.category.match(e.target.value);
      });
      setSelectedDropdownValue(selectedDropdownValue)
      setCheckedItem(selectedDropdownValue);
      setRemoveCheckedvalue(selectedDropdownValue)
      setFlag(true);
     }else if(searchFlag===false){
      selectedDropdownValue= filteredItems.filter((i) => {
        return i.category.match(e.target.value);
      });
      setSelectedDropdownValue(selectedDropdownValue)
      setCheckedItem(selectedDropdownValue);
      setRemoveCheckedvalue(selectedDropdownValue)
     }
     else{
      selectedDropdownValue= checkedItem.filter((i) => {
        return i.category.match(e.target.value);
      });
      setSelectedDropdownValue(selectedDropdownValue)
      setCheckedItem(selectedDropdownValue);
      setRemoveCheckedvalue(selectedDropdownValue)
      setFlag(true);
     }
    // }
  }
  var arr = [];
  var checkedAreaNameArr=[] ;
 
  const checkboxValue = (e, data) => {

    setTempState(checkedItem);
    var filteredListData;
    var concatData;
    // var concatAreaData;
    var filteredAreaListArr=[] ;
    // concatAreaData = checkedAreaNameArr.concat(data);
    if (e.target.checked) {
      if(searchFlag===false && flag===false){
        filteredListData = filteredItems.filter((i) => {
          return i.make.match(data);
        });
        concatData = checkedItem.concat(filteredListData);
        // setFilteredPickupList(concatData);
        // concatData=filteredListData
        // arr.push(filteredListData)
        setCheckedItem(concatData);
       }
       
       else if(searchFlag===true || flag===false ||flag===true){
       
        filteredListData = checkedItem.filter((i) => {
          return i.make.match(data);
        });
        concatData = tempState.concat(filteredListData);
        setCheckedItem(concatData);
       }
    } 
    else {
      var data=[]
      var removedData = removeCheckedvalue.filter((e) => {
        return e.make == data;
      });
      concatData = data.concat(removedData);
      setCheckedItem(concatData);
    }
  };
  var value;

  // const checkboxValue = (e, ch) => {
  //   if (checkedItem.length > 0) {
  //     switch (ch) {
  //       case 1:
  //         if (e.target.checked) {
  //           const result = checkedItem.filter((i) => {
  //             return i.make.match("Local");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 2:
  //         if (e.target.checked) {
  //           const result = checkedItem.filter((i) => {
  //             return i.make.match("Galalio");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 3:
  //         if (e.target.checked) {
  //           const result = checkedItem.filter((i) => {
  //             return i.make.match("Kleenal");
  //           });

  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 4:
  //         if (e.target.checked) {
  //           const result = checkedItem.filter((i) => {
  //             return i.make.match("Gala");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 5:
  //         if (e.target.checked) {
  //           const result = checkedItem.filter((i) => {
  //             return i.status.match("available");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 6:
  //         if (e.target.checked) {
  //           const result = checkedItem.filter((i) => {
  //             return i.status.match("unavailable");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           setCheckedItem(filteredList);
  //         }
  //         break;
  //     }
  //   } else {
  //     switch (ch) {
  //       case 1:
  //         if (e.target.checked) {
  //           const result = filteredItems.filter((i) => {
  //             return i.make.match("Local");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 2:
  //         if (e.target.checked) {
  //           const result = filteredItems.filter((i) => {
  //             return i.make.match("Galalio");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 3:
  //         if (e.target.checked) {
  //           const result = filteredItems.filter((i) => {
  //             return i.make.match("Kleenal");
  //           });

  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 4:
  //         if (e.target.checked) {
  //           const result = filteredItems.filter((i) => {
  //             return i.make.match("Gala");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 5:
  //         if (e.target.checked) {
  //           const result = filteredItems.filter((i) => {
  //             return i.status.match("available");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           if (e.target.checked) {
  //             setCheckedItem(filteredList);
  //           } else {
  //             setCheckedItem(filteredItems);
  //           }
  //         }
  //         break;

  //       case 6:
  //         if (e.target.checked) {
  //           const result = filteredItems.filter((i) => {
  //             return i.status.match("unavailable");
  //           });
  //           setFilteredList(checkedItem);
  //           setCheckedItem(result);
  //         } else {
  //           setCheckedItem(filteredList);
  //         }
  //         break;
  //     }
  //   }
  // };
const makeList=["Local","Galalio","Kleenal","Gala"]

var arr=[];
const getData=(search,dropdownValue,checkBoxStatusValue,makeCheckboxValue,checkBoxStatusValue1,statusCheckboxValue)=>{
  // alert(checkBoxStatusValue?.target?.checked)
 setSearchValue(search);
 setDropdownsValue(dropdownValue);
 setCheckBoxStatusValue(checkBoxStatusValue?.target?.checked)
 setMakeCheckBoxValue(makeCheckboxValue)
 setStatusValue(checkBoxStatusValue1?.target?.checked)
 setStatusValueData(statusCheckboxValue)
//  if(statusCheckboxValue?.target?.checked ===true){
//   setCheckValue(makeCheckboxValue);
//  }
 var filteredListData = [];
 
 if(search && dropdownValue==undefined && makeCheckboxValue==undefined && statusCheckboxValue ==undefined){
 var result = filteredItems.filter((item) => {
    return item.items.toLowerCase().match(search) || item.items.match(search);
  });
  setCheckedItem(result)
 }
 else if(search && dropdownValue && makeCheckboxValue==undefined && statusCheckboxValue ==undefined){
  filteredListData = _.where(filteredItems, {
    items:search,
    category:dropdownValue,
  });
  setCheckedItem(filteredListData)
 }
 else if(search && dropdownValue && checkBoxStatusValue?.target?.checked ===true && makeCheckboxValue && statusCheckboxValue ==undefined){
  filteredListData = _.where(filteredItems, {
    items:search,
    category:dropdownValue,
    make:makeCheckboxValue
  });
  setCheckedItem(filteredListData)
 }
 else if(search && dropdownValue && checkBoxStatusValue ===true && makeCheckboxValue && checkBoxStatusValue1?.target?.checked ===true && statusCheckboxValue){
  filteredListData = _.where(filteredItems, {
    items:search,
    category:dropdownValue,
    make:makeCheckboxValue,
    status:statusCheckboxValue
  });
  setCheckedItem(filteredListData)
 }
 else if(search =="" && dropdownsValue && makeCheckBoxValue &&statusValue === true && statusValueData){
  filteredListData = _.where(filteredItems, {
    category:dropdownValue,
    make:makeCheckboxValue,
    status:statusCheckboxValue
  });
  setCheckedItem(filteredListData)
 }
 else if(search =="" || search == undefined && dropdownsValue  && makeCheckBoxValue && checkBoxStatusValue1?.target?.checked ===false && statusValueData){
  filteredListData = _.where(filteredItems, {
    category:dropdownValue,
    make:makeCheckboxValue,
  });
  setCheckedItem(filteredListData)
 }
 else if(search ==""  || search ==undefined && dropdownsValue && checkBoxStatusValue?.target?.checked ===false && makeCheckBoxValue && statusValueData){
  filteredListData = _.where(filteredItems, {
    category:dropdownValue,
  });
  setCheckedItem(filteredListData)
 }
 else if(search && dropdownsValue && makeCheckBoxValue && checkBoxStatusValue1?.target?.checked ===false && statusValueData){
  filteredListData = _.where(filteredItems, {
    items:search,
    category:dropdownValue,
    make:makeCheckBoxValue
  });
  setCheckedItem(filteredListData)
 }
 else if(search && dropdownsValue &&checkBoxStatusValue?.target?.checked ===false && makeCheckBoxValue && statusValueData){
  filteredListData = _.where(filteredItems, {
    items:search,
    category:dropdownValue,
  });
  setCheckedItem(filteredListData)
 }
 else if(search=" " && dropdownsValue && makeCheckBoxValue && statusValueData && checkBoxStatusValue== false && statusValue==undefined){
  filteredListData = _.where(filteredItems, {
    category:dropdownValue,
  });
  setCheckedItem(filteredListData)
 }
 
//  else if(search && dropdownsValue && checkBoxStatusValue ===false && makeCheckBoxValue && statusValueData){
//   filteredListData = _.where(filteredItems, {
//     items:search,
//     category:dropdownValue,
//     status:statusCheckboxValue
//   });
//   setCheckedItem(filteredListData)
//  }
}
  return (
    <div>
      <div className="titleDiv">
        <img src={profileImg} alt="owner"></img>
        <h5 className="title">Item</h5>
      </div>

      <Row className="rowTable">
        <Col className="filter" md={2}>
          <h5 className="colHeader"> Filters </h5>
          <InputGroup className="searchBar">
            <InputGroup.Text id="searchIcon">
              <CiSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="search"
              aria-label="Username"
              aria-describedby="basic-addon1"
              // value={search}
              onChange={(e)=>getData(e.target.value,dropdownsValue,checkBoxStatusValue,makeCheckBoxValue,statusValue,statusValueData)}
              // onChange={(e) => onSearch(e.target.value)}
            />
          </InputGroup>
          <div className="checkFilterDiv">
            <h5 className="checkHeader">Item Category</h5>
            <div className="checkboxDiv">
              <div className="checkfilter">
                <Form.Select className="filter-dropdown" onChange={(e)=>{getData(searchValue,e.target.value,checkBoxStatusValue,makeCheckBoxValue,statusValue,statusValueData)}}>
                  <option disabled selected>
                    All
                  </option>
                  <option>Accessories</option>
                  <option>Chemicals</option>
                  <option>Consumables</option>
                  <option>Shoes</option>
                  <option>Spares</option>
                  <option>Stationery</option>
                  <option>Toiletories</option>
                  <option>Uniform</option>
                </Form.Select>
              </div>
            </div>
            <h5 className="checkHeader">Make</h5>
            <div className="checkboxDiv">
            {makeList &&
                      makeList.map((data, index) => {
                          return (
                            <div className="checkfilter">
                              <input
                                type="checkbox"
                                onChange={(e)=>{getData(searchValue,dropdownsValue,e,data,statusValue,statusValueData)}}
                                // onClick={(e) => {
                                //   checkboxValue(e, data);
                                // }}
                              />
                              <p className="checkbox_label">{data}</p>
                            </div>
                          );
                        })}
            </div>

            <h5 className="checkHeader">Status</h5>
            <div className="checkboxDiv">
              <div className="checkfilter">
                <input
                  type="checkbox"
                  onChange={(e)=>{getData(searchValue,dropdownsValue,checkBoxStatusValue,makeCheckBoxValue,e,"Available")}}
                />
                <p>Available</p>
              </div>
              <div className="checkfilter">
                <input
                  type="checkbox"
                  onChange={(e)=>{getData(searchValue,dropdownsValue,checkBoxStatusValue,makeCheckBoxValue,e,"Unavailable")}}
                />
                <p>Unavailable</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={10} className="colTable">
          <div className="divTable">
            <TableCompo
              data={[
                columns,
                checkedItem.length > 0 ? checkedItem : filteredItems,
                "itemMaster"
              ]}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ItemMaster;
