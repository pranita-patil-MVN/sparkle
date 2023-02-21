import React, {useCallback} from "react";
import { Form, Col, InputGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/form.css";

const Input = (configurationParameters) => { 
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
            className="position-relative"
          >
            <input
              className="form-control md-3"
              required
              name={configurationParameters.controlId}
              type={configurationParameters.type}
              placeholder={configurationParameters.placeholder}
              // ref={configurationParameters.ref}
              value={configurationParameters.value}
                // defaultValue={configurationParameters.defaultValue}
              onChange={(event) => {
                configurationParameters.onChangeInputHandler( 
                  event.target.value
                );
              }}
              disabled={configurationParameters.disabled}
            />
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
            className="position-relative"
          >
            <input
              className="form-control md-3"
              name={configurationParameters.controlId}
              type={configurationParameters.type}
              placeholder={configurationParameters.placeholder}
              // ref={configurationParameters.ref}
              value={configurationParameters.value}
              // defaultValue={configurationParameters.defaultValue}
              onChange={(event) => {
                configurationParameters.onChangeInputHandler(
                  event,
                  event.target.value
                );
              }}
              disabled={configurationParameters.disabled}
            />
          </InputGroup>
        </>
      )}
    </>
  );
};

export default Input;
