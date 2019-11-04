import React, { useEffect, useState } from 'react'

const ExpenseSummary = ({ expenses = [] }) => {
  const [data, setData] = useState()
  useEffect(() => {
    const data = expenses.reduce((totals, item) => {
      if (totals[item.type]) {
        totals[item.type] += item.amount
      } else {
        totals[item.type] = item.amount
      }
      return totals
    }, {})
    setData({ ...data })
  }, [expenses])

  if (!data || !Object.keys(data).length) {
    return (
      <main className="summary">
        <h3>No Expenses Yet...</h3>
      </main>
    )
  } else {
    return (
      <main className="summary">
        {Object.keys(data).map(category => {
          return (
            <div className={`summary-item z-depth-4 `} key={category}>
              <header className={`${category}`}>{category}</header>
              <p>${data[category].toFixed(2)}</p>
            </div>
          )
        })}
      </main>
    )
  }
}

export default ExpenseSummary
