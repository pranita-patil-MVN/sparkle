import React, {useCallback}from "react";
import { Form, Col, InputGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/form.css";

const RadioButton = (configurationParameters) => {
  console.log(configurationParameters);

  return (
    <>
      {configurationParameters.required !== undefined ? (
        <>
          <Form.Label>
            {configurationParameters.label}
            <sup className="mandatoryField">*</sup>
          </Form.Label>
          <InputGroup
            as={Col}
            md="3"
            controlId={configurationParameters.controlId}
            className="position-relative "
          >
            <div className="radio ">
              {configurationParameters.options.map((items, key) => (
                <label className="form-check-label mx-2">
                  <input
                    type="radio"
                    value={items}
                    className="form-check-input"
                    name={configurationParameters.label}
                    checked={configurationParameters.checked}
                    onClick={(event) => {
                      configurationParameters.onChangeInputHandler(
                        event.target.value
                      );
                    }}
                  />
                  &nbsp;{items}
                </label>
              ))}
            </div>
          </InputGroup>
        </>
      ) : (
        <>
          {" "}
          <Form.Label>{configurationParameters.label}</Form.Label>
          <InputGroup
            as={Col}
            md="3"
            controlId={configurationParameters.controlId}
            className="position-relative "
          >
            <div className="radio ">
              {configurationParameters.options.map((items, key) => (
                <label className="form-check-label mx-2">
                  <input
                    type="radio"
                    value={items}
                    className="form-check-input"
                    name={configurationParameters.label}
                    checked={configurationParameters.checked}
                    onClick={(event) => {
                      configurationParameters.onChangeInputHandler(
                        event.target.value
                      );
                    }}
                  />
                  &nbsp;{items}
                </label>
              ))}
            </div>
          </InputGroup>
        </>
      )}
    </>
  );
};

export default React.memo(RadioButton); 