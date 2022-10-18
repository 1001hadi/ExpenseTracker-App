import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Container, Card, Form, Row, Col } from 'react-bootstrap';

const Enteries = ({handleFormChange, submitHandler, expenseData}) => {
    return ( 
        <div>
            <Container className='mt-5'>
            <h2>Simple Expense Traker</h2>
                <Card className='m-3 card' style={{color: '#000'}}>
                <Card.Body>
                    <Form className='form' onSubmit={submitHandler}>
                        <Row>
                         <Col md>
                           <Form.Label>Payment Type</Form.Label>
                            <Form.Select 
                              name='type'
                              value={expenseData.type}
                              required 
                              onChange={handleFormChange}>
                              <option></option>
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
                                placeholder='Where did you make your purchase?'
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
                        <Button className='mt-3' type='submit'>Add Your Expense</Button>
                    </Form>
                </Card.Body>
              </Card>
            </Container>
        </div>
     );
}
 
export default Enteries;