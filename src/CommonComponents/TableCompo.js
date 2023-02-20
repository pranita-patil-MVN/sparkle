import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import previousArrowBtnWhite from "../assets/Images/previousArrowBtnWhite.png";
import nextArrowBtnBlue from "../assets/Images/nextArrowBtnBlue.png";
import previousArrowBtnBlue from "../assets/Images/previousArrowBtnBlue.png";
import nextArrowBtnWhite from "../assets/Images/nextArrowBtnWhite.png";
import { BiPlus } from "react-icons/bi";
import { CiSearch, CiImport, CiExport } from "react-icons/ci";
import ButtonGroup from "./ButtonGroup";
import { useNavigate, useLocation } from "react-router-dom";
export default function TableCompo(props) {
  const location = useLocation();
  const navigate=useNavigate();
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
                <img src={previousArrowBtnWhite} />
              ) : (
                <img src={previousArrowBtnBlue} />
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
                <img src={nextArrowBtnWhite} />
              ) : (
                <img src={nextArrowBtnBlue} />
              )}
            </button>
          </li>
        </ul>
      </nav>
    );
  };
const openForm=(value)=>{
  alert(value)
  if(value==='itemMaster'){
    navigate('/masters/itemMaster/createItem')
  }
  else if(value==='siteMaster'){
    navigate('/masters/customer/SiteMaster/createSite')
  }
  else if (value === 'vendorMaster')
  navigate('/masters/vendor/CreateVendor')
  // else if(value==='siteMaster'){
  //   navigate('/masters/customer/SiteMaster/createSite')
  // }
}
  return (
    <div className="outer-data-table">
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
            <div className="btnHeader">

            <button className="btnTable btn" onClick={()=>openForm(props.data[2])}>
        <BiPlus size={20} />
        New
      </button>
      <button className={ location.pathname==="/masters/shift"?"d-none":"btnTable btn"}>
        <CiExport size={20} />
        Excel
      </button>
      
      <button className={location.pathname==="/masters/itemMaster" || location.pathname==="/masters/shift"?"d-none":"btnTable btn"}>
        <CiImport size={20} id="import " />
        Import
      </button>
      <button className={location.pathname==="/masters/employee" || location.pathname==="/masters/customer/SiteMaster" || location.pathname==="/masters/shift"?"d-none":"btnTable btn"}>
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
