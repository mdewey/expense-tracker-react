import React, { useEffect, useState } from 'react'

const Total = ({ expenses = [] }) => {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const total = expenses.reduce((acc, item) => (acc += item.amount), 0)
    setTotal(total)
  }, [expenses, setTotal])
  return (
    <div className="total">
      <h1>${total.toFixed(2)}</h1>
    </div>
  )
}

export default Total
