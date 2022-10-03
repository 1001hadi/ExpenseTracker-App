import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Table } from 'react-bootstrap';
const Output = () => {
    return ( 
        <div>
            <Container className='table mt-5'>
              <Table >
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Food</td>
                        <td>Costco</td>
                        <td>9/28/2022</td>
                        <td>$124.73</td>
                    </tr>
                </tbody>
              </Table>
            </Container>
        </div>
     );
}
 
export default Output;