import React, { useState } from 'react'

export const ExpenseForm = ({ addExpense }) => {
    const [expenseData, setExpenseData] = useState({
        title: '',
        category: '',
        amount: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setExpenseData({ ...expenseData, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addExpense(expenseData)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} />
            <input type="text" name="category" placeholder="Category" onChange={handleChange} />
            <input type="number" name="amount" placeholder="Amount" onChange={handleChange} />
            <button type="submit">Add Expense</button>
        </form>
    )
}
