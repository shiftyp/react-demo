import React, { useState } from 'react';

export const ExpenseForm = ({ addExpense }) => {

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
    setFormData({
      title: '',
      amount: '',
      date: ''
    });
  }

  return (
    <div>
      <h2>Expense Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='amount'>Amount:</label>
          <input 
            type="number" 
            name="amount" 
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='date'>Date:</label>
          <input 
            type="date" 
            name="date" 
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}