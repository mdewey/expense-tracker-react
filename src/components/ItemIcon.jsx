import React from 'react'

const ItemIcon = ({ et }) => {
  console.log(et)
  let icon = 'help_outline'
  switch (et) {
    case 'Bills':
      icon = 'account_balance'
      break
    case 'Entertainment':
      icon = 'golf_course'
      break
    case 'Coffee':
      icon = 'free_breakfast'
      break
    case 'Savings':
      icon = 'local_atm'
      break
    case 'Food':
      icon = 'local_dining'
      break
    default:
      break
  }

  return <i className={`material-icons circle ${et}`}>{icon}</i>
}

export default ItemIcon
