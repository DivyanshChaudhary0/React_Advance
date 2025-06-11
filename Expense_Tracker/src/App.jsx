
import { useState } from 'react'
import './App.css'
import ShowExpense from './ShowExpense';

function App() {

  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  const [allExpenses, setAllExpenses] = useState([]);

  function submit(e){
    e.preventDefault();
    if(expenseName && expenseValue){
      setAllExpenses([...allExpenses,{expenseName, expenseValue}])
      setExpenseName("");
      setExpenseValue("");
    }
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={submit}>
        <input 
          type="text" 
          placeholder='Enter expense name' 
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Enter expense value' 
          value={expenseValue}
          onChange={(e) => setExpenseValue(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ShowExpense allExpenses={allExpenses} />

    </div>
  )
}

export default App
