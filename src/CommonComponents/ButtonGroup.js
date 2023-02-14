import React from "react";
import { BiPlus } from "react-icons/bi";
import { CiSearch, CiImport, CiExport } from "react-icons/ci";
export default function ButtonGroup() {
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
      <button className="btnTable btn">
        <CiImport size={20} id="import " />
        Import
      </button>
    </>
  );
}
