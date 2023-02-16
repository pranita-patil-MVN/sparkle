import React, { useState } from "react";
import { Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Dropdown = (configurationParameters) => {
  console.log(configurationParameters);

  return (
    <>
      {configurationParameters.required != undefined ? (
        <Form.Select
          aria-label="Select"
          onChange={(event) => {
            configurationParameters.onChangeDropDownHandler(event.target.value);
          }}
          required
          defaultValue=""
        >
          <option disabled value={""}>
            Select
          </option>
          {configurationParameters.options.map((items, key) => (
            <option key={items.value} value={JSON.stringify(items.id)}>
              {items.value}{" "}
            </option>
          ))}{" "}
        </Form.Select>
      ) : (
        <Form.Select
          aria-label="Select"
          onChange={(event) => {
            configurationParameters.onChangeDropDownHandler(event.target.value);
          }}
          defaultValue="Select"
        >
          {" "}
          <option disabled value={"Select"}>
            Select{" "}
          </option>{" "}
          {configurationParameters.options.map((items, key) => (
            <option key={items.value} value={JSON.stringify(items.id)}>
              {items.value}{" "}
            </option>
          ))}{" "}
        </Form.Select>
      )}{" "}
    </>
  );
};

export default Dropdown;
