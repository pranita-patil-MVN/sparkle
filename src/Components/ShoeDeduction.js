import React, { useState } from 'react'
import SingleDatePicker from '../CommonComponents/DatePicker'
import {Card, Row, Col, Form, Button} from 'react-bootstrap'
import Dropdown from '../CommonComponents/Dropdown'
 
const ShoeDeduction = () => {

    const [date_of_birth,setDate_of_birth] = useState('S')
    const dropdownOptionsCustomer = [
        {
          id: 1,
          value: "ACG Pharma",
        },
        {
          id: 2,
          value: "B.U.Bhandari",
        },
        {
          id: 3,
          value: "Chakote Group",
        },
        {
          id: 4,
          value: "Devi Construction",
        },
        {
          id: 5,
          value: "Emcure",
        },
        {
          id: 6,
          value: "GTT Communication",
        },
      ];


      const dropdownOptions = [
        {
          id: 1,
          value: "One",
        },
        {
          id: 2,
          value: "Two",
        },
        {
          id: 3,
          value: "Three",
        },
        {
          id: 4,
          value: "Four",
        },
        {
          id: 5,
          value: "Five",
        },
      ];
  return (
    <>
    <Card>
        <Card.Header className ='cardHeader'>
            ShoeDeduction
        </Card.Header>
        <Card.Body>
            <Row className='mb-3'>
                <Col>
                <Dropdown
                label="Site"
                cotnrolId='drp_site'
                options={dropdownOptionsCustomer}
                />
                </Col>
                    <Col>
              <SingleDatePicker
                label="Date"
                value={date_of_birth}
                onChangeDateHandler={(inputValue) => {}}
              />
            </Col>
                <Col>
                <Dropdown
                label="Month/Year"
                cotnrolId='drp_month'
                options={dropdownOptions}
                />
                </Col>
            </Row>
            <Button className='alignLeft' type='button'>
                Save
            </Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default ShoeDeduction