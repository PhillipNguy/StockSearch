import './App.css';
import React, { useState } from 'react';

import StockSearch from './components/StockSearch';
import FavoritesList from './components/FavoritesList';
import SearchHistory from './components/SearchHistory';

export const DataContext = React.createContext()

function App() {
  const [newStock, setNewStock] = useState();
  const [stockHistory, setStockHistory] = useState([]);
  const [favoriteStock, setFavoriteStock] = useState([]);


  return (
    <DataContext.Provider value={{newStock, setNewStock, stockHistory, setStockHistory, favoriteStock, setFavoriteStock}}>
      <div className="App">
        <StockSearch/>
        <SearchHistory/>
        <FavoritesList/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
