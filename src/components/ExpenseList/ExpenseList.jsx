import React, { useState } from 'react'
import { ExpenseCard } from "../ExpenseCard";

export const ExpenseList = ({
    deleteExpense,
    expenses,
}) => {
    

    return (
        <main>
            {expenses.map((expense) => {
                return (
                    <ExpenseCard {...expense} deleteExpense={deleteExpense} />
                )
            })}
        </main>
    )
}