
import {useState} from 'react';
import './App.css';
import Enteries from './components/Enteries';
import Output from './components/Output';
import { nanoid } from 'nanoid';


function App() {
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
    <div className="App">
      <Enteries handleFormChange={handleFormChange} submitHandler={submitHandler}/>
      <Output submitHandler={submitHandler} expenses={expenses} setExpenses={setExpenses}/>
    </div>
  );
}

export default App;
