import React, { useState } from 'react'
import './App.css'
import { ExpenseList } from './components/ExpenseList'
import { ExpenseForm } from './components/ExpenseForm'

function App() {
  const [expenses, setExpenses] = useState([{
    title: "Ham Radio",
    category: "Things my partner doesn't like me to spend money on",
    amount: 1e10,
  },
  {
    title: "Astronomy",
    category: "Things my partner doesn't like me to spend money on",
    amount: 1e12,
  }])

  const deleteExpense = (title) => {
    setExpenses(expenses.filter(expense => expense.title !== title))
  }

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  return (
    <>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </>
  )
}

export default App
