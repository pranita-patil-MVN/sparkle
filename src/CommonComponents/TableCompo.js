import React, { useEffect,useState } from "react";
import DataTable from "react-data-table-component";
import previousArrowBtnWhite from "../assets/Images/previousArrowBtnWhite.png";
import nextArrowBtnBlue from "../assets/Images/nextArrowBtnBlue.png";
import previousArrowBtnBlue from "../assets/Images/previousArrowBtnBlue.png";
import nextArrowBtnWhite from "../assets/Images/nextArrowBtnWhite.png";
import { BiPlus, BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { CiSearch, CiImport, CiExport } from "react-icons/ci";
import { FcNext, FcPrevious } from "react-icons/fc";
import ButtonGroup from "./ButtonGroup";
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { exportToExcel } from "react-json-to-excel";
import { jsPDF } from "jspdf";
import siteJson from "../data/SiteData.json";
import autoTable from "jspdf-autotable";
import vendorJson from "../data/vendorData.json";
export default function TableCompo(props) {
  const doc = new jsPDF();
  const [checkedItem, setCheckedItem] = useState([]);
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [siteData, setSiteData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  //     useEffect(()=>{
  // alert(JSON.stringify(props))
  //     },[])
  const customPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    currentPage,
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };
    const toPages = () => {
      const results = [];

      // for (let i = 1; i < pages; i++) {
      //   results.push(i);
      // }
      for (let i = 1; i <= Math.ceil(props.data[1].length / 6); i++) {
        results.push(i);
      }

      return results;
    };
    // const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages();
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
            >
              {previosDisabled ? (
                <BiChevronLeft size={30} color={"var(--bs-gray-500"} />
              ) : (
                <BiChevronLeft size={30} color={"var(--bs-primary"} />
              )}
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";

            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
            >
              {nextDisabled ? (
                <BiChevronRight size={30} color={"var(--bs-gray-500"} />
              ) : (
                <BiChevronRight size={30} color={"var(--bs-primary"} />
                // <FcNext size={20} className="previousIconColor" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  const print = (value) => {
    // alert(value)
    if (value === "vendorMaster") {
      const pdf = new jsPDF("p", "pt", "a4");
      const columns = [
        "Id",
        "company",
        "contact_person",
        "address",
        "mobile",
        "code",
        "vendorGst",
      ];
      var rows = [];

      for (let i = 0; i < vendorJson.Data.length; i++) {
        /*for (var key in json[i]) {
        var temp = [key, json[i][key]];
        rows.push(temp);
      }*/
        var temp = [
          vendorJson.Data[i].id,
          vendorJson.Data[i].company,
          vendorJson.Data[i].contact_person,
          vendorJson.Data[i].address,
          vendorJson.Data[i].mobile,
          vendorJson.Data[i].code,
          vendorJson.Data[i].vendorGst,
        ];
        rows.push(temp);
      }
      // alert(rows)
      pdf.text(235, 40, "Vendor Data");
      pdf.autoTable(columns, rows, {
        startY: 65,
        theme: "grid",
        styles: {
          font: "times",
          halign: "center",
          cellPadding: 3.5,
          lineWidth: 0.5,
          lineColor: [0, 0, 0],
          textColor: [0, 0, 0],
        },
        headStyles: {
          textColor: [0, 0, 0],
          fontStyle: "normal",
          lineWidth: 0.5,
          lineColor: [0, 0, 0],
          fillColor: [166, 204, 247],
        },
        alternateRowStyles: {
          fillColor: [212, 212, 212],
          textColor: [0, 0, 0],
          lineWidth: 0.5,
          lineColor: [0, 0, 0],
        },
        rowStyles: {
          lineWidth: 0.5,
          lineColor: [0, 0, 0],
        },
        tableLineColor: [0, 0, 0],
      });
      // console.log(pdf.output("datauristring"));
      pdf.save("vendorData");
    }
  };

  const JsonExcel = (value) => {
    // alert(value)

    if (value === "vendorMaster") {
      // exportToExcel(vendorJson.Data, 'vendorData')
      doc.text(vendorJson.Data, 10, 10);
    }
  };
  const openForm = (value) => {
    // alert(value)
    if (value === "itemMaster") {
      navigate("/masters/itemMaster/createItem");
    } else if (value === "siteMaster") {
      navigate("/masters/customer/SiteMaster/createSite");
    } else if (value === "vendorMaster")
      navigate("/masters/vendor/createVendor");
    else if (value === "Shift") {
      navigate("/masters/shift/createShift");
    }  else if(value==='customer'){
      navigate('/masters/customer/CreateCustomer')
    }
    else if(value==='capitalAssets'){
      navigate('/masters/capitalAssets/CreateCapitalAssets')
    }
  };
   // Search functionality
   const onSearch=(data)=>{
    // alert(data)
    // var cityValue = data;
    if (props.data[1].length > 0) {
      const result = props.data[1].filter((item) => {
        return item.Site.toLowerCase().match(data) || item.Site.match(data);
      });
      setCheckedItem(result);
    } else {
      const result = siteData.filter((item) => {
        return (
          item.Site.toLowerCase().match(data) ||
          item.Supervisor.toLowerCase().match(data) ||
          item.Location.toLowerCase().match(data) ||
          item.Site.match(data)
        );
      });
      setCheckedItem(result);
    }
  };
  return (
    <div
      className={
        location.pathname === "/masters/shift"
          ? "shift-data-table outer-data-table"
          : "outer-data-table"
      }
    >
      <DataTable
        columns={props.data[0]}
        data={props.data[1]}
        fixedHeader
        fixedHeaderScrollHeight="70vh"
        highlightOnHover
        pagination
        paginationPerPage={6}
        paginationComponent={customPagination}
        subHeader
        subHeaderComponent={
          <div className="subHeader">
      
              
              {" "}
              <InputGroup className="searchBar">
                <InputGroup.Text id="searchIcon">
                  <CiSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  // value={search}
                  onChange={(e) => onSearch(e.target.value)}
                />
              </InputGroup>
          
              
         
            <div className="btnHeader">
              <button
                className="btnTable btn"
                onClick={() => openForm(props.data[2])}
              >
                <BiPlus size={20} />
                New
              </button>
              <button
                className={
                  location.pathname === "/masters/shift"
                    ? "d-none"
                    : "btnTable btn"
                }
                onClick={() => JsonExcel(props.data[2])}
              >
                <CiExport size={20} />
                Excel
              </button>

              <button
                className={
                  location.pathname === "/masters/itemMaster" ||
                  location.pathname === "/masters/shift"
                    ? "d-none"
                    : "btnTable btn"
                }
              >
                <CiImport size={20} id="import " />
                Import
              </button>
              <button
                onClick={() => print(props.data[2])}
                className={
                  location.pathname === "/masters/employee" ||
                  location.pathname === "/masters/customer/SiteMaster" ||
                  location.pathname === "/masters/shift"
                    ? "d-none"
                    : "btnTable btn"
                }
              >
                <CiImport size={20} id="import " />
                PDF
              </button>
            </div>
          </div>
        }
        subHeaderAlign="right"
      />
    </div>
  );
}
