import React ,{useEffect}from "react";
import { BiPlus } from "react-icons/bi";
import { CiSearch, CiImport, CiExport } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";
export default function ButtonGroup() {
  const location = useLocation();
  // useEffect(() => {
  //   alert(JSON.stringify(location.pathname="/masters/itemMaster"))
  // }, []);
  return (
    <>
      <button className="btnTable btn">
        <BiPlus size={20} />
        New
      </button>
      <button className=" btnTable btn">
        <CiExport size={20} />
        Excel
      </button>
      
      <button className={location.pathname==="/masters/itemMaster"?"d-none":"btnTable btn"}>
        <CiImport size={20} id="import " />
        Import
      </button>
      <button className=" btnTable btn">
        <CiExport size={20} />
        Pdf
      </button>
    </>
  );
}
