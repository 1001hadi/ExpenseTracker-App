import { useState } from 'react'
import { nanoid } from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Container, Card, Form, Row, Col } from 'react-bootstrap';
const Enteries = () => {
    // const [addType, setAddType] = useState ("Select Type of Your Peyment");
    // const [addDate, setAddDate] = useState ("");
    // const [addTitle, setAddTitle] = useState ("");
    // const [addAmount, setAddAmount] = useState ("");
    const [expenses, setExpenses] = useState([]);
    const [expenseData, setExpenseData] = useState({
      type: "",
      name: '',
      date: '',
      amount: ''
    });

    const handleFormChange = (e) => {
      e.preventDefault();
      const fieldName = e.target.getAttribute("name");
      const fieldValue = e.target.value;

      const newExpenseData = { ...expenseData };
      newExpenseData[fieldName] = fieldValue;

      setExpenseData(newExpenseData);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseTitles = {
          id: nanoid(),
          type: expenseData.type,
          name: expenseData.name,
          data: expenseData.data,
          amount: expenseData.amount
         
        }

        setExpenses( ...expenses, expenseTitles);
    }

    return ( 
        <div>
            <Container className='mt-5'>
            <h2>Simple Expense Traker</h2>
                <Card className='m-3' style={{color: '#000'}}>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        <Row>
                         <Col md>
                          <Form.Label>Type</Form.Label>
                          <Form.Select 
                            name='type'
                            required 
                            onChange={handleFormChange}>
                            <option>Select Type of Your Peyment</option>
                            <option value="1">Cash</option>
                            <option value="2">Card</option>
                            <option value="3">Other</option>
                          </Form.Select>
                          <Form.Label className='mt-2' >Date</Form.Label>
                          <Form.Control type='date' 
                            name='date'
                            onChange={handleFormChange}/>
                         </Col>
                         <Col md>
                          <Form.Label>Name</Form.Label>
                          <Form.Control type='text'
                            name='name'
                            required
                            placeholder='Description...'
                            onChange={handleFormChange} />
                          <Form.Label  className='mt-2'>Amount</Form.Label>
                          <Form.Control type='text'
                            name='amount' 
                            required 
                            placeholder='$0.00 ?'
                            onChange={handleFormChange}/>
                         </Col>
                       </Row>
                    </Form>
                    <Button className='mt-3' type='submit'>Add Your Expense</Button>
                </Card.Body>
                </Card>
            </Container>
        </div>
     );
}
 
export default Enteries;