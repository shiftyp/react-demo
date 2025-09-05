import React, { useState } from 'react';

export const ExpenseList = ({ expenses }) => {

    return (
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense) => (
                    <li>{JSON.stringify(expense)}</li>
                ))}
            </ul>
        </div>
    );
}