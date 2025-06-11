
import { useState } from 'react'
import './App.css'

function App() {

  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState("");

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form>
        <input type="text" placeholder='Enter expense name' />
        <input type="text" placeholder='Enter expense value' />
        <button>Add</button>
      </form>
    </div>
  )
}

export default App
