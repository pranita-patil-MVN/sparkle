import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import profileImg from "../assets/Images/profileImg.png";
import editImg from "../assets/Images/editImg.png";
import { CiSearch, CiImport, CiExport } from "react-icons/ci";
import { BiPlus } from "react-icons/bi";
import pdfImg from "../assets/Images/pdfImg.png";
import TableCompo from "../CommonComponents/TableCompo";
import itemJson from "../data/itemData.json"
import "../css/pages.css";
import "../css/dataTable.css";
import "../css/commonCss.css";
const ItemMaster = () => {
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [flag, setFlag] = useState();
  useEffect(() => {
    getEmployeeList();
  }, []);
  const getEmployeeList = async () => {
    try {
      // const response = await axios.get(
      //   "https://mocki.io/v1/c6b1a681-4ec1-44b2-8c6e-4d88dd04a8ce"
      // );
      setItem(itemJson.Data);
      setFilteredItems(itemJson.Data);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: "Item",
      selector: (row) => row.item,
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
      name: "Update",
      cell: (row) => (
        <div>
          <button className="btn btn-default update" type="button">
            <img src={editImg} alt="edit" />
          </button>
        </div>
      ),
    },
  ];

  const checkboxValue = (e, ch) => {
    if (checkedItem.length > 0) {
      switch (ch) {
        case 1:
          if (e.target.checked) {
            const result = checkedItem.filter((i) => {
              return i.make.match("Local");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 2:
          if (e.target.checked) {
            const result = checkedItem.filter((i) => {
              return i.make.match("Galalio");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 3:
          if (e.target.checked) {
            const result = checkedItem.filter((i) => {
              return i.make.match("Kleenal");
            });

            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 4:
          if (e.target.checked) {
            const result = checkedItem.filter((i) => {
              return i.make.match("Gala");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 5:
          if (e.target.checked) {
            const result = checkedItem.filter((i) => {
              return i.status.match("available");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 6:
          if (e.target.checked) {
            const result = checkedItem.filter((i) => {
              return i.status.match("unavailable");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            setCheckedItem(filteredList);
          }
          break;
      }
    } else {
      switch (ch) {
        case 1:
          if (e.target.checked) {
            const result = filteredItems.filter((i) => {
              return i.make.match("Local");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 2:
          if (e.target.checked) {
            const result = filteredItems.filter((i) => {
              return i.make.match("Galalio");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 3:
          if (e.target.checked) {
            const result = filteredItems.filter((i) => {
              return i.make.match("Kleenal");
            });

            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 4:
          if (e.target.checked) {
            const result = filteredItems.filter((i) => {
              return i.make.match("Gala");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 5:
          if (e.target.checked) {
            const result = filteredItems.filter((i) => {
              return i.status.match("available");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            if (e.target.checked) {
              setCheckedItem(filteredList);
            } else {
              setCheckedItem(filteredItems);
            }
          }
          break;

        case 6:
          if (e.target.checked) {
            const result = filteredItems.filter((i) => {
              return i.status.match("unavailable");
            });
            setFilteredList(checkedItem);
            setCheckedItem(result);
          } else {
            setCheckedItem(filteredList);
          }
          break;
      }
    }
  };

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <div className="checkFilterDiv">
            <h5 className="checkHeader">Item Category</h5>
            <div className="checkboxDiv">
              <div className="checkfilter">
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <h5 className="checkHeader">Make</h5>
            <div className="checkboxDiv">
              <div className="checkfilter">
                <input
                  type="checkbox"
                  onClick={(e, ch) => {
                    checkboxValue(e, (ch = 1));
                  }}
                />
                <p>Local</p>
              </div>

              <div className="checkfilter">
                <input
                  type="checkbox"
                  onClick={(e, ch) => {
                    checkboxValue(e, (ch = 2));
                  }}
                />
                <p>Galalio</p>
              </div>
              <div className="checkfilter">
                <input
                  type="checkbox"
                  onClick={(e, ch) => {
                    checkboxValue(e, (ch = 3));
                  }}
                />
                <p>Kleenal</p>
              </div>
              <div className="checkfilter">
                <input
                  type="checkbox"
                  onClick={(e, ch) => {
                    checkboxValue(e, (ch = 3));
                  }}
                />
                <p>Gala</p>
              </div>
            </div>

            <h5 className="checkHeader">Status</h5>
            <div className="checkboxDiv">
              <div className="checkfilter">
                <input
                  type="checkbox"
                  onClick={(e, ch) => {
                    checkboxValue(e, (ch = 4));
                  }}
                />
                <p>Available</p>
              </div>
              <div className="checkfilter">
                <input
                  type="checkbox"
                  onClick={(e, ch) => {
                    checkboxValue(e, (ch = 5));
                  }}
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
              ]}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ItemMaster;
