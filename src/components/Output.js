import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Table } from 'react-bootstrap';
import Enteries from './components/Enteries';
const Output = () => {
    return ( 
        <div>
            <Container className='table mt-5'>
                <h3>Expenses</h3>
              <Table responsive="md" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense,index) => {
                        return(
                     <tr key={ index }>
                         <td>{ expense.type }</td>
                         <td>{ expense.name }</td>
                         <td>{ expense.date }</td>
                         <td>{ expense.amount }</td>
                     </tr>
                    )})}
                </tbody>
              </Table>
            </Container>
        </div>
     );
}
 
export default Output;