
import {React, useState, useEffect} from 'react';
import './App.css';
import Enteries from './components/Enteries';
import Output from './components/Output';
import { nanoid } from 'nanoid';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expenseData, setExpenseData, ] = useState({
      type: '',
      name: '',
      date: '',
      amount: ''
  }
  );
 
  useEffect(() => {
    localStorage.setItem('expenseData', JSON.stringify(expenses));
  },[expenses])

  useEffect(()=> {
    const localExpenses = localStorage.getItem('expenseData');
    return localExpenses ? setExpenses(JSON.parse(localExpenses)) : [];
  },[])

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
      setExpenses(expenses.filter(expense => expense.id !== id));
    }

  return (
    <div className="App">
      <Enteries handleFormChange={handleFormChange} submitHandler={submitHandler}/>
      <Output handleDelete={handleDelete} expenses={expenses}/>
    </div>
  );
}

export default App;
