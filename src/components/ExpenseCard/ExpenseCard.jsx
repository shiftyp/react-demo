import React from 'react'

export const ExpenseCard = ({
    deleteExpense,
    category,
    title,
    amount
}) => {
    return (
        <article className="expense-card">
            <h2>{title}</h2>
            <p className='amount'>
                ${amount}
            </p>
            <p className="category">
                {category}
            </p>
            <button onClick={() => deleteExpense(title)}>
                Delete
            </button>
        </article>
    )
}