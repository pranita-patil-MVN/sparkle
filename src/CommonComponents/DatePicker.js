import React from "react";
import { Form } from "react-bootstrap"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/form.css";

const SingleDatePicker = (configurationParameters) => {
  console.log(configurationParameters);

  return (
    <>
      {configurationParameters.required !== undefined ? (
        <>
          <Form.Label>
            {configurationParameters.label}
            <sup className="mandatoryField">*</sup>
          </Form.Label>
          <input className="form-control md-3" 
          type="date"
          onChange={(event) => {
                configurationParameters.onChangeDateHandler(
                  event,
                  event.target.value
                );
              }} value={configurationParameters.value} />
        </>
      ) : (
        <>
          <Form.Label>
            {configurationParameters.label} 
          </Form.Label>
          <input className="form-control md-3" type="date" onChange={(event) => {
                configurationParameters.onChangeDateHandler(
                  event,
                  event.target.value
                );
              }} value={configurationParameters.value} />
        </>
      )} 
    </>
  );
};
export default SingleDatePicker;
