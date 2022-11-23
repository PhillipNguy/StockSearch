import React, { useContext } from 'react'
import { DataContext} from '../App'

function SearchHistory() {
  const {stockHistory} = useContext(DataContext)

  return (
    <div>
      <h1>Search History</h1>
      {
        stockHistory.map((stock, index) => <div key={index}>
        <h3>{stock.Symbol}</h3>
        </div>)
      }
    </div>
  )
}

export default SearchHistory