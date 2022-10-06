import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Table } from 'react-bootstrap';
const Output = ({ expenses, handleDelete}) => {
    return ( 
        <div>
            <Container className='table mt-5'>
                <h3>Expenses</h3>
              <Table responsive="md" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Peyment Type</th>
                        <th>Location / Vendor</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Action</th>
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
                            <td>
                                <button className="btn btn-outline-danger"
                                onClick={() => handleDelete(expense.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )})}
                </tbody>
              </Table>
            </Container>
        </div>
     );
}
 
export default Output;