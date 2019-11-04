import React from 'react'
import ItemIcon from './ItemIcon'

import moment from 'moment'

const ExpenseList = ({ expenses = [] }) => {
  return (
    <ul className="collection">
      {expenses.map((expense, i) => {
        return (
          <li className="collection-item avatar" key={i}>
            <ItemIcon et={expense.type} />
            <div className="line-item-details">
              <main>{expense.note}</main>

              <time>
                {expense.when ? (
                  <>
                    {moment
                      .utc(expense.when)
                      .local()
                      .format('M/D/YY @ h:mm a')}
                  </>
                ) : (
                  <>no time provided</>
                )}
              </time>
              <aside>${expense.amount.toFixed(2)}</aside>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ExpenseList
