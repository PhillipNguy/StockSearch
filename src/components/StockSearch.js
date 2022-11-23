import React, { useContext } from 'react'
import { DataContext } from '../App';

function StockSearch() {
  const {newStock, setNewStock, stockHistory, setStockHistory, favoriteStock, setFavoriteStock} = useContext(DataContext)

  const API_KEY = "PV57APT60FKH9LRV";
  const API_KEY2 = "MKK1HMS7XOHKNGJ6";




  async function getNewStock(searchTerm) {
    if (searchTerm) searchTerm = searchTerm.toUpperCase();
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchTerm}&interval=5min&apikey=${API_KEY2}`

    const res = await fetch(API_Call)
    const data = await res.json()

    const stockSymbol = data["Meta Data"]["2. Symbol"]
    const dataKeysAsArray = Object.keys(data["Time Series (5min)"]);
    const stockData = data["Time Series (5min)"][dataKeysAsArray[0]];
    const stockObj = {"Symbol": stockSymbol, ...stockData}

    setNewStock(stockObj);
    setStockHistory([...stockHistory, stockObj]);
  };

  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchTerm = document.getElementsByName('symbol')[0].value
    getNewStock(searchTerm)
    console.log(stockHistory, 'History');
  }

  function handleFavorite(event) {
    event.preventDefault();
    setFavoriteStock([...favoriteStock, newStock]);
    console.log(favoriteStock, 'favorite stock')
   }



  return (
    <div>
      <form
      name='StockSearch'
      onSubmit={((event) => handleSearchSubmit(event))}
      >
        <input
        type='text'
        name='symbol'
        placeholder='Stock Symbol'
        required
        />
        <button type='submit'>
          Search
        </button>
      </form>
      <button onClick={(event) => handleFavorite(event)}>Favorite</button>
      <div>
        {newStock ?
        Object.keys(newStock).map((key, index) => (
          <h1 key={index}>{`${key.toUpperCase()}: ${newStock[key]}`}</h1>
        ))
        : 'No Stock'}
      </div>
    </div>
  )
}

export default StockSearch