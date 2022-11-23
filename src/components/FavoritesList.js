import React, {useContext} from 'react';
import { DataContext} from '../App';

function FavoritesList() {

  const { favoriteStock } = useContext(DataContext);

  return (
    <div>
      <h1>Favorites</h1>
      {
        favoriteStock.map((stock, index) => <div key={index}>
        <h3>{stock.Symbol}</h3>
        </div>)
      }
    </div>
  )
}

export default FavoritesList