import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Container, Card, Form, Row, Col } from 'react-bootstrap';

const Enteries = ({handleFormChange, submitHandler, expenseData}) => {
 
    return ( 
        <div>
            <Container className='mt-5'>
            <h2>Simple Expense Traker</h2>
                <Card className='m-3' style={{color: '#000'}}>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        <Row>
                         <Col md>
                          <Form.Label>Peyment Type</Form.Label>
                          <Form.Select 
                            name='type'
                            value={expenseData.type}
                            required 
                            onChange={handleFormChange}>
                            <option>Select Type of Your Peyment</option>
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                          </Form.Select>
                          <Form.Label className='mt-2' >Date</Form.Label>
                          <Form.Control type='date' 
                            name='date' 
                            value={expenseData.date}
                            required
                            onChange={handleFormChange}/>
                         </Col>
                         <Col md>
                          <Form.Label>Location / Vendor</Form.Label>
                          <Form.Control type='text'
                            name='name'
                            value={expenseData.name}
                            required
                            placeholder='Where & What did you bougth?'
                            onChange={handleFormChange} />
                          <Form.Label  className='mt-2'>Amount</Form.Label>
                          <Form.Control type='number'
                            name='amount' 
                            value={expenseData.amount}
                            required 
                            placeholder='$0.00 ?'
                            onChange={handleFormChange}/>
                         </Col>
                       </Row>
                    </Form>
                        <Button className='mt-3' type='submit' onClick={submitHandler}>Add Your Expense</Button>
                </Card.Body>
              </Card>
            </Container>
        </div>
     );
}
 
export default Enteries;