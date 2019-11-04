import React, { useEffect, useState } from 'react'
import './App.scss'
import M from 'materialize-css'
import axios from 'axios'

import ExpenseSummary from './components/ExpenseSummary'
import ExpenseList from './components/ExpenseList'
import Total from './components/Total'

function App() {
  const [selectedType, setSelectedType] = useState('Food')
  const [textAmount, setTextAmount] = useState('')
  const [newNote, setNewNote] = useState('')

  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    M.AutoInit()
    M.updateTextFields()
  }, [])

  const expenseTypes = ['Food', 'Entertainment', 'Bills', 'Savings', 'Coffee']

  const handleSubmit = async e => {
    e.preventDefault()
    if (textAmount) {
      let expense = {
        amount: parseFloat(textAmount),
        note: newNote,
        type: selectedType
      }

      setExpenses(prev => {
        return [...prev, expense]
      })
    }
  }

  return (
    <div className="App">
      <h1 className="title">Expense Tracker</h1>
      <Total expenses={expenses} />
      <ExpenseSummary expenses={expenses} />
      <form className="col s12 z-depth-1" onSubmit={e => handleSubmit(e)}>
        <header>
          <h5>add an expense...</h5>
        </header>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">attach_money</i>
            <input
              id="amount"
              type="number"
              placeholder="0.00"
              value={textAmount}
              step="0.01"
              onChange={e => setTextAmount(e.target.value)}
            />
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="input-field col s6">
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
            >
              {expenseTypes.map(key => {
                return (
                  <option key={key} value={key}>
                    {key}
                  </option>
                )
              })}
            </select>
            <label>Materialize Select</label>
          </div>
          <div className="input-field col s12">
            <input
              id="note"
              type="text"
              value={newNote}
              onChange={e => setNewNote(e.target.value)}
            />
            <label htmlFor="note">Notes</label>
          </div>
        </div>
        <div className="submit-button">
          <button className="btn">add</button>
        </div>
      </form>
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default App
