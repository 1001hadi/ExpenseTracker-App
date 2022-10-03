import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Container, Card, Form, Row, Col } from 'react-bootstrap';
const Enteries = () => {
    return ( 
        <div>
            <Container className='mt-5'>
                <Card className='mb-3' style={{color: '#000'}}>
                <Card.Body>
                    <Card.Title>
                    Simple Expense Traker
                    </Card.Title>
                    <Form>
                        <Row>
                         <Col md>
                          <Form.Label>Type</Form.Label>
                          <Form.Control type='text' placeholder='Peyment Method'/>
                          <Form.Label  className='mt-2'>Name</Form.Label>
                          <Form.Control type='text' placeholder='Vendore...'/>
                         </Col>
                         <Col md>
                          <Form.Label>Date</Form.Label>
                          <Form.Control type='date' />
                          <Form.Label  className='mt-2'>Name</Form.Label>
                          <Form.Control type='text' placeholder='Amount'/>
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