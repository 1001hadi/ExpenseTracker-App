
import {React, useState} from 'react';
import './App.css';
import Enteries from './components/Enteries';
import Output from './components/Output';
import { nanoid } from 'nanoid';

function App() {
  const [expenses, setExpenses] = useState([]);
    const [expenseData, setExpenseData] = useState({
      type: '',
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

        setExpenses(expenses => {
          return [...expenses, {
            id: nanoid(),
            type: expenseData.type,
            name: expenseData.name,
            date: expenseData.date,
            amount: expenseData.amount
          }]
        })
       
    }
    
    const handleDelete = (id) => {
      const removeItem = expenses.filter(expense => expense.id !== id);
      setExpenses(removeItem);
    }

  return (
    <div className="App">
      <Enteries handleFormChange={handleFormChange} submitHandler={submitHandler}/>
      <Output handleDelete={handleDelete} expenses={expenses}/>
    </div>
  );
}

export default App;
