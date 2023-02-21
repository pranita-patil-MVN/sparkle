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
            controlid={configurationParameters.controlId}
            className="position-relative"
          >
            <input
              className="form-control md-3"
              required
              name={configurationParameters.controlId}
              type={configurationParameters.type}
              placeholder={configurationParameters.placeholder}
              value={configurationParameters.value}
              onChange={(event) => {
                configurationParameters.onChangeInputHandler( 
                  event.target.value
                );
              }}
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
              value={configurationParameters.value}
              onChange={(event) => {
                configurationParameters.onChangeInputHandler(
                  event,
                  event.target.value
                );
              }}
            />
          </InputGroup>
        </>
      )}
    </>
  );
};

export default Input;
